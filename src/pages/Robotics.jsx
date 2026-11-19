import { ContactLink } from '../components/ContactLink.jsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { site } from '../site.config.js';

const cases = [
  { tag: 'Facilities', stage: 'Early deployment', title: 'Autonomous inspection rounds', body: 'Mobile robots that walk routine routes, read gauges and flag anomalies into the work order system.' },
  { tag: 'Logistics', stage: 'Scaling', title: 'Warehouse picking and transport', body: 'Fleets moving goods between stations, coordinated with warehouse management software.' },
  { tag: 'Manufacturing', stage: 'Scaling', title: 'Vision-guided quality checks', body: 'Cameras and models spotting defects on the line, feeding results back to operators.' },
  { tag: 'Healthcare', stage: 'Pilot stage', title: 'Hospital delivery robots', body: 'Supplies and samples moved between floors so clinical staff stay with patients.' },
  { tag: 'Field operations', stage: 'Research', title: 'Legged robots for rough terrain', body: 'Walking platforms reaching sites that wheels cannot, for survey and maintenance.' },
  { tag: 'Facilities', stage: 'Research', title: 'Agents that coordinate people and robots', body: 'AI agents that schedule, dispatch and verify work across human crews and machines.' },
];

const filters = ['All', 'Facilities', 'Logistics', 'Manufacturing', 'Healthcare', 'Field operations'];

// Research projects. Status labels stay honest: these are directions being explored, not finished results.
const projects = [
  {
    status: 'Research · Exploration',
    title: 'Fully autonomous robots',
    body: 'Robots that plan, act and recover from mistakes on their own, without a remote operator, using memory of past runs to handle situations they have not seen before.',
    focus: ['Long-horizon planning', 'Failure recovery', 'Learning from past runs'],
  },
  {
    status: 'Research · Exploration',
    title: 'Self-aware robots',
    body: 'Robots that build a model of themselves: their own body, sensors, limits and condition. A robot that knows its own state can notice a failing motor, adapt to damage and tell an operator when a task is beyond it.',
    focus: ['Robot self-modeling', 'Fault and damage awareness', 'Knowing its own limits'],
  },
  {
    status: 'Research · Open question',
    title: 'Machine self-reflection',
    body: 'Can a machine think about its own thinking? We study metacognition, a key ingredient of human self-awareness: knowing what you know, recognizing uncertainty and questioning your own decisions before acting.',
    focus: ['Metacognition', 'Uncertainty awareness', 'Self-explanation'],
  },
  {
    status: 'Research · Exploration',
    title: 'Network-aware robot teams',
    body: 'Robots that are aware of one another and of the network they share. They exchange what they perceive and remember, so one robot’s experience benefits the whole fleet, and they keep working safely when the connection drops.',
    focus: ['Multi-robot coordination', 'Shared fleet memory', 'Edge and cloud awareness'],
  },
];

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? cases : cases.filter((c) => c.tag === filter);
  return (
    <>
      <div className="chips" role="group" aria-label="Filter by industry">
        {filters.map((f) => (
          <button key={f} type="button" className="chip" aria-pressed={f === filter} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>
      <div className="grid grid-auto" aria-live="polite">
        {shown.map((c) => (
          <article key={c.title} className="card">
            <span className="meta">{c.tag} · {c.stage}</span>
            <h3 className="card-title">{c.title}</h3>
            <p className="muted small">{c.body}</p>
          </article>
        ))}
      </div>
    </>
  );
};

export const Robotics = () => (
  <>
    <section className="container page-head">
      <p className="pill">Exploration</p>
      <h1 className="display-sm">Robotics and autonomous intelligence</h1>
      <p className="lead">
        AI is moving from screens into the physical world. This is where we study what that means for
        operations, test ideas in our own projects, and share what we learn.
      </p>
    </section>

    <section className="container section-tight" aria-label="Scope">
      <div className="grid grid-2">
        <div className="card card-accent">
          <p className="strong accent">What we explore</p>
          <p className="muted">Brain-inspired cognition, memory, perception and simulation for robots. <Link className="inline-link" to="/research">See our research</Link>.</p>
        </div>
        <div className="card">
          <p className="strong">What we deliver today</p>
          <p className="muted">
            Advisory on robotics readiness and pilot planning, as part of our{' '}
            <Link className="inline-link" to="/consulting">applied AI advisory</Link>. We don't sell or build robots.
          </p>
        </div>
      </div>
    </section>

    <section className="band" aria-labelledby="persp">
      <div className="container section">
        <h2 id="persp" className="h2">Our perspective</h2>
        <div className="grid grid-3 gap-lg">
          <div>
            <h3 className="card-title-lg">Memory matters</h3>
            <p className="muted">Autonomous systems need to learn from experience and connect what they know, not just react. This is our main research direction.</p>
          </div>
          <div>
            <h3 className="card-title-lg">Integration beats novelty</h3>
            <p className="muted">A robot only creates value once it fits existing workflows, systems and safety rules. That is an architecture problem.</p>
          </div>
          <div>
            <h3 className="card-title-lg">Start with the routine work</h3>
            <p className="muted">Inspection, logistics and facilities tasks are where autonomy earns trust first.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="container section" aria-labelledby="apps">
      <h2 id="apps" className="h2">Emerging applications</h2>
      <p className="sub">Pick an industry to explore where autonomy is showing up.</p>
      <Gallery />
    </section>

    <section className="container section-tight" aria-labelledby="proj">
      <h2 id="proj" className="h2">Projects</h2>
      <p className="sub">
        Our robotics research asks what it takes for machines to act on their own, understand themselves and work
        as a connected team.
      </p>
      <div className="grid grid-2">
        {projects.map((p) => (
          <article key={p.title} className="card">
            <span className="meta">{p.status}</span>
            <h3 className="card-title-lg">{p.title}</h3>
            <p className="muted">{p.body}</p>
            <ul className="tags" aria-label="Focus areas">
              {p.focus.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </article>
        ))}
        <div className="card">
          <span className="meta">Research · In progress</span>
          <h3 className="card-title-lg">Associative memory for autonomous agents</h3>
          <p className="muted">A brain-inspired approach to how agents store and connect knowledge. Details will follow publication.</p>
          <Link className="more" to="/research#memory">About this research →</Link>
        </div>
        <a className="card card-link" href={site.demoUrl}>
          <span className="meta">Demo · Live</span>
          <span className="card-title-lg">Live neural network training</span>
          <span className="muted">A browser visualization of a network learning in real time.</span>
          <span className="more">See the demo →</span>
        </a>
      </div>
    </section>

    <section className="band">
      <div className="container callout-row section-tight">
        <div>
          <h2 className="h3">Research partners and funders</h2>
          <p className="muted">We welcome conversations with research institutions, investors and grant programs interested in this work.</p>
        </div>
        <ContactLink className="btn btn-primary" fallback={{ to: '/research', label: 'Explore our research' }}>Start a conversation</ContactLink>
      </div>
    </section>
  </>
);
