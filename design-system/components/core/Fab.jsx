import React from 'react';

export function Fab({ icon = 'plus', label, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" aria-label={label || 'Ajouter'} style={{
      width: 'var(--fab-size)', height: 'var(--fab-size)', borderRadius: 'var(--radius-round)',
      background: hover ? 'var(--primary-dark)' : 'var(--action-accent)', border: 'none',
      display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '24px',
      boxShadow: 'var(--shadow-fab)', cursor: 'pointer',
      transition: 'background var(--duration-fast) var(--ease-standard)', ...style
    }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}>
      <i className={'ti ti-' + icon} />
    </button>
  );
}
