import React from 'react';

export function Card({ padding = 'var(--pad-card)', children, style, ...rest }) {
  return (
    <div style={{
      background: 'var(--surface-card)', border: '0.5px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)', padding, ...style
    }} {...rest}>{children}</div>
  );
}
