import React from 'react';

export function BottomSheet({ title, open = true, onClose, children, style, ...rest }) {
  if (!open) return null;
  return (
    <div style={{
      background: 'var(--surface)', border: '0.5px solid var(--border-subtle)', borderBottom: 'none',
      borderRadius: 'var(--radius-sheet) var(--radius-sheet) 0 0', padding: 'var(--pad-sheet)',
      boxShadow: 'var(--shadow-sheet)', ...style
    }} {...rest}>
      <div onClick={onClose} style={{ width: '36px', height: '4px', background: 'var(--border)', borderRadius: '2px', margin: '0 auto 14px', cursor: onClose ? 'pointer' : 'default' }} />
      {title ? <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '16px', marginBottom: '12px', color: 'var(--text)' }}>{title}</div> : null}
      {children}
    </div>
  );
}
