import { Link } from 'react-router-dom';
import { AnimatedBanner } from '../components/AnimatedBanner.jsx';
import { ContactForm } from '../components/ContactForm.jsx';
import { site } from '../site.config.js';

const principles = [
  { name: 'Research with a purpose', text: 'Every research question is tied to something a real robot or organization needs to do.' },
  { name: 'Learn from the brain', text: 'Neuroscience and cognitive science guide the design where they make machines work better.' },
  { name: 'Evidence before claims', text: 'Results are shared once they are measured and reproducible. Until then, WaveMax describes directions and open questions.' },
  { name: 'Safe and governed by default', text: 'Evaluation, interpretability and governance are built in from the start, not added later.' },
];

export const About = () => (
  <>
    <AnimatedBanner>
      <p className="eyebrow">About</p>
      <h1 className="display-sm">About WaveMax</h1>
      <p className="lead">
        A research company building brain-inspired intelligence for robots and autonomous systems.
      </p>
    </AnimatedBanner>

    <section className="container section" aria-labelledby="founded">
      <div className="about-story">
        <h2 id="founded" className="h2">Why WaveMax was founded</h2>
        <div className="story-copy">
          <p className="lead">
            WaveMax was founded on a simple observation: today’s AI is remarkably capable in the moment, yet it
            forgets almost everything between tasks and sees the world one frame at a time. Robots and autonomous
            systems inherit that limitation. They can be trained to act, but they struggle to build lasting
            understanding from experience.
          </p>
          <p className="lead">
            The company set out to change that by studying how brains do it. Its research focuses on cognitive
            architecture, memory, perception and simulation: how a machine can notice what matters, remember it,
            connect it to what it already knows, and use it the next time it acts.
          </p>
          <p className="lead">
            WaveMax was also founded with a practical conviction. New intelligence only matters once it works inside
            real organizations, with their systems, data, safety rules and people. That is why the company pairs its
            research with applied AI advisory, helping organizations put AI and AI agents to work responsibly today
            while it develops what comes next.
          </p>
        </div>
      </div>
    </section>

    <section className="band" aria-labelledby="pillars">
      <div className="container section">
        <h2 id="pillars" className="h2">What WaveMax does</h2>
        <div className="grid grid-3 spaced">
          <Link className="card card-link" to="/research">
            <span className="pill pill-solid">Research</span>
            <span className="card-title-lg">Brain-inspired AI</span>
            <span className="muted">Cognitive architecture, associative memory, robot perception, simulation and embodied learning.</span>
          </Link>
          <Link className="card card-link" to="/robotics">
            <span className="pill">Applications</span>
            <span className="card-title-lg">Robotics and autonomy</span>
            <span className="muted">Where autonomous systems are proving useful first, and what they need to succeed.</span>
          </Link>
          <Link className="card card-link" to="/consulting">
            <span className="pill">Advisory</span>
            <span className="card-title-lg">Applied AI</span>
            <span className="muted">Strategy, governance and integration for organizations adopting AI agents now.</span>
          </Link>
        </div>
      </div>
    </section>

    <section className="container section" aria-labelledby="mission">
      <div className="grid grid-2 mv">
        <div>
          <h2 id="mission" className="h3">Mission</h2>
          <p className="lead">
            To build machines that perceive, remember and reason, so autonomous systems can learn from experience
            and earn trust in the real world.
          </p>
        </div>
        <div>
          <h2 className="h3">Vision</h2>
          <p className="lead">
            Robots and AI agents that grow more capable with every task they do, working safely alongside people in
            buildings, facilities and field operations.
          </p>
        </div>
      </div>
    </section>

    <section className="band" aria-labelledby="approach">
      <div className="container section">
        <h2 id="approach" className="h2">How WaveMax works</h2>
        <ol className="steps">
          {principles.map((p, i) => (
            <li key={p.name} className={i === 0 ? 'is-first' : undefined}>
              <p className="strong">{p.name}</p>
              <p className="muted">{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {site.showContact && (
      <section id="contact" className="container section" aria-labelledby="contact-h">
        <h2 id="contact-h" className="h2">Get in touch</h2>
        <p className="sub">
          Research collaborations, funding, robotics projects or advisory work: send a note and we will reply within
          two business days.
        </p>
        <div className="contact-grid">
          {site.bookingUrl && (
            <div className="card card-accent">
              <h3 className="card-title-lg">Book a consultation</h3>
              <p className="muted">Pick a time that works for you.</p>
              <a className="btn btn-primary" href={site.bookingUrl}>Book a call</a>
            </div>
          )}
          <ContactForm />
        </div>
      </section>
    )}
  </>
);
