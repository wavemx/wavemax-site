import { useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
  { title: 'AI strategy', body: 'Tie AI to business goals. Identify and rank use cases by value, feasibility and risk.', out: 'A prioritized AI roadmap with owners and budget.' },
  { title: 'Readiness assessment', body: 'Review data quality, systems, skills, security and culture against what your use cases need.', out: 'A scored readiness report and gap plan.' },
  { title: 'Governance', body: 'Policies, risk controls, review processes and acceptable-use rules that let teams move fast without surprises.', out: 'An AI policy and governance framework your auditors can follow.' },
  { title: 'Enterprise integration', body: 'Connect AI agents and models to the CRM, ERP, data platforms and workflows you already run.', out: 'A reference architecture and integration plan.' },
  { title: 'Pilot planning', body: 'Scope a pilot with clear success measures, then run it on real data with real users.', out: 'A measured pilot and a go / no-go recommendation.' },
];

const formats = [
  { name: 'Readiness sprint', text: 'A short, structured assessment ending in a scored readiness report and your top three opportunities.' },
  { name: 'Strategy and pilot', text: 'Roadmap, governance framework and one pilot taken from plan to measured result.', featured: true },
  { name: 'Advisory retainer', text: 'Ongoing guidance for leadership, vendor selection and architecture reviews as AI programs scale.' },
];

const faqs = [
  { q: 'Do you build solutions or only advise?', a: 'Both. We design the strategy and architecture, and can lead or support the build of pilots and integrations alongside your team or your vendors.' },
  { q: 'Which AI platforms do you work with?', a: 'We are vendor-neutral. Recommendations depend on your existing stack, your data and your risk profile.' },
  { q: 'How do you handle data security and governance?', a: 'Governance is part of every engagement from day one: data handling rules, access controls, model risk review and documented decisions.' },
  { q: 'How is pricing set?', a: 'Each format is scoped and quoted after a first conversation, usually as a fixed fee for sprints and pilots and a monthly fee for advisory work.' },
];

const Faq = () => {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="faq-item">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{f.q}</span>
                <span aria-hidden="true" className="faq-sign">{isOpen ? '−' : '+'}</span>
              </button>
            </h3>
            <p id={`faq-${i}`} hidden={!isOpen} className="muted">{f.a}</p>
          </div>
        );
      })}
    </div>
  );
};

export const Consulting = () => (
  <>
    <section className="container page-head">
      <p className="eyebrow">Services</p>
      <h1 className="display-sm">AI consulting built on enterprise architecture</h1>
      <p className="lead">
        Fifteen years of IT strategy, data and digital transformation, applied to the question every leadership
        team is asking: where does AI actually pay off, and how do we get it there safely?
      </p>
    </section>

    <section className="container section-tight" aria-label="What we offer">
      <div className="grid grid-auto">
        {services.map((s, i) => (
          <article key={s.title} className="card">
            <span className="num">{String(i + 1).padStart(2, '0')}</span>
            <h2 className="card-title-lg">{s.title}</h2>
            <p className="muted">{s.body}</p>
            <p className="small"><span className="meta">You get: </span>{s.out}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="band" aria-labelledby="formats">
      <div className="container section">
        <h2 id="formats" className="h2">Ways to work together</h2>
        <p className="sub">Start small and expand once the value is proven.</p>
        <div className="grid grid-3">
          {formats.map((f) => (
            <div key={f.name} className={`card card-dark${f.featured ? ' is-featured' : ''}`}>
              <h3 className="card-title-lg">{f.name}</h3>
              <p className="muted">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container section" aria-labelledby="faq">
      <h2 id="faq" className="h2">Common questions</h2>
      <Faq />
    </section>

    <section className="cta">
      <div className="container callout-row">
        <h2 className="h3">Not sure where to start?</h2>
        <div className="actions">
          <Link className="btn btn-ghost" to="/readiness">Take the readiness check</Link>
          <Link className="btn btn-primary" to="/about#contact">Discuss your project</Link>
        </div>
      </div>
    </section>
  </>
);
