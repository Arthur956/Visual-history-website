// Copy that already exists in both languages. English is the source of truth;
// add Dutch strings here as translations are approved.
export const strings = {
  nav: {
    experience: { en: 'Experience', nl: 'Ervaring' },
    process: { en: 'Process', nl: 'Proces' },
    heritage: { en: 'Heritage sites', nl: 'Erfgoedsites' },
    cities: { en: 'Cities & tourism', nl: 'Steden & toerisme' },
    about: { en: 'About', nl: 'Over ons' },
  },
  cta: {
    meeting: { en: 'Book a vision meeting', nl: 'Plan een visiegesprek' },
    film: { en: 'Watch the vision film', nl: 'Bekijk de visiefilm' },
  },
  hero: {
    title1: { en: 'Step into', nl: 'Stap in' },
    title2: { en: 'the past.', nl: 'het verleden.' },
    promise: {
      en: 'We build immersive XR experiences that let visitors step into the past, and license them to heritage sites, museums and cities as a recurring platform, not a one-off project.',
      nl: 'Wij bouwen immersieve XR-ervaringen waarmee bezoekers in het verleden stappen, en bieden ze in licentie aan erfgoedsites, musea en steden als een terugkerend platform, geen eenmalig project.',
    },
  },
} as const;

export type Lang = 'en' | 'nl';
export type Phrase = { en: string; nl: string };
