import React from 'react';

export const CANNELLE_TABS = [
  { id: 'accueil', icon: 'leaf', label: 'Accueil' },
  { id: 'recettes', icon: 'book', label: 'Recettes' },
  { id: 'menu', icon: 'calendar-week', label: 'Menu' },
  { id: 'courses', icon: 'shopping-cart', label: 'Courses' }
];

export function TabBar({ items = CANNELLE_TABS, active, onChange, style, ...rest }) {
  return (
    <nav style={{
      display: 'flex', background: 'var(--surface)', border: '0.5px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)', padding: '10px 0', ...style
    }} {...rest}>
      {items.map(t => {
        const on = t.id === active;
        return (
          <button key={t.id} type="button" onClick={() => onChange && onChange(t.id)} style={{
            flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px',
            background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-text)',
            fontWeight: on ? 600 : 500, fontSize: '10px', color: on ? 'var(--primary-dark)' : 'var(--text3)'
          }}>
            <i className={'ti ti-' + t.icon} style={{ fontSize: '20px' }} />
            {t.label}
          </button>
        );
      })}
    </nav>
  );
}
