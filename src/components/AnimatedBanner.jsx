import { useEffect, useRef } from 'react';

/* Animated network on the page background.
   Drifting nodes, proximity links, soft glows and cursor attraction.
   Scoped here to its container instead of the whole window. */
const COLORS = ['56,220,205', '3,163,203', '200,220,240'];
const LINK = 170;

const useNetwork = (canvasRef) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mouse = { x: -9999, y: -9999 };
    let w = 0;
    let h = 0;
    let nodes = [];
    let glows = [];
    let raf = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(90, (w * h) / 12000));
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 2 + 1.4,
        c: COLORS[i % COLORS.length],
      }));
      glows = [
        { x: w * 0.2, y: h * 0.3, r: Math.max(w, h) * 0.45, c: '3,163,203', t: 0 },
        { x: w * 0.8, y: h * 0.7, r: Math.max(w, h) * 0.4, c: '33,178,166', t: 2 },
      ];
    };

    const frame = (time = 0) => {
      ctx.clearRect(0, 0, w, h);
      const t = time / 1000;

      glows.forEach((g) => {
        const gx = g.x + Math.sin(t * 0.15 + g.t) * w * 0.12;
        const gy = g.y + Math.cos(t * 0.12 + g.t) * h * 0.1;
        const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, g.r);
        grad.addColorStop(0, `rgba(${g.c},0.28)`);
        grad.addColorStop(1, `rgba(${g.c},0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      });

      nodes.forEach((n) => {
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        if (Math.hypot(dx, dy) < 200) {
          n.x += dx * 0.004;
          n.y += dy * 0.004;
        }
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = w + 20; else if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20; else if (n.y > h + 20) n.y = -20;
      });

      ctx.lineWidth = 1.1;
      for (let a = 0; a < nodes.length; a++) {
        const p = nodes[a];
        for (let b = a + 1; b < nodes.length; b++) {
          const q = nodes[b];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(${p.c},${((1 - d / LINK) * 0.85).toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
        const md = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (md < 200) {
          ctx.strokeStyle = `rgba(255,255,255,${((1 - md / 200) * 0.5).toFixed(3)})`;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      nodes.forEach((n) => {
        ctx.fillStyle = `rgba(${n.c},0.18)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(${n.c},1)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!reduce) raf = requestAnimationFrame(frame);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onVisibility = () => {
      if (reduce) return;
      cancelAnimationFrame(raf);
      if (!document.hidden) raf = requestAnimationFrame(frame);
    };

    const host = canvas.parentElement;
    const observer = new ResizeObserver(() => {
      resize();
      if (reduce) frame(0);
    });
    resize();
    frame(0);
    observer.observe(host);
    host.addEventListener('pointermove', onMove);
    host.addEventListener('pointerleave', onLeave);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      host.removeEventListener('pointermove', onMove);
      host.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [canvasRef]);
};

export const AnimatedBanner = ({ children }) => {
  const canvasRef = useRef(null);
  useNetwork(canvasRef);
  return (
    <section className="anim-banner">
      <canvas ref={canvasRef} aria-hidden="true" />
      <div className="container anim-banner-content">{children}</div>
    </section>
  );
};
