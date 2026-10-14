// EN/NL switcher. The choice persists in localStorage and is applied as
// <html data-lang>, which global.css uses to show the matching [data-l] copy.
type Lang = 'en' | 'nl';

function apply(lang: Lang) {
  if (lang === 'nl') document.documentElement.dataset.lang = 'nl';
  else delete document.documentElement.dataset.lang;
  document.querySelectorAll<HTMLButtonElement>('[data-set-lang]').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.setLang === lang));
  });
}

let current: Lang = 'en';
try { current = localStorage.getItem('vh-lang') === 'nl' ? 'nl' : 'en'; } catch {}
apply(current);

document.addEventListener('click', (e) => {
  const btn = (e.target as Element).closest<HTMLButtonElement>('[data-set-lang]');
  if (!btn) return;
  const lang = btn.dataset.setLang === 'nl' ? 'nl' : 'en';
  try { localStorage.setItem('vh-lang', lang); } catch {}
  apply(lang);
});
