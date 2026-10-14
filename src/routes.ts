export const routes = {
  home: '/',
  experience: '/experience/',
  process: '/process/',
  heritage: '/heritage-sites/',
  cities: '/cities-and-tourism/',
  about: '/about/',
  contact: '/contact/',
} as const;

export type PageKey = keyof typeof routes;

export const contactEmail: string = import.meta.env.PUBLIC_CONTACT_EMAIL || 'hello@visualhistory.be';
