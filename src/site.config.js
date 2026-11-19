// Site-wide settings. Fill these in before launch; the UI adapts to what is set.
export const site = {
  // Contact section, header Contact button and contact call-to-action buttons. Set to true to show them.
  showContact: false,
  name: 'WaveMax',
  url: 'https://wavemax.ai',
  // The contact address is kept encoded in src/components/ProtectedEmail.jsx, not here.
  // Formspree form ID (the part after formspree.io/f/). Enables the contact and newsletter forms.
  formspreeId: null,
  // Scheduling link, e.g. https://cal.com/yourname/30min. Shows a "Book a call" button.
  bookingUrl: null,
  linkedinUrl: null,
  demoUrl: '/demo/neural-network/',
};
