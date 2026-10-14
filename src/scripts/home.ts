const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- Hero: scroll-driven wipe from ruin to reconstruction ----------
const track = document.querySelector<HTMLElement>('[data-hero]');
if (track) {
  if (reduced) {
    // Reduced motion: no scroll effect, the reconstruction is simply shown.
    track.classList.add('is-static');
    track.style.setProperty('--p', '1');
  } else {
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = track.getBoundingClientRect();
      const range = r.height - window.innerHeight;
      const p = range > 0 ? Math.max(0, Math.min(1, -r.top / range)) : 1;
      track.style.setProperty('--p', p.toFixed(4));
      track.style.setProperty('--seam', p > 0.01 && p < 0.99 ? '1' : '0');
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    update();
  }
}

// ---------- Experience mode tabs ----------
const tablist = document.querySelector<HTMLElement>('[data-tabs]');
if (tablist) {
  const tabs = Array.from(tablist.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
  const select = (i: number, focus = false) => {
    tabs.forEach((t, j) => {
      const on = i === j;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(t.getAttribute('aria-controls')!);
      if (panel) panel.hidden = !on;
    });
    if (focus) tabs[i].focus();
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(i));
    t.addEventListener('keydown', (e) => {
      const n = tabs.length;
      const next =
        e.key === 'ArrowRight' ? (i + 1) % n
        : e.key === 'ArrowLeft' ? (i - 1 + n) % n
        : e.key === 'Home' ? 0
        : e.key === 'End' ? n - 1
        : -1;
      if (next < 0) return;
      e.preventDefault();
      select(next, true);
    });
  });
}

// ---------- Timeline slider: AD 62 → AD 79 → today ----------
const timeline = document.querySelector<HTMLElement>('[data-timeline]');
if (timeline) {
  const range = timeline.querySelector<HTMLInputElement>('[data-era-range]')!;
  const layers = Array.from(timeline.querySelectorAll<HTMLElement>('[data-era-layer]'));
  const title = timeline.querySelector<HTMLElement>('[data-era-title]')!;
  const sub = timeline.querySelector<HTMLElement>('[data-era-sub]')!;
  const eras: { title: string; sub: string }[] = JSON.parse(timeline.querySelector('[data-era-data]')!.textContent || '[]');

  const render = () => {
    const v = +range.value;
    const ei = v < 50 ? 0 : v <= 150 ? 1 : 2;
    const ops = [Math.max(0, 1 - v / 100), v <= 100 ? v / 100 : 1 - (v - 100) / 100, Math.max(0, (v - 100) / 100)];
    layers.forEach((l, i) => {
      l.style.opacity = String(ops[i]);
      l.style.pointerEvents = i === ei ? 'auto' : 'none';
    });
    if (title.textContent !== eras[ei].title) {
      title.textContent = eras[ei].title;
      sub.textContent = eras[ei].sub;
    }
    range.setAttribute('aria-valuetext', eras[ei].title);
  };
  range.addEventListener('input', render);
  timeline.querySelectorAll<HTMLButtonElement>('[data-era-stop]').forEach((b) =>
    b.addEventListener('click', () => { range.value = b.dataset.eraStop!; render(); }),
  );
  render();
}

// ---------- Revenue calculator ----------
const calc = document.querySelector<HTMLElement>('[data-calc]');
if (calc) {
  const eur = (n: number) => '€' + Math.round(n).toLocaleString('en-IE');
  const formats: Record<string, (n: number) => string> = {
    eur,
    num: (n) => Math.round(n).toLocaleString('en-IE'),
    pct: (n) => n + '%',
    plus: (n) => '+' + n + '%',
  };
  const inputs = Array.from(calc.querySelectorAll<HTMLInputElement>('[data-calc-in]'));
  const out = (sel: string) => calc.querySelector<HTMLElement>(sel)!;

  const render = () => {
    const v: Record<string, number> = {};
    inputs.forEach((i) => {
      const key = i.dataset.calcIn!;
      v[key] = +i.value;
      const text = formats[i.dataset.fmt!](v[key]);
      i.setAttribute('aria-valuetext', text);
      out(`[data-calc-out="${key}"]`).textContent = text;
    });
    const addonRev = v.visitors * (v.share / 100) * v.addon;
    const visitorRev = v.visitors * (v.uplift / 100) * v.ticket;
    out('[data-calc-addon]').textContent = eur(addonRev);
    out('[data-calc-visitors]').textContent = eur(visitorRev);
    out('[data-calc-total]').textContent = eur(addonRev + visitorRev);
  };
  inputs.forEach((i) => i.addEventListener('input', render));
  render();
}
