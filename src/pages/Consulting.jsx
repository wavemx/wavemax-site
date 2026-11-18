import { ContactLink } from '../components/ContactLink.jsx';
import { Link } from 'react-router-dom';

const services = [
  { title: 'AI strategy', body: 'Rank AI use cases by value, feasibility and risk, and turn them into a funded roadmap.' },
  { title: 'Readiness assessment', body: 'Score data, systems, skills and governance against what your use cases need.' },
  { title: 'Governance', body: 'Practical AI policy, risk controls and acceptable-use rules your auditors can follow.' },
  { title: 'Integration and pilots', body: 'Connect AI agents to the systems you already run, and prove value with a measured pilot.' },
];

export const Consulting = () => (
  <>
    <section className="container page-head">
      <p className="eyebrow">Advisory</p>
      <h1 className="display-sm">Applied AI advisory</h1>
      <p className="lead">
        Alongside our research, we help a small number of organizations put AI and AI agents to work, drawing on
        more than 15 years of enterprise architecture and digital transformation.
      </p>
    </section>

    <section className="container section-tight" aria-label="What we offer">
      <div className="grid grid-2">
        {services.map((s) => (
          <article key={s.title} className="card">
            <h2 className="card-title-lg">{s.title}</h2>
            <p className="muted">{s.body}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="cta">
      <div className="container callout-row">
        <div>
          <h2 className="h3">Not sure where to start?</h2>
          <p className="muted">Take the two-minute readiness check to see where your organization stands.</p>
        </div>
        <div className="actions">
          <Link className="btn btn-ghost" to="/readiness">Take the readiness check</Link>
          <ContactLink className="btn btn-primary">Get in touch</ContactLink>
        </div>
      </div>
    </section>
  </>
);
