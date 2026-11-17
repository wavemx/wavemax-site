import { Link } from 'react-router-dom';
import { NetworkVisual } from '../components/NetworkVisual.jsx';
import { site } from '../site.config.js';

const steps = [
  { name: 'Assess', text: 'Where AI can create value, and how ready your data, systems and people are.' },
  { name: 'Plan', text: 'A prioritized roadmap with governance, budget and success measures.' },
  { name: 'Pilot', text: 'A focused pilot integrated with real systems, measured against the plan.' },
  { name: 'Scale', text: "Roll out what works, retire what doesn't, and hand over to your team." },
];

export const Home = () => (
  <>
    <section className="container hero">
      <div className="hero-copy">
        <p className="eyebrow">AI strategy and intelligent systems</p>
        <h1 className="display">AI strategy. Intelligent systems. Real-world impact.</h1>
        <p className="lead">
          Helping organizations turn AI opportunities into practical strategies, integrated solutions and
          measurable results. Exploring what comes next in robotics and autonomous intelligence.
        </p>
        <div className="actions">
          <Link className="btn btn-primary" to="/about#contact">Discuss your project</Link>
          <Link className="btn btn-ghost" to="/readiness">Take the AI readiness check</Link>
        </div>
      </div>
      <NetworkVisual />
    </section>

    <section className="band" aria-labelledby="who">
      <div className="container band-inner">
        <h2 id="who" className="label">Who we help</h2>
        <p>
          Leadership teams that want AI to move from slide decks into daily operations, with the governance to
          do it responsibly.
        </p>
      </div>
    </section>

    <section className="container section" aria-labelledby="what">
      <h2 id="what" className="h2">From AI ambition to practical implementation</h2>
      <p className="sub">Two areas of work. One is delivered today. The other is where we are exploring next.</p>
      <div className="grid grid-2">
        <Link className="card card-link card-lg" to="/consulting">
          <span className="pill pill-solid">Services</span>
          <span className="card-title-lg">AI consulting</span>
          <span className="muted">Strategy, readiness assessments, governance, enterprise integration and pilot planning.</span>
          <span className="more">See services →</span>
        </Link>
        <Link className="card card-link card-lg" to="/robotics">
          <span className="pill">Exploration</span>
          <span className="card-title-lg">Robotics and autonomous intelligence</span>
          <span className="muted">Perspectives, emerging applications and our own projects at the edge of physical AI.</span>
          <span className="more">Explore →</span>
        </Link>
      </div>
    </section>

    <section className="container section-tight" aria-labelledby="how">
      <h2 id="how" className="h3">How an engagement works</h2>
      <ol className="steps">
        {steps.map((s, i) => (
          <li key={s.name} className={i === 0 ? 'is-first' : undefined}>
            <p className="step-name">{String(i + 1).padStart(2, '0')} {s.name}</p>
            <p className="muted">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>

    <section className="container section-tight" aria-labelledby="ready">
      <div className="callout">
        <div>
          <h2 id="ready" className="h3">How ready is your organization for AI?</h2>
          <p className="muted">Six questions, about two minutes. You get a readiness score and a suggested first step.</p>
        </div>
        <Link className="btn btn-primary" to="/readiness">Start the check</Link>
      </div>
    </section>

    <section className="container section-tight" aria-labelledby="latest">
      <div className="row-head">
        <h2 id="latest" className="h3">Insights and projects</h2>
        <Link className="more" to="/insights">View all →</Link>
      </div>
      <div className="grid grid-3">
        <a className="card card-link" href={site.demoUrl}>
          <span className="meta">Demo · Neural networks</span>
          <span className="card-title">Live neural network training, in the browser</span>
          <span className="muted small">Watch a small network learn in real time.</span>
        </a>
        <Link className="card card-link" to="/readiness">
          <span className="meta">Tool · Readiness</span>
          <span className="card-title">AI readiness check</span>
          <span className="muted small">Score your organization across six areas.</span>
        </Link>
        <Link className="card card-link" to="/robotics">
          <span className="meta">Perspective · Robotics</span>
          <span className="card-title">Where autonomy earns trust first</span>
          <span className="muted small">Why inspection, logistics and facilities lead the way.</span>
        </Link>
      </div>
    </section>

    <section className="cta" aria-labelledby="cta">
      <div className="container cta-inner">
        <h2 id="cta" className="h2">Have an AI initiative that needs to land?</h2>
        <p className="sub center">Start with a 30-minute conversation about your goals and whether we are the right fit.</p>
        <Link className="btn btn-primary" to="/about#contact">Discuss your project</Link>
      </div>
    </section>
  </>
);
