export const inr = (n) => (n === null || n === undefined ? '—' : '₹' + Math.round(Number(n)).toLocaleString('en-IN'));
export const date = (d) => (d ? new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '—');
export const dateTime = (d) => (d ? new Date(d).toLocaleString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: '2-digit' }) : '—');
export const ago = (d) => {
  const s = (Date.now() - new Date(d).getTime()) / 1000;
  if (s < 60) return 'just now';
  if (s < 3600) return `${Math.floor(s / 60)} min ago`;
  if (s < 86400) return `${Math.floor(s / 3600)} h ago`;
  return date(d);
};

export const STATUS = {
  draft: { label: 'Collecting facts', tone: 'bg-slate-100 text-slate-700 border border-slate-200/80 shadow-sm' },
  confirmed: { label: 'Facts confirmed', tone: 'bg-sky-50 text-sky-700 border border-sky-200 shadow-sm' },
  letter_ready: { label: 'Letter ready', tone: 'bg-amber-50 text-amber-800 border border-amber-200 shadow-sm font-semibold' },
  awaiting_response: { label: 'Waiting for reply', tone: 'bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-sm' },
  resolved: { label: 'Resolved', tone: 'bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm font-semibold' },
  closed: { label: 'Closed', tone: 'bg-slate-100 text-slate-500 border border-slate-200' },
};

export const SEVERITY = {
  high: { label: 'Strong statutory point', dot: 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.7)]', ring: 'border-rose-200 bg-rose-50/40' },
  medium: { label: 'Worth raising', dot: 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.7)]', ring: 'border-amber-200 bg-amber-50/40' },
  info: { label: 'Good to know', dot: 'bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.7)]', ring: 'border-indigo-100 bg-indigo-50/30' },
};

// Each case type is a "gem": vivid, luminous jewel tones representing rightful entitlements
export const GEMS = {
  employment: { name: 'Sapphire', mid: '#3B82F6', deep: '#1E3A8A', light: '#93C5FD', shadow: 'rgba(37,99,235,0.45)' },
  flight: { name: 'Amethyst', mid: '#8B5CF6', deep: '#4C1D95', light: '#C4B5FD', shadow: 'rgba(139,92,246,0.45)' },
  rent: { name: 'Emerald', mid: '#10B981', deep: '#064E3B', light: '#6EE7B7', shadow: 'rgba(16,185,129,0.45)' },
};
