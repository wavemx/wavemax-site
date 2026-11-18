import { Link } from 'react-router-dom';
import { site } from '../site.config.js';

// Links to the contact section while it is switched on in site.config.js.
// While contact is hidden, shows the fallback link if one is given, otherwise nothing.
export const ContactLink = ({ children, className, onClick, fallback }) => {
  if (site.showContact) {
    return <Link className={className} to="/about#contact" onClick={onClick}>{children}</Link>;
  }
  if (!fallback) return null;
  return <Link className={className} to={fallback.to} onClick={onClick}>{fallback.label}</Link>;
};
