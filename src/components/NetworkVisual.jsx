import { useEffect, useRef } from 'react';

const NODE_COUNT = 46;
const LINK_DISTANCE = 120;
const POINTER_RADIUS = 160;
const ACCENT = [3, 163, 203];
const IDLE = [74, 80, 91];

const makeNodes = (width, height) => {
  let seed = 7;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  return Array.from({ length: NODE_COUNT }, () => ({
    x: 24 + rand() * (width - 48),
    y: 24 + rand() * (height - 48),
    vx: (rand() - 0.5) * 0.18,
    vy: (rand() - 0.5) * 0.18,
    r: 1.8 + rand() * 2.2,
  }));
};

const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));

// An abstract neural network that drifts slowly and lights up around the pointer.
export const NetworkVisual = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer = { x: -9999, y: -9999 };
    let nodes = [];
    let width = 0;
    let height = 0;
    let frame = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = makeNodes(width, height);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const heat = nodes.map((n) => Math.max(0, 1 - Math.hypot(n.x - pointer.x, n.y - pointer.y) / POINTER_RADIUS));

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d > LINK_DISTANCE) continue;
          const t = Math.max(heat[i], heat[j]);
          const [r, g, b] = mix(IDLE, ACCENT, t);
          ctx.strokeStyle = `rgba(${r},${g},${b},${0.25 + t * 0.6 - (d / LINK_DISTANCE) * 0.2})`;
          ctx.lineWidth = 1 + t * 0.6;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }

      nodes.forEach((n, i) => {
        const [r, g, b] = mix(IDLE, ACCENT, heat[i]);
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + heat[i] * 3.5, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const step = () => {
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 16 || n.x > width - 16) n.vx *= -1;
        if (n.y < 16 || n.y > height - 16) n.vy *= -1;
      });
      draw();
      frame = requestAnimationFrame(step);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      if (reduceMotion) draw();
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
      if (reduceMotion) draw();
    };

    resize();
    if (reduceMotion) draw();
    else frame = requestAnimationFrame(step);

    const observer = new ResizeObserver(() => {
      resize();
      draw();
    });
    observer.observe(canvas);
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div className="visual">
      <canvas ref={canvasRef} aria-hidden="true" />
    </div>
  );
};
