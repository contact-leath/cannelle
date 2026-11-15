import React from 'react';

export function Toggle({ checked = false, onChange, label, style, ...rest }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontFamily: 'var(--font-text)', fontSize: '15px', color: 'var(--text)', ...style }} {...rest}>
      <span role="switch" aria-checked={checked} tabIndex={0}
        onClick={() => onChange && onChange(!checked)}
        style={{
          width: '44px', height: '26px', borderRadius: '13px', position: 'relative', display: 'block',
          background: checked ? 'var(--action-accent)' : 'var(--border)', flexShrink: 0,
          transition: 'background var(--duration-base) var(--ease-standard)'
        }}>
        <span style={{
          width: '22px', height: '22px', borderRadius: 'var(--radius-round)', background: '#fff',
          position: 'absolute', top: '2px', left: checked ? '20px' : '2px', boxShadow: 'var(--shadow-knob)',
          transition: 'left var(--duration-base) var(--ease-standard)'
        }} />
      </span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
