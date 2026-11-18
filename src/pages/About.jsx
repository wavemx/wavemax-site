import { ContactForm } from '../components/ContactForm.jsx';
import { site } from '../site.config.js';

const principles = [
  { name: 'Research with a purpose', text: 'Every research question is tied to something a real robot or organization needs to do.' },
  { name: 'Architecture, not tools', text: 'AI has to fit your systems and data, so we design for that from the start.' },
  { name: 'Governed by default', text: 'Clear policy and controls let teams move faster, not slower.' },
  { name: 'Measured honestly', text: 'Pilots have success criteria agreed up front, and we report what we find.' },
];

export const About = () => (
  <>
    <section className="container page-head about">
      <div className="monogram" aria-hidden="true">GG</div>
      <div className="about-copy">
        <p className="eyebrow">About</p>
        <h1 className="display-sm">Greg Gasowski</h1>
        <p className="role">Founder, WaveMax</p>
        <p className="lead">
          I'm a technology leader with more than 15 years of experience translating complex business needs into
          practical, scalable technology. My work spans IT strategy, enterprise architecture, data and BI, vendor
          management and digital transformation.
        </p>
        <p className="lead">
          I've defined IT roadmaps, led high-performing teams and managed multi-million dollar budgets. Most
          recently I have led enterprise AI adoption, including AI agents and the governance policy behind them.
        </p>
        <p className="lead">
          I founded WaveMax to research brain-inspired AI for robots and autonomous systems, with a focus on
          cognitive architecture, memory, perception and simulation, and to help organizations apply AI well
          along the way. Based on Long Island, New York.
        </p>
      </div>
    </section>

    <section className="band" aria-labelledby="approach">
      <div className="container section">
        <h2 id="approach" className="h2">How I work</h2>
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

    <section id="contact" className="container section" aria-labelledby="contact-h">
      <h2 id="contact-h" className="h2">Get in touch</h2>
      <p className="sub">
        Research collaborations, funding, robotics projects or advisory work: {site.bookingUrl ? 'book a call or send a note' : 'send a note'} and we will reply within two business days.
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
  </>
);
