import { Link } from 'react-router-dom';
import { NetworkVisual } from '../components/NetworkVisual.jsx';
import { researchAreas } from '../research.js';
import { site } from '../site.config.js';

export const Home = () => (
  <>
    <section className="container hero">
      <div className="hero-copy">
        <p className="eyebrow">Brain-inspired AI research</p>
        <h1 className="display">Intelligence for machines that perceive, remember and reason.</h1>
        <p className="lead">
          WaveMax researches brain-inspired AI for robots and autonomous systems: cognitive architecture, memory,
          perception and simulation. We also help organizations put AI to work today.
        </p>
        <div className="actions">
          <Link className="btn btn-primary" to="/research">Explore our research</Link>
          <Link className="btn btn-ghost" to="/about#contact">Discuss a collaboration</Link>
        </div>
      </div>
      <NetworkVisual />
    </section>

    <section className="band" aria-labelledby="mission">
      <div className="container band-inner">
        <h2 id="mission" className="label">Our focus</h2>
        <p>
          Today’s AI forgets between tasks and sees the world one frame at a time. We study how brains build lasting
          understanding, and apply those ideas to robots that learn from experience.
        </p>
      </div>
    </section>

    <section className="container section" aria-labelledby="areas">
      <div className="row-head">
        <h2 id="areas" className="h2">Research areas</h2>
        <Link className="more" to="/research">All research →</Link>
      </div>
      <div className="grid grid-3">
        {researchAreas.map((a) => (
          <Link key={a.id} className="card card-link" to={`/research#${a.id}`}>
            {a.flagship && <span className="pill pill-solid">Main direction</span>}
            <span className="card-title">{a.title}</span>
            <span className="muted small">{a.short}</span>
          </Link>
        ))}
      </div>
    </section>

    <section className="container section-tight" aria-labelledby="what">
      <h2 id="what" className="h3">From research to the real world</h2>
      <div className="grid grid-2 spaced">
        <Link className="card card-link card-lg" to="/robotics">
          <span className="pill">Applications</span>
          <span className="card-title-lg">Robotics and autonomous intelligence</span>
          <span className="muted">Where autonomy is showing up first: inspection, logistics, facilities, healthcare and field work.</span>
          <span className="more">See applications →</span>
        </Link>
        <Link className="card card-link card-lg" to="/consulting">
          <span className="pill">Advisory</span>
          <span className="card-title-lg">Applied AI advisory</span>
          <span className="muted">Strategy, governance and integration for organizations putting AI agents to work now.</span>
          <span className="more">How we help →</span>
        </Link>
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
        <Link className="card card-link" to="/research#memory">
          <span className="meta">Research · Memory</span>
          <span className="card-title">Why robots need memory</span>
          <span className="muted small">Our main direction: associative memory for autonomous agents.</span>
        </Link>
        <Link className="card card-link" to="/research#simulation">
          <span className="meta">Research · Simulation</span>
          <span className="card-title">Closing the sim-to-real gap</span>
          <span className="muted small">Training robots in simulated worlds before they meet the real one.</span>
        </Link>
      </div>
    </section>

    <section className="cta" aria-labelledby="cta">
      <div className="container cta-inner">
        <h2 id="cta" className="h2">Research partners and funders</h2>
        <p className="sub center">
          We welcome conversations with research institutions, robotics teams, investors and grant programs.
        </p>
        <Link className="btn btn-primary" to="/about#contact">Start a conversation</Link>
      </div>
    </section>
  </>
);
