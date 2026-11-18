import { Link } from 'react-router-dom';
import { researchAreas } from '../research.js';
import { site } from '../site.config.js';

const principles = [
  { name: 'Learn from the brain, not imitate it', text: 'We borrow structure from neuroscience and cognitive science where it helps machines work better, not for its own sake.' },
  { name: 'Built for the physical world', text: 'Ideas are judged by whether they help a real robot perceive, remember and act in real buildings.' },
  { name: 'Evidence before claims', text: 'Results are shared once they are measured and reproducible. Until then, we describe directions and open questions.' },
  { name: 'Safety by design', text: 'Evaluation, interpretability and governance are part of the research, not an afterthought.' },
];

export const Research = () => (
  <>
    <section className="container page-head">
      <p className="eyebrow">Research</p>
      <h1 className="display-sm">Brain-inspired AI for robots that perceive, remember and reason</h1>
      <p className="lead">
        We research cognitive architectures, memory, perception and simulation for autonomous systems. The goal is
        machines that build understanding over time, the way people do, rather than starting from zero with
        every task.
      </p>
      <nav className="toc" aria-label="Research areas">
        {researchAreas.map((a) => (
          <a key={a.id} href={`#${a.id}`} className="chip">{a.title}</a>
        ))}
      </nav>
    </section>

    {researchAreas.map((a, i) => (
      <section
        key={a.id}
        id={a.id}
        className={i % 2 === 0 ? 'band research-area' : 'research-area'}
        aria-labelledby={`${a.id}-h`}
      >
        <div className="container research-grid">
          <div>
            <p className="num">{String(i + 1).padStart(2, '0')}{a.flagship ? ' · Main research direction' : ''}</p>
            <h2 id={`${a.id}-h`} className="h2">{a.title}</h2>
            <p className="lead">{a.body}</p>
            <ul className="tags" aria-label="Topics">
              {a.keywords.map((k) => <li key={k}>{k}</li>)}
            </ul>
          </div>
          <div className="card card-dark">
            <h3 className="strong">Questions we are exploring</h3>
            <ul className="qlist">
              {a.questions.map((q) => <li key={q} className="muted">{q}</li>)}
            </ul>
          </div>
        </div>
      </section>
    ))}

    <section className="container section" aria-labelledby="principles">
      <h2 id="principles" className="h2">How we do research</h2>
      <ol className="steps">
        {principles.map((p, i) => (
          <li key={p.name} className={i === 0 ? 'is-first' : undefined}>
            <p className="strong">{p.name}</p>
            <p className="muted">{p.text}</p>
          </li>
        ))}
      </ol>
    </section>

    <section className="container section-tight" aria-labelledby="work">
      <h2 id="work" className="h2">Current work</h2>
      <div className="grid grid-2">
        <div className="card card-accent">
          <span className="meta">Research · In progress</span>
          <h3 className="card-title-lg">Associative memory for autonomous agents</h3>
          <p className="muted">A brain-inspired memory system in which knowledge units connect, strengthen and fade with use. A preprint is in preparation.</p>
        </div>
        <a className="card card-link" href={site.demoUrl}>
          <span className="meta">Demo · Live</span>
          <span className="card-title-lg">Live neural network training</span>
          <span className="muted">Watch a neural network adjust its weights and learn in real time, in the browser.</span>
          <span className="more">Open the demo →</span>
        </a>
      </div>
    </section>

    <section className="band">
      <div className="container callout-row">
        <div>
          <h2 className="h3">Collaborate with us</h2>
          <p className="muted">
            We welcome research institutions, robotics teams, investors and grant programs interested in
            brain-inspired AI, robot memory, perception and simulation.
          </p>
        </div>
        <div className="actions">
          <Link className="btn btn-ghost" to="/robotics">See applications</Link>
          <Link className="btn btn-primary" to="/about#contact">Start a conversation</Link>
        </div>
      </div>
    </section>
  </>
);
