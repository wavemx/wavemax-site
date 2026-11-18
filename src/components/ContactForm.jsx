import { useState } from 'react';
import { site } from '../site.config.js';
import { ProtectedEmail } from './ProtectedEmail.jsx';

const topics = [
  'Research collaboration',
  'Funding or investment',
  'Robotics and autonomy',
  'Applied AI advisory',
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

const EmailCard = () => (
  <div className="card">
    <h3 className="card-title-lg">Email</h3>
    <p className="muted">Tell us about your research interest, project or question. We reply within two business days.</p>
    <ProtectedEmail />
  </div>
);

export const ContactForm = () => {
  const { status, submit } = useFormspree();
  if (!site.formspreeId) return <EmailCard />;

  return (
    <form className="card form" onSubmit={submit}>
      <h3 className="card-title-lg">Send a message</h3>
      <div className="form-grid">
        <label>Name<input name="name" type="text" required autoComplete="name" /></label>
        <label>Email<input name="email" type="email" required autoComplete="email" /></label>
        <label>Organization<input name="organization" type="text" autoComplete="organization" /></label>
        <label>Topic
          <select name="topic" defaultValue={topics[0]}>
            {topics.map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>
      </div>
      <label>What are you working on?<textarea name="message" rows={5} required /></label>
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />
      <div className="actions">
        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        <span role="status" className={status === 'error' ? 'error' : 'accent'}>
          {status === 'sent' && 'Thanks. We will be in touch within two business days.'}
          {status === 'error' && 'Something went wrong. Please try again, or use the email option.'}
        </span>
      </div>
      <div className="meta">Prefer email? <ProtectedEmail label="Show address" /></div>
    </form>
  );
};
