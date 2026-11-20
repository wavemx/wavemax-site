// Small line icons for the footer links. Decorative: each sits beside a text label, so they are hidden from screen readers.
const Svg = ({ children }) => (
  <svg
    className="footer-icon"
    aria-hidden="true"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

// Research: a brain outline split into two hemispheres.
export const ResearchIcon = () => (
  <Svg>
    <path d="M12 5.5V19" />
    <path d="M12 5.5A3 3 0 0 0 7 4.6 3 3 0 0 0 4.8 8.2a3.2 3.2 0 0 0 .4 5.6A3 3 0 0 0 8.5 18.6 3 3 0 0 0 12 19" />
    <path d="M12 5.5A3 3 0 0 1 17 4.6a3 3 0 0 1 2.2 3.6 3.2 3.2 0 0 1-.4 5.6 3 3 0 0 1-3.3 4.8A3 3 0 0 1 12 19" />
  </Svg>
);

// Robotics: a robot head with antenna.
export const RoboticsIcon = () => (
  <Svg>
    <rect x="4.5" y="8" width="15" height="11" rx="3" />
    <path d="M12 8V4.5" />
    <circle cx="12" cy="3.8" r="0.9" fill="currentColor" stroke="none" />
    <circle cx="9.3" cy="13.3" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="14.7" cy="13.3" r="1.1" fill="currentColor" stroke="none" />
    <path d="M2.5 12.5v2.5M21.5 12.5v2.5" />
  </Svg>
);

// Advisory: a briefcase.
export const AdvisoryIcon = () => (
  <Svg>
    <rect x="3.5" y="7.5" width="17" height="12" rx="2" />
    <path d="M9 7.5V5.8A1.3 1.3 0 0 1 10.3 4.5h3.4A1.3 1.3 0 0 1 15 5.8v1.7" />
    <path d="M3.5 12.5h17" />
  </Svg>
);

// Readiness check: a gauge.
export const ReadinessIcon = () => (
  <Svg>
    <path d="M4.5 17a8 8 0 1 1 15 0" />
    <path d="M12 13l3.5-3.5" />
    <circle cx="12" cy="13" r="1.2" fill="currentColor" stroke="none" />
  </Svg>
);

// Insights: a light bulb.
export const InsightsIcon = () => (
  <Svg>
    <path d="M9 17.5h6M10 20.5h4" />
    <path d="M12 3.5a5.5 5.5 0 0 0-3.4 9.8c.6.5.9 1.2.9 2V15.5h5V15.3c0-.8.3-1.5.9-2A5.5 5.5 0 0 0 12 3.5z" />
  </Svg>
);

// About: an info circle.
export const AboutIcon = () => (
  <Svg>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 11v5.5" />
    <circle cx="12" cy="7.8" r="0.9" fill="currentColor" stroke="none" />
  </Svg>
);

// Contact: an envelope.
export const ContactIcon = () => (
  <Svg>
    <rect x="3" y="5.5" width="18" height="13" rx="2" />
    <path d="M3.5 7l8.5 6.5L20.5 7" />
  </Svg>
);

// LinkedIn: a simple "in" badge.
export const LinkedInIcon = () => (
  <Svg>
    <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
    <path d="M8 10.5V16M8 7.8v.1M11.5 16v-5.5M11.5 13a2.3 2.3 0 0 1 4.6 0v3" />
  </Svg>
);
