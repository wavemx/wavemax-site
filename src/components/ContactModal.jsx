import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { site } from '../site.config.js';

// "Contact us" dialog. Messages go to Formspree, which forwards them to the WaveMax inbox.
// The destination address lives only in the Formspree account, never in this site or its code.

const ContactModalContext = createContext({ open: () => {} });

export const useContactModal = () => useContext(ContactModalContext);

const MAX_MESSAGE = 2000;

const EnvelopeIcon = () => (
  <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
    <rect x="3" y="5.5" width="18" height="13" rx="2" />
    <path d="M3.5 7l8.5 6.5L20.5 7" />
  </svg>
);

const CloseIcon = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

const sendMessage = async (form) => {
  if (!site.formspreeId) throw new Error('not-configured');
  const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: new FormData(form),
  });
  if (res.ok) return;
  // Surface Formspree's own explanation (for example a CAPTCHA, domain or verification setting).
  let reason = '';
  try {
    const data = await res.json();
    reason = data.errors?.map((e) => e.message).join(' ') || data.error || '';
  } catch {
    reason = '';
  }
  throw new Error(reason || `The form service returned an error (${res.status}).`);
};

const ContactDialog = ({ dialogRef, onClose }) => {
  const [status, setStatus] = useState('idle');
  const [length, setLength] = useState(0);
  const [errorText, setErrorText] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    try {
      await sendMessage(form);
      form.reset();
      setLength(0);
      setStatus('sent');
    } catch (err) {
      if (err.message === 'not-configured') {
        setStatus('not-configured');
        return;
      }
      setErrorText(err instanceof TypeError ? 'The message could not reach the form service. Check your connection and try again.' : err.message);
      setStatus('error');
    }
  };

  const close = () => {
    onClose();
    if (status !== 'sending') setStatus('idle');
  };

  return (
    <dialog
      ref={dialogRef}
      className="contact-dialog"
      aria-labelledby="contact-title"
      onClose={close}
      onClick={(e) => { if (e.target === e.currentTarget) dialogRef.current.close(); }}
    >
      <div className="contact-panel">
        <div className="contact-top">
          <span className="contact-icon"><EnvelopeIcon /></span>
          <button type="button" className="contact-close" onClick={() => dialogRef.current.close()}>
            <CloseIcon /><span className="sr-only">Close</span>
          </button>
        </div>
        <h2 id="contact-title" className="contact-title">Contact us</h2>

        {status === 'sent' ? (
          <div className="contact-done" role="status">
            <p className="strong">Thank you. Your message has been sent.</p>
            <p className="muted">We read every message and reply within two business days.</p>
            <button type="button" className="btn btn-ghost contact-send" onClick={() => dialogRef.current.close()}>Close</button>
          </div>
        ) : (
          <form onSubmit={submit} className="contact-form">
            <p className="muted">
              Have a question about our research, a collaboration or advisory work? Send us a message.
            </p>
            <div className="contact-row">
              <label>
                <span>Name</span>
                <input name="name" type="text" required autoComplete="name" maxLength={100} />
              </label>
              <label>
                <span>Your email</span>
                <input name="email" type="email" required autoComplete="email" maxLength={150} />
              </label>
            </div>
            <label>
              <span className="sr-only">Message</span>
              <textarea
                name="message"
                rows={5}
                required
                maxLength={MAX_MESSAGE}
                placeholder="What would you like to ask us?"
                onChange={(e) => setLength(e.target.value.length)}
              />
            </label>
            <input type="hidden" name="_subject" value="New message from wavemax.ai" />
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />
            <p className="contact-note">
              We will reply to the email address you enter above. <span className="contact-count">{length}/{MAX_MESSAGE}</span>
            </p>
            {status === 'error' && <p className="error" role="alert">Message not sent: {errorText}</p>}
            {status === 'not-configured' && <p className="error" role="alert">Messaging isn’t connected yet. Please try again soon.</p>}
            <button type="submit" className="btn btn-primary contact-send" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
          </form>
        )}
      </div>
    </dialog>
  );
};

export const ContactModalProvider = ({ children }) => {
  const dialogRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const opener = useRef(null);

  useEffect(() => setMounted(true), []);

  const open = useCallback(() => {
    opener.current = document.activeElement;
    dialogRef.current?.showModal();
  }, []);

  const onClose = () => opener.current?.focus?.();

  return (
    <ContactModalContext.Provider value={{ open }}>
      {children}
      {site.showContact && mounted && <ContactDialog dialogRef={dialogRef} onClose={onClose} />}
    </ContactModalContext.Provider>
  );
};
