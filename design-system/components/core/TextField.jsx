import React from 'react';

export function TextField({ label, value, onChange, placeholder, icon, multiline = false, rows = 3, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const field = {
    width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-text)', fontSize: '15px',
    color: 'var(--text)', background: 'var(--surface)', borderRadius: 'var(--radius-field)',
    border: focus ? '1px solid var(--primary)' : '1px solid var(--border)',
    padding: multiline ? '12px 14px' : (icon ? '0 14px 0 40px' : '0 14px'),
    height: multiline ? 'auto' : 'var(--control-height)', outline: 'none', resize: 'vertical',
    transition: 'border-color var(--duration-fast) var(--ease-standard)'
  };
  const Tag = multiline ? 'textarea' : 'input';
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', ...style }}>
      {label ? <span style={{ fontFamily: 'var(--font-text)', fontSize: '13px', fontWeight: 600, color: 'var(--text2)' }}>{label}</span> : null}
      <span style={{ position: 'relative', display: 'block' }}>
        {icon && !multiline ? <i className={'ti ti-' + icon} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text3)', fontSize: '18px' }} /> : null}
        <Tag value={value} onChange={onChange} placeholder={placeholder} rows={multiline ? rows : undefined}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={field} {...rest} />
      </span>
    </label>
  );
}
