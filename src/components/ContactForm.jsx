import { useState } from 'react';
import { site } from '../site.config.js';

const topics = [
  'AI strategy or readiness',
  'Governance and policy',
  'Enterprise integration or pilot',
  'Robotics and autonomy',
  'Research partnership or funding',
  'Something else',
];

const useFormspree = () => {
  const [status, setStatus] = useState('idle');
  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.currentTarget),
      });
      if (!res.ok) throw new Error(`Form error ${res.status}`);
      e.target.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };
  return { status, submit };
};

const EmailOnly = () => (
  <div className="card">
    <h3 className="card-title-lg">Send a message</h3>
    {site.contactEmail ? (
      <p className="muted">
        Email <a className="inline-link" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> and I'll reply within two business days.
      </p>
    ) : (
      <p className="muted">The contact form is coming soon.</p>
    )}
  </div>
);

export const ContactForm = () => {
  const { status, submit } = useFormspree();
  if (!site.formspreeId) return <EmailOnly />;

  return (
    <form className="card form" onSubmit={submit}>
      <h3 className="card-title-lg">Send a message</h3>
      <div className="form-grid">
        <label>Name<input name="name" type="text" required autoComplete="name" /></label>
        <label>Work email<input name="email" type="email" required autoComplete="email" /></label>
        <label>Organization<input name="organization" type="text" autoComplete="organization" /></label>
        <label>Topic
          <select name="topic" defaultValue={topics[0]}>
            {topics.map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>
      </div>
      <label>What are you working on?<textarea name="message" rows={5} required /></label>
      <div className="actions">
        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        <span role="status" className={status === 'error' ? 'error' : 'accent'}>
          {status === 'sent' && "Thanks. I'll be in touch within two business days."}
          {status === 'error' && 'Something went wrong. Please try again or email directly.'}
        </span>
      </div>
      {site.contactEmail && (
        <p className="meta">Or email <a className="inline-link" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></p>
      )}
    </form>
  );
};
