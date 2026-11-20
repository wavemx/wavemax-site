import { Link } from 'react-router-dom';
import { site } from '../site.config.js';
import { useContactModal } from './ContactModal.jsx';

// Opens the "Contact us" dialog while contact is switched on in site.config.js
// (only in the footer while contactFooterOnly is set).
// While contact is hidden, shows the fallback link if one is given, otherwise nothing.
export const ContactLink = ({ children, className = 'link-btn', onClick, fallback, placement }) => {
  const { open } = useContactModal();
  const visible = site.showContact && (!site.contactFooterOnly || placement === 'footer');
  if (visible) {
    const handle = () => {
      onClick?.();
      open();
    };
    return <button type="button" className={className} onClick={handle}>{children}</button>;
  }
  if (!fallback) return null;
  return <Link className={className} to={fallback.to} onClick={onClick}>{fallback.label}</Link>;
};
