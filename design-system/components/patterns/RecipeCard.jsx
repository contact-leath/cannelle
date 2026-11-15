import React from 'react';

const hatch = 'repeating-linear-gradient(135deg,#f0ece4 0 8px,#e8e3d9 8px 16px)';

export function RecipeCard({ title, time, image, badge, width = '100%', onClick, style, ...rest }) {
  return (
    <div onClick={onClick} style={{
      width, borderRadius: 'var(--radius-card)', overflow: 'hidden',
      border: '0.5px solid var(--border-subtle)', cursor: onClick ? 'pointer' : 'default', ...style
    }} {...rest}>
      <div style={{
        width: '100%', aspectRatio: '3/4', background: image ? `url(${image}) center/cover` : hatch,
        display: 'flex', alignItems: 'flex-end', position: 'relative'
      }}>
        {badge ? <div style={{ position: 'absolute', top: '8px', left: '8px' }}>{badge}</div> : null}
        <div style={{ width: '100%', padding: '28px 12px 10px', background: 'var(--overlay-scrim)' }}>
          <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: '14px', color: '#fff' }}>{title}</div>
          {time ? <div style={{ fontFamily: 'var(--font-text)', fontSize: '11px', color: 'rgba(255,255,255,0.9)', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <i className="ti ti-clock" /> {time}
          </div> : null}
        </div>
      </div>
    </div>
  );
}
