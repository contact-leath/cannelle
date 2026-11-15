import React from 'react';

export function Chip({ selected = false, children, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const s = selected
    ? { background: 'var(--primary-dark)', color: '#fff', border: '0.5px solid var(--primary-dark)' }
    : { background: hover ? 'var(--primary-light)' : 'var(--surface2)', color: 'var(--text2)', border: '0.5px solid var(--border)' };
  return (
    <button type="button" aria-pressed={selected} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        padding: '8px 14px', borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-text)',
        fontSize: '13.5px', fontWeight: 500, cursor: 'pointer', minHeight: '36px',
        transition: 'background var(--duration-fast) var(--ease-standard)', ...s, ...style
      }} {...rest}>{children}</button>
  );
}
