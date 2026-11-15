import React from 'react';

const base = {
  fontFamily: 'var(--font-text)', fontSize: '15px', fontWeight: 600,
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
  height: 'var(--control-height)', borderRadius: 'var(--radius-button)',
  padding: '0 22px', cursor: 'pointer', transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard)'
};

const variants = {
  primary: {
    enabled: { background: 'var(--action-primary)', border: 'none', color: '#fff' },
    hover: { background: 'var(--action-primary-hover)' },
    disabled: { background: 'var(--surface-disabled)', border: 'none', color: 'var(--text3)' }
  },
  secondary: {
    enabled: { background: 'var(--surface)', border: '1px solid var(--primary-dark)', color: 'var(--primary-dark)' },
    hover: { background: 'var(--primary-light)' },
    disabled: { background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text3)' }
  },
  text: {
    enabled: { background: 'none', border: 'none', padding: 0, color: 'var(--primary-dark)' },
    hover: { color: 'var(--primary-darker)' },
    disabled: { background: 'none', border: 'none', padding: 0, color: 'var(--text3)' }
  }
};

export function Button({ variant = 'primary', fullWidth = false, disabled = false, icon, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const s = {
    ...base,
    ...(disabled ? v.disabled : v.enabled),
    ...(!disabled && hover ? v.hover : null),
    ...(fullWidth ? { width: '100%' } : null),
    cursor: disabled ? 'not-allowed' : 'pointer',
    ...style
  };
  return (
    <button type="button" disabled={disabled} style={s}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}>
      {icon ? <i className={'ti ti-' + icon} style={{ fontSize: '18px' }} /> : null}
      {children}
    </button>
  );
}
