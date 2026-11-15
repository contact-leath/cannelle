import React from 'react';

export function Icon({ name, size = 20, color = 'currentColor', style, ...rest }) {
  return <i className={'ti ti-' + name} aria-hidden="true"
    style={{ fontSize: typeof size === 'number' ? size + 'px' : size, color, lineHeight: 1, ...style }} {...rest} />;
}
