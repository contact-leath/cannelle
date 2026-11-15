import React from 'react';

const hues = {
  primary:  { pastel: 'var(--primary-pastel)', light: 'var(--primary-light)', vivid: 'var(--primary-dark)', on: 'var(--primary-on-pastel)' },
  secondary:{ pastel: 'var(--secondary)', light: 'var(--secondary-light)', vivid: 'var(--secondary-dark)', on: 'var(--secondary-on-pastel)' },
  fraise:   { pastel: 'var(--fraise)', light: 'var(--fraise-light)', vivid: 'var(--fraise-vivid)', on: 'var(--fraise-on-pastel)' },
  peche:    { pastel: 'var(--peche)', light: 'var(--peche-light)', vivid: 'var(--peche-vivid)', on: 'var(--peche-on-pastel)' },
  myrtille: { pastel: 'var(--myrtille)', light: 'var(--myrtille-light)', vivid: 'var(--myrtille-vivid)', on: 'var(--myrtille-on-pastel)' }
};

export function Badge({ hue = 'primary', tone = 'pastel', children, style, ...rest }) {
  const h = hues[hue] || hues.primary;
  const skin = tone === 'vivid'
    ? { background: h.vivid, color: '#fff' }
    : { background: tone === 'light' ? h.light : h.pastel, color: h.on };
  return (
    <span style={{
      fontFamily: 'var(--font-text)', fontSize: '12px', fontWeight: 600,
      padding: '3px 9px', borderRadius: 'var(--radius-pill)', display: 'inline-block',
      whiteSpace: 'nowrap', ...skin, ...style
    }} {...rest}>{children}</span>
  );
}
