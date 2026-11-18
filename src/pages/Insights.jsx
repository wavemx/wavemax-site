import { useState } from 'react';
import { Link } from 'react-router-dom';
import { site } from '../site.config.js';

// Add articles and case studies here as they are published.
const items = [
  { kind: 'Demo', topic: 'Neural networks', title: 'Live neural network training', body: 'A real-time browser visualization of a network learning.', href: site.demoUrl, meta: 'Interactive' },
  { kind: 'Tool', topic: 'Readiness', title: 'AI readiness check', body: 'Six questions that score your organization and suggest a first step.', to: '/readiness', meta: 'About 2 minutes' },
  { kind: 'Research', topic: 'Memory', title: 'Why robots need memory', body: 'Our main direction: brain-inspired associative memory for autonomous agents.', to: '/research#memory', meta: 'Research area' },
  { kind: 'Research', topic: 'Cognition', title: 'Brain-inspired cognitive architecture', body: 'How perception, memory, attention and planning can work together in one system.', to: '/research#cognitive-architecture', meta: 'Research area' },
  { kind: 'Research', topic: 'Perception', title: 'Perception for robots', body: 'Fusing vision, depth, touch and sound into a shared picture of the world.', to: '/research#perception', meta: 'Research area' },
  { kind: 'Research', topic: 'Simulation', title: 'Closing the sim-to-real gap', body: 'Training and testing robots in simulated worlds and digital twins.', to: '/research#simulation', meta: 'Research area' },
  { kind: 'Perspective', topic: 'Robotics', title: 'Where autonomy earns trust first', body: 'Why inspection, logistics and facilities lead the move to physical AI.', to: '/robotics', meta: 'Short read' },
];

const tabs = ['All', ...new Set(items.map((i) => i.kind))];

const Card = ({ item }) => {
  const body = (
    <>
      <span className="meta">{item.kind} · {item.topic}</span>
      <span className="card-title">{item.title}</span>
      <span className="muted small">{item.body}</span>
      <span className="meta push">{item.meta}</span>
    </>
  );
  return item.to
    ? <Link className="card card-link" to={item.to}>{body}</Link>
    : <a className="card card-link" href={item.href}>{body}</a>;
};

export const Insights = () => {
  const [tab, setTab] = useState('All');
  const shown = tab === 'All' ? items : items.filter((i) => i.kind === tab);

  return (
    <section className="container page-head">
      <h1 className="display-sm">Insights and projects</h1>
      <p className="lead">Research notes, working demonstrations and projects in brain-inspired AI and robotics.</p>

      <a className="feature card-link" href={site.demoUrl}>
        <div className="feature-art" aria-hidden="true">
          <svg viewBox="0 0 280 160" width="100%" height="100%">
            {[[40, 40], [40, 80], [40, 120], [140, 30], [140, 65], [140, 100], [140, 135], [240, 60], [240, 100]].map(([x, y], i, all) => (
              <g key={i}>
                {all.filter(([x2]) => x2 === x + 100).map(([x2, y2], j) => (
                  <line key={j} x1={x} y1={y} x2={x2} y2={y2} stroke="#1D4552" strokeWidth="1" />
                ))}
              </g>
            ))}
            {[[40, 40], [40, 80], [40, 120], [140, 30], [140, 65], [140, 100], [140, 135], [240, 60], [240, 100]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="6" fill={i % 3 === 0 ? '#03A3CB' : '#4A505B'} />
            ))}
          </svg>
        </div>
        <div className="feature-copy">
          <span className="eyebrow">Featured demo</span>
          <span className="h3">Live neural network training</span>
          <span className="muted">Watch a neural network adjust its weights and learn a task in real time, right in your browser.</span>
          <span className="more">Open the demo →</span>
        </div>
      </a>

      <div className="tabs" role="group" aria-label="Filter by type">
        {tabs.map((t) => (
          <button key={t} type="button" className="tab" aria-pressed={t === tab} onClick={() => setTab(t)}>{t}</button>
        ))}
      </div>
      <div className="grid grid-3" aria-live="polite">
        {shown.map((item) => <Card key={item.title} item={item} />)}
      </div>
      <p className="meta note">More articles and case studies are on the way.</p>
    </section>
  );
};
