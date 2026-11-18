import { useState } from 'react';

// The address is never in the HTML or as plain text in the code. It is stored encoded in two parts
// and only assembled in the browser after a person clicks, so crawlers and scrapers reading the
// page source don't find it.
const PART_A = [120, 126, 57, 111, 118, 122, 114, 97, 118];
const PART_B = [96, 87, 99, 116, 118, 99, 121, 120, 116];
const KEY = 23;

const decode = () =>
  [...PART_A, ...PART_B]
    .map((n) => String.fromCharCode(n ^ KEY))
    .reverse()
    .join('');

export const ProtectedEmail = ({ label = 'Show email address' }) => {
  const [address, setAddress] = useState(null);

  if (!address) {
    return (
      <button type="button" className="btn btn-ghost" onClick={() => setAddress(decode())}>
        {label}
      </button>
    );
  }

  return (
    <span className="email-reveal" aria-live="polite">
      <a className="btn btn-primary" href={`mailto:${address}`}>Email us</a>
      <span className="muted">{address}</span>
    </span>
  );
};
