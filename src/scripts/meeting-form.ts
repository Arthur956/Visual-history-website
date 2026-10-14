// Meeting-request forms. If PUBLIC_FORM_ENDPOINT is set, the form POSTs there;
// otherwise it opens a pre-filled email to PUBLIC_CONTACT_EMAIL so no request is lost.
const endpoint: string = import.meta.env.PUBLIC_FORM_ENDPOINT || '';
const email: string = import.meta.env.PUBLIC_CONTACT_EMAIL || 'hello@visualhistory.be';

const labels: Record<string, string> = { name: 'Name', org: 'Organisation', role: 'Role', site: 'Site', message: 'Message' };

function mailto(data: FormData) {
  const body = Object.entries(labels)
    .map(([key, label]) => `${label}: ${String(data.get(key) ?? '').trim()}`)
    .join('\n');
  const subject = `Vision meeting request: ${String(data.get('org') ?? '').trim()}`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

document.querySelectorAll<HTMLFormElement>('form[data-meeting-form]').forEach((form) => {
  const root = form.closest('[data-form-root]');
  const sent = root?.querySelector<HTMLElement>('[data-form-sent]');
  const error = root?.querySelector<HTMLElement>('[data-form-error]');
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    if (error) error.hidden = true;

    if (endpoint) {
      if (submit) submit.disabled = true;
      try {
        const res = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
        if (!res.ok) throw new Error(String(res.status));
      } catch {
        if (submit) submit.disabled = false;
        if (error) error.hidden = false;
        return;
      }
    } else {
      window.location.href = mailto(data);
    }

    form.hidden = true;
    if (sent) {
      sent.hidden = false;
      sent.focus();
    }
  });
});
