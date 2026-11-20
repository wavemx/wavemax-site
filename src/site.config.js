// Site-wide settings. Fill these in before launch; the UI adapts to what is set.
export const site = {
  // Contact us dialog. When contactFooterOnly is true, only the footer "Contact" link opens it;
  // the header button, page buttons and the About "Get in touch" section stay hidden.
  showContact: true,
  contactFooterOnly: true,
  name: 'WaveMax',
  url: 'https://wavemax.ai',
  // Formspree form ID (the part after formspree.io/f/). Messages from the Contact us dialog are delivered
  // through Formspree to the inbox set in the Formspree account; that address never appears in this site.
  formspreeId: 'xzeradnd',
  // Scheduling link, e.g. https://cal.com/yourname/30min. Shows a "Book a call" button.
  bookingUrl: null,
  linkedinUrl: null,
  demoUrl: '/demo/neural-network/',
};
