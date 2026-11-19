import { ContactLink } from './ContactLink.jsx';
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { site } from '../site.config.js';

const navItems = [
  { to: '/research', label: 'Research' },
  { to: '/robotics', label: 'Robotics' },
  { to: '/insights', label: 'Insights' },
  { to: '/consulting', label: 'Advisory' },
  { to: '/about', label: 'About' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">Skip to content</a>
      <nav className="nav container" aria-label="Main">
        <Link to="/" className="brand" onClick={close}>
          <img src="/brand/logo-reversed.svg" alt="WaveMax" width="176" height="25" />
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Menu</span>
          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
        <div id="nav-menu" className={`nav-links${open ? ' is-open' : ''}`} key={pathname}>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={close}>{item.label}</NavLink>
          ))}
          <ContactLink className="btn btn-primary btn-sm" onClick={close}>Contact</ContactLink>
        </div>
      </nav>
    </header>
  );
};

const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-grid">
      <div className="footer-brand">
        <img src="/brand/logo-reversed.svg" alt="WaveMax" width="148" height="21" />
        <span>© {new Date().getFullYear()} WaveMax</span>
      </div>
      <div className="footer-cols">
        <div>
          <span className="footer-head">Work</span>
          <Link to="/research">Research</Link>
          <Link to="/robotics">Robotics</Link>
          <Link to="/consulting">Advisory</Link>
          <Link to="/readiness">Readiness check</Link>
        </div>
        <div>
          <span className="footer-head">Company</span>
          <Link to="/insights">Insights</Link>
          <Link to="/about">About</Link>
          <ContactLink>Contact</ContactLink>
        </div>
        {site.linkedinUrl && (
          <div>
            <span className="footer-head">Connect</span>
            <a href={site.linkedinUrl}>LinkedIn</a>
          </div>
        )}
      </div>
    </div>
  </footer>
);

export const Layout = ({ children }) => (
  <>
    <Header />
    <main id="main">{children}</main>
    <Footer />
  </>
);
