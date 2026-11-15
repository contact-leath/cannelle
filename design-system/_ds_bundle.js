/* @ds-bundle: {"format":4,"namespace":"CannelleDesignSystem_298ff7","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Fab","sourcePath":"components/core/Fab.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"TextField","sourcePath":"components/core/TextField.jsx"},{"name":"Toggle","sourcePath":"components/core/Toggle.jsx"},{"name":"BottomSheet","sourcePath":"components/patterns/BottomSheet.jsx"},{"name":"Card","sourcePath":"components/patterns/Card.jsx"},{"name":"RecipeCard","sourcePath":"components/patterns/RecipeCard.jsx"},{"name":"CANNELLE_TABS","sourcePath":"components/patterns/TabBar.jsx"},{"name":"TabBar","sourcePath":"components/patterns/TabBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"7de04f7b50c0","components/core/Button.jsx":"b7d6e4b21917","components/core/Chip.jsx":"baa3b4608b9a","components/core/Fab.jsx":"087707eb2c0c","components/core/Icon.jsx":"b4b5d49aced5","components/core/TextField.jsx":"3b127bd4fbca","components/core/Toggle.jsx":"6b03337e7c94","components/patterns/BottomSheet.jsx":"2602fe5bd7fa","components/patterns/Card.jsx":"f2f02f89b949","components/patterns/RecipeCard.jsx":"edbf11ec38cd","components/patterns/TabBar.jsx":"d66783eb6051","ui_kits/cannelle-app/App.jsx":"b29e6fd1e2dc","ui_kits/cannelle-app/Screens.jsx":"d052edb88f83","ui_kits/cannelle-app/data.js":"586d186c8f5a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CannelleDesignSystem_298ff7 = window.CannelleDesignSystem_298ff7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const hues = {
  primary: {
    pastel: 'var(--primary-pastel)',
    light: 'var(--primary-light)',
    vivid: 'var(--primary-dark)',
    on: 'var(--primary-on-pastel)'
  },
  secondary: {
    pastel: 'var(--secondary)',
    light: 'var(--secondary-light)',
    vivid: 'var(--secondary-dark)',
    on: 'var(--secondary-on-pastel)'
  },
  fraise: {
    pastel: 'var(--fraise)',
    light: 'var(--fraise-light)',
    vivid: 'var(--fraise-vivid)',
    on: 'var(--fraise-on-pastel)'
  },
  peche: {
    pastel: 'var(--peche)',
    light: 'var(--peche-light)',
    vivid: 'var(--peche-vivid)',
    on: 'var(--peche-on-pastel)'
  },
  myrtille: {
    pastel: 'var(--myrtille)',
    light: 'var(--myrtille-light)',
    vivid: 'var(--myrtille-vivid)',
    on: 'var(--myrtille-on-pastel)'
  }
};
function Badge({
  hue = 'primary',
  tone = 'pastel',
  children,
  style,
  ...rest
}) {
  const h = hues[hue] || hues.primary;
  const skin = tone === 'vivid' ? {
    background: h.vivid,
    color: '#fff'
  } : {
    background: tone === 'light' ? h.light : h.pastel,
    color: h.on
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: '12px',
      fontWeight: 600,
      padding: '3px 9px',
      borderRadius: 'var(--radius-pill)',
      display: 'inline-block',
      whiteSpace: 'nowrap',
      ...skin,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: 'var(--font-text)',
  fontSize: '15px',
  fontWeight: 600,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  height: 'var(--control-height)',
  borderRadius: 'var(--radius-button)',
  padding: '0 22px',
  cursor: 'pointer',
  transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard)'
};
const variants = {
  primary: {
    enabled: {
      background: 'var(--action-primary)',
      border: 'none',
      color: '#fff'
    },
    hover: {
      background: 'var(--action-primary-hover)'
    },
    disabled: {
      background: 'var(--surface-disabled)',
      border: 'none',
      color: 'var(--text3)'
    }
  },
  secondary: {
    enabled: {
      background: 'var(--surface)',
      border: '1px solid var(--primary-dark)',
      color: 'var(--primary-dark)'
    },
    hover: {
      background: 'var(--primary-light)'
    },
    disabled: {
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      color: 'var(--text3)'
    }
  },
  text: {
    enabled: {
      background: 'none',
      border: 'none',
      padding: 0,
      color: 'var(--primary-dark)'
    },
    hover: {
      color: 'var(--primary-darker)'
    },
    disabled: {
      background: 'none',
      border: 'none',
      padding: 0,
      color: 'var(--text3)'
    }
  }
};
function Button({
  variant = 'primary',
  fullWidth = false,
  disabled = false,
  icon,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const s = {
    ...base,
    ...(disabled ? v.disabled : v.enabled),
    ...(!disabled && hover ? v.hover : null),
    ...(fullWidth ? {
      width: '100%'
    } : null),
    cursor: disabled ? 'not-allowed' : 'pointer',
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), icon ? /*#__PURE__*/React.createElement("i", {
    className: 'ti ti-' + icon,
    style: {
      fontSize: '18px'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Chip({
  selected = false,
  children,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = selected ? {
    background: 'var(--primary-dark)',
    color: '#fff',
    border: '0.5px solid var(--primary-dark)'
  } : {
    background: hover ? 'var(--primary-light)' : 'var(--surface2)',
    color: 'var(--text2)',
    border: '0.5px solid var(--border)'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-pressed": selected,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-text)',
      fontSize: '13.5px',
      fontWeight: 500,
      cursor: 'pointer',
      minHeight: '36px',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      ...s,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Fab.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Fab({
  icon = 'plus',
  label,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label || 'Ajouter',
    style: {
      width: 'var(--fab-size)',
      height: 'var(--fab-size)',
      borderRadius: 'var(--radius-round)',
      background: hover ? 'var(--primary-dark)' : 'var(--action-accent)',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: '24px',
      boxShadow: 'var(--shadow-fab)',
      cursor: 'pointer',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), /*#__PURE__*/React.createElement("i", {
    className: 'ti ti-' + icon
  }));
}
Object.assign(__ds_scope, { Fab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Fab.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("i", _extends({
    className: 'ti ti-' + name,
    "aria-hidden": "true",
    style: {
      fontSize: typeof size === 'number' ? size + 'px' : size,
      color,
      lineHeight: 1,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextField({
  label,
  value,
  onChange,
  placeholder,
  icon,
  multiline = false,
  rows = 3,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const field = {
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-text)',
    fontSize: '15px',
    color: 'var(--text)',
    background: 'var(--surface)',
    borderRadius: 'var(--radius-field)',
    border: focus ? '1px solid var(--primary)' : '1px solid var(--border)',
    padding: multiline ? '12px 14px' : icon ? '0 14px 0 40px' : '0 14px',
    height: multiline ? 'auto' : 'var(--control-height)',
    outline: 'none',
    resize: 'vertical',
    transition: 'border-color var(--duration-fast) var(--ease-standard)'
  };
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: '13px',
      fontWeight: 600,
      color: 'var(--text2)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, icon && !multiline ? /*#__PURE__*/React.createElement("i", {
    className: 'ti ti-' + icon,
    style: {
      position: 'absolute',
      left: '14px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--text3)',
      fontSize: '18px'
    }
  }) : null, /*#__PURE__*/React.createElement(Tag, _extends({
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    rows: multiline ? rows : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: field
  }, rest))));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextField.jsx", error: String((e && e.message) || e) }); }

// components/core/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Toggle({
  checked = false,
  onChange,
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      fontFamily: 'var(--font-text)',
      fontSize: '15px',
      color: 'var(--text)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": checked,
    tabIndex: 0,
    onClick: () => onChange && onChange(!checked),
    style: {
      width: '44px',
      height: '26px',
      borderRadius: '13px',
      position: 'relative',
      display: 'block',
      background: checked ? 'var(--action-accent)' : 'var(--border)',
      flexShrink: 0,
      transition: 'background var(--duration-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '22px',
      height: '22px',
      borderRadius: 'var(--radius-round)',
      background: '#fff',
      position: 'absolute',
      top: '2px',
      left: checked ? '20px' : '2px',
      boxShadow: 'var(--shadow-knob)',
      transition: 'left var(--duration-base) var(--ease-standard)'
    }
  })), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/patterns/BottomSheet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function BottomSheet({
  title,
  open = true,
  onClose,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface)',
      border: '0.5px solid var(--border-subtle)',
      borderBottom: 'none',
      borderRadius: 'var(--radius-sheet) var(--radius-sheet) 0 0',
      padding: 'var(--pad-sheet)',
      boxShadow: 'var(--shadow-sheet)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      width: '36px',
      height: '4px',
      background: 'var(--border)',
      borderRadius: '2px',
      margin: '0 auto 14px',
      cursor: onClose ? 'pointer' : 'default'
    }
  }), title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: '16px',
      marginBottom: '12px',
      color: 'var(--text)'
    }
  }, title) : null, children);
}
Object.assign(__ds_scope, { BottomSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/BottomSheet.jsx", error: String((e && e.message) || e) }); }

// components/patterns/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  padding = 'var(--pad-card)',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: '0.5px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)',
      padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/Card.jsx", error: String((e && e.message) || e) }); }

// components/patterns/RecipeCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const hatch = 'repeating-linear-gradient(135deg,#f0ece4 0 8px,#e8e3d9 8px 16px)';
function RecipeCard({
  title,
  time,
  image,
  badge,
  width = '100%',
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      width,
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      border: '0.5px solid var(--border-subtle)',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '3/4',
      background: image ? `url(${image}) center/cover` : hatch,
      display: 'flex',
      alignItems: 'flex-end',
      position: 'relative'
    }
  }, badge ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '8px',
      left: '8px'
    }
  }, badge) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      padding: '28px 12px 10px',
      background: 'var(--overlay-scrim)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 700,
      fontSize: '14px',
      color: '#fff'
    }
  }, title), time ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: '11px',
      color: 'rgba(255,255,255,0.9)',
      marginTop: '4px',
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-clock"
  }), " ", time) : null)));
}
Object.assign(__ds_scope, { RecipeCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/RecipeCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/TabBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CANNELLE_TABS = [{
  id: 'accueil',
  icon: 'leaf',
  label: 'Accueil'
}, {
  id: 'recettes',
  icon: 'book',
  label: 'Recettes'
}, {
  id: 'menu',
  icon: 'calendar-week',
  label: 'Menu'
}, {
  id: 'courses',
  icon: 'shopping-cart',
  label: 'Courses'
}];
function TabBar({
  items = CANNELLE_TABS,
  active,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      background: 'var(--surface)',
      border: '0.5px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)',
      padding: '10px 0',
      ...style
    }
  }, rest), items.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      type: "button",
      onClick: () => onChange && onChange(t.id),
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '3px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-text)',
        fontWeight: on ? 600 : 500,
        fontSize: '10px',
        color: on ? 'var(--primary-dark)' : 'var(--text3)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: 'ti ti-' + t.icon,
      style: {
        fontSize: '20px'
      }
    }), t.label);
  }));
}
Object.assign(__ds_scope, { CANNELLE_TABS, TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/TabBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cannelle-app/App.jsx
try { (() => {
const {
  TabBar,
  Fab,
  CANNELLE_TABS
} = window.CannelleDesignSystem_298ff7;
function App() {
  const [route, setRoute] = React.useState('accueil');
  const tab = ['accueil', 'recettes', 'menu', 'courses'].includes(route) ? route : route === 'saison' ? 'accueil' : 'recettes';
  const Screen = {
    accueil: HomeScreen,
    recettes: RecipesScreen,
    detail: DetailScreen,
    menu: MenuScreen,
    courses: CoursesScreen,
    saison: SaisonScreen
  }[route];
  const showFab = route === 'recettes' || route === 'accueil';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      background: 'var(--bg)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '26px 16px 108px'
    }
  }, /*#__PURE__*/React.createElement(Screen, {
    go: setRoute
  })), showFab ? /*#__PURE__*/React.createElement(Fab, {
    style: {
      position: 'absolute',
      right: 16,
      bottom: 96
    },
    onClick: () => setRoute('detail')
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      bottom: 16
    }
  }, /*#__PURE__*/React.createElement(TabBar, {
    items: CANNELLE_TABS,
    active: tab,
    onChange: setRoute
  })));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cannelle-app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cannelle-app/Screens.jsx
try { (() => {
const {
  Button,
  Fab,
  Chip,
  Badge,
  Toggle,
  TextField,
  Icon,
  Card,
  RecipeCard,
  TabBar,
  BottomSheet
} = window.CannelleDesignSystem_298ff7;
const D = window.CannelleData;
function ScreenTitle({
  children,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      lineHeight: 1.15,
      margin: 0,
      fontWeight: 800
    }
  }, children), right ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto'
    }
  }, right) : null);
}
function SectionTitle({
  children,
  action,
  onAction
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      margin: 0,
      fontWeight: 800
    }
  }, children), action ? /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      marginLeft: 'auto',
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-text)',
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--primary-dark)'
    }
  }, action) : null);
}
function Eyebrow({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: '1.4px',
      textTransform: 'uppercase',
      color: 'var(--text3)'
    }
  }, children);
}
function TopBar({
  onBack,
  title,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 44,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      color: 'var(--text)',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 26
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontWeight: 700,
      fontSize: 15
    }
  }, title), action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto'
    }
  }, action) : null);
}
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Mardi 9 juin"), /*#__PURE__*/React.createElement(ScreenTitle, null, "Bonsoir"), /*#__PURE__*/React.createElement(Card, {
    padding: 16,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-field)',
      background: 'repeating-linear-gradient(135deg,#f0ece4 0 8px,#e8e3d9 8px 16px)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Ce soir"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      marginTop: 2
    }
  }, "Salade de lentilles ti\xE8des"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text2)',
      marginTop: 2,
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 14
  }), " 25 min \xB7 tout est dans le frigo")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, {
    action: "Tout voir",
    onAction: () => go('saison')
  }, "De saison"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, D.saison.map(s => /*#__PURE__*/React.createElement(Badge, {
    key: s.name,
    hue: s.hue
  }, s.name)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, {
    action: "Le Livre",
    onAction: () => go('recettes')
  }, "Ajout\xE9es r\xE9cemment"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 12
    }
  }, D.livre.slice(0, 2).map(r => /*#__PURE__*/React.createElement(RecipeCard, {
    key: r.id,
    title: r.title,
    time: r.time,
    onClick: () => go('detail'),
    badge: /*#__PURE__*/React.createElement(Badge, {
      hue: r.hue,
      tone: "light"
    }, r.cat)
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, {
    action: "L'Atelier",
    onAction: () => go('recettes')
  }, "En cours de test"), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, D.atelier.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 16px',
      borderTop: i ? '0.5px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "flask",
    size: 20,
    color: "var(--myrtille-vivid)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500
    }
  }, a.title), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 13,
      color: 'var(--text3)'
    }
  }, a.time))))));
}
function RecipesScreen({
  go
}) {
  const [mode, setMode] = React.useState('livre');
  const [sheet, setSheet] = React.useState(false);
  const [filtre, setFiltre] = React.useState('tout');
  const list = mode === 'livre' ? D.livre : D.atelier;
  const shown = filtre === 'tout' ? list : list.filter(r => r.cat === filtre);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ScreenTitle, {
    right: /*#__PURE__*/React.createElement("button", {
      onClick: () => setSheet(true),
      style: {
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        color: 'var(--text)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "filter",
      size: 22
    }))
  }, "Recettes"), /*#__PURE__*/React.createElement(TextField, {
    icon: "search",
    placeholder: "Chercher une recette",
    style: {
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    selected: mode === 'livre',
    onClick: () => setMode('livre')
  }, "Livre \xB7 ", D.livre.length), /*#__PURE__*/React.createElement(Chip, {
    selected: mode === 'atelier',
    onClick: () => setMode('atelier')
  }, "Atelier \xB7 ", D.atelier.length)), mode === 'atelier' ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text2)',
      marginBottom: 14,
      lineHeight: 1.5
    }
  }, "Les id\xE9es et les essais en cours. Une recette passe au Livre quand elle est au point.") : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 12
    }
  }, shown.map(r => /*#__PURE__*/React.createElement(RecipeCard, {
    key: r.id,
    title: r.title,
    time: r.time,
    onClick: () => go('detail'),
    badge: /*#__PURE__*/React.createElement(Badge, {
      hue: r.hue,
      tone: "light"
    }, r.cat)
  }))), sheet ? /*#__PURE__*/React.createElement(Sheet, {
    onClose: () => setSheet(false)
  }, /*#__PURE__*/React.createElement(BottomSheet, {
    title: "Filtres",
    onClose: () => setSheet(false)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 18
    }
  }, ['tout', 'Entrée', 'Plat', 'Dessert'].map(k => /*#__PURE__*/React.createElement(Chip, {
    key: k,
    selected: filtre === k,
    onClick: () => setFiltre(k)
  }, k === 'tout' ? 'Tout' : k))), /*#__PURE__*/React.createElement(Toggle, {
    checked: true,
    label: "Seulement les recettes de saison",
    style: {
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: () => setSheet(false)
  }, "Voir les recettes"))) : null);
}
function Sheet({
  children,
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 5,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,0.4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, children));
}
function DetailScreen({
  go
}) {
  const r = D.recette;
  const [added, setAdded] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '-16px -16px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4/3',
      background: 'repeating-linear-gradient(135deg,#f0ece4 0 8px,#e8e3d9 8px 16px)',
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('recettes'),
    style: {
      position: 'absolute',
      top: 14,
      left: 14,
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.92)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 22
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      position: 'absolute',
      top: 14,
      right: 14,
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.92)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 20,
    color: "var(--fraise-vivid)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 100 + '%',
      padding: '40px 16px 14px',
      background: 'var(--overlay-scrim)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      color: '#fff',
      margin: 0,
      fontWeight: 800,
      lineHeight: 1.15
    }
  }, r.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 8,
      color: 'rgba(255,255,255,0.92)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 15
  }), " ", r.time), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    size: 15
  }), " ", r.parts)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    hue: "fraise"
  }, r.cat), /*#__PURE__*/React.createElement(Badge, {
    hue: "primary",
    tone: "light"
  }, "Du Livre")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionTitle, null, "Ingr\xE9dients"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, r.ingredients.map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--primary)'
    }
  }, "\xB7"), i)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, null, "\xC9tapes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, r.etapes.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: 'var(--primary-light)',
      color: 'var(--primary-on-pastel)',
      fontSize: 13,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      lineHeight: 1.5,
      textWrap: 'pretty'
    }
  }, e))))), /*#__PURE__*/React.createElement(Card, {
    style: {
      background: 'var(--secondary-light)',
      border: 'none'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Note d'atelier"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.5,
      marginTop: 6,
      textWrap: 'pretty'
    }
  }, r.note)), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    icon: added ? 'check' : 'shopping-cart',
    onClick: () => setAdded(true)
  }, added ? 'Ajouté aux courses' : 'Ajouter aux courses')));
}
function MenuScreen({
  go
}) {
  const [sem, setSem] = React.useState(D.semaine);
  const [pick, setPick] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ScreenTitle, null, "Cette semaine"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text2)',
      marginBottom: 16
    }
  }, "9 \u2192 15 juin \xB7 5 repas planifi\xE9s"), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, sem.map((j, i) => /*#__PURE__*/React.createElement("div", {
    key: j.jour,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '13px 16px',
      borderTop: i ? '0.5px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 74,
      flexShrink: 0,
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--text2)'
    }
  }, j.jour), j.plat ? /*#__PURE__*/React.createElement("span", {
    onClick: () => go('detail'),
    style: {
      fontSize: 15,
      cursor: 'pointer'
    }
  }, j.plat) : /*#__PURE__*/React.createElement("button", {
    onClick: () => setPick(i),
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-text)',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--primary-dark)',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 17
  }), " Choisir un plat"), j.plat ? /*#__PURE__*/React.createElement(Icon, {
    name: "dots",
    size: 18,
    color: "var(--text3)",
    style: {
      marginLeft: 'auto'
    }
  }) : null))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    action: "Voir les courses",
    onAction: () => go('courses')
  }, "Ce qu'il manque"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, ["600 g d'abricots", "Riz arborio", "Parmesan", "3 citrons"].map(x => /*#__PURE__*/React.createElement(Badge, {
    key: x,
    hue: "peche",
    tone: "light"
  }, x)))), pick !== null ? /*#__PURE__*/React.createElement(Sheet, {
    onClose: () => setPick(null)
  }, /*#__PURE__*/React.createElement(BottomSheet, {
    title: 'Plat du ' + D.semaine[pick].jour.toLowerCase(),
    onClose: () => setPick(null)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      marginBottom: 14
    }
  }, D.livre.slice(0, 4).map(r => /*#__PURE__*/React.createElement("button", {
    key: r.id,
    onClick: () => {
      setSem(s => s.map((j, i) => i === pick ? {
        ...j,
        plat: r.title
      } : j));
      setPick(null);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '11px 4px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-text)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-field)',
      background: 'repeating-linear-gradient(135deg,#f0ece4 0 8px,#e8e3d9 8px 16px)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15
    }
  }, r.title), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 13,
      color: 'var(--text3)'
    }
  }, r.time)))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    onClick: () => setPick(null)
  }, "Chercher dans le Livre"))) : null);
}
function CoursesScreen() {
  const [done, setDone] = React.useState({});
  const [grouped, setGrouped] = React.useState(true);
  const flat = D.courses.flatMap(r => r.items.map(i => ({
    rayon: r.rayon,
    item: i
  })));
  const groups = grouped ? D.courses : [{
    rayon: 'Tout',
    items: flat.map(x => x.item)
  }];
  const total = flat.length,
    checked = Object.values(done).filter(Boolean).length;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ScreenTitle, null, "Courses"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text2)',
      marginBottom: 14
    }
  }, checked, " sur ", total, " coch\xE9s \xB7 5 repas"), /*#__PURE__*/React.createElement(Toggle, {
    checked: grouped,
    onChange: setGrouped,
    label: "Grouper par rayon",
    style: {
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.rayon
  }, /*#__PURE__*/React.createElement(SectionTitle, null, g.rayon), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, g.items.map((it, i) => {
    const on = !!done[it];
    return /*#__PURE__*/React.createElement("button", {
      key: it,
      onClick: () => setDone(d => ({
        ...d,
        [it]: !d[it]
      })),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '13px 16px',
        background: 'none',
        border: 'none',
        borderTop: i ? '0.5px solid var(--border-subtle)' : 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-text)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 22,
        borderRadius: 'var(--radius-field)',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: on ? 'var(--primary)' : 'transparent',
        border: on ? 'none' : '1px solid var(--border)',
        color: '#fff'
      }
    }, on ? /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 15
    }) : null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        color: on ? 'var(--text3)' : 'var(--text)',
        textDecoration: on ? 'line-through' : 'none'
      }
    }, it));
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "text"
  }, "Tout effacer")));
}
function SaisonScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TopBar, {
    onBack: () => go('accueil'),
    title: "De saison"
  }), /*#__PURE__*/React.createElement(ScreenTitle, null, "Juin"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text2)',
      marginBottom: 18,
      lineHeight: 1.5
    }
  }, "Ce qui arrive sur les \xE9tals ce mois-ci, et les recettes du Livre qui vont avec."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 12,
      marginBottom: 24
    }
  }, D.saison.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.name,
    padding: 14,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'var(--' + s.hue + (s.hue === 'primary' ? '-pastel' : '') + ')',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "leaf",
    size: 18,
    color: "var(--text)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, s.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text2)'
    }
  }, s.month)))), /*#__PURE__*/React.createElement(SectionTitle, null, "Avec des abricots"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 12
    }
  }, D.livre.slice(0, 2).map(r => /*#__PURE__*/React.createElement(RecipeCard, {
    key: r.id,
    title: r.title,
    time: r.time,
    onClick: () => go('detail')
  }))));
}
Object.assign(window, {
  HomeScreen,
  RecipesScreen,
  DetailScreen,
  MenuScreen,
  CoursesScreen,
  SaisonScreen,
  Sheet,
  ScreenTitle,
  SectionTitle,
  Eyebrow,
  TopBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cannelle-app/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cannelle-app/data.js
try { (() => {
window.CannelleData = {
  livre: [{
    id: 'r1',
    title: "Tarte aux abricots",
    time: "45 min",
    cat: "Dessert",
    hue: "fraise"
  }, {
    id: 'r2',
    title: "Risotto au citron",
    time: "30 min",
    cat: "Plat",
    hue: "primary"
  }, {
    id: 'r3',
    title: "Soupe de courge rôtie",
    time: "50 min",
    cat: "Entrée",
    hue: "peche"
  }, {
    id: 'r4',
    title: "Poulet au citron confit",
    time: "1 h 10",
    cat: "Plat",
    hue: "primary"
  }, {
    id: 'r5',
    title: "Salade de lentilles tièdes",
    time: "25 min",
    cat: "Entrée",
    hue: "peche"
  }, {
    id: 'r6',
    title: "Clafoutis aux myrtilles",
    time: "40 min",
    cat: "Dessert",
    hue: "myrtille"
  }],
  atelier: [{
    id: 'a1',
    title: "Focaccia au romarin — essai 3",
    time: "3 h",
    cat: "À tester",
    hue: "myrtille"
  }, {
    id: 'a2',
    title: "Glace pistache sans sorbetière",
    time: "?",
    cat: "Idée",
    hue: "secondary"
  }, {
    id: 'a3',
    title: "Pickles de radis",
    time: "15 min",
    cat: "À tester",
    hue: "myrtille"
  }],
  saison: [{
    name: "Abricot",
    month: "juin → août",
    hue: "peche"
  }, {
    name: "Courgette",
    month: "juin → sept.",
    hue: "primary"
  }, {
    name: "Myrtille",
    month: "juil. → août",
    hue: "myrtille"
  }, {
    name: "Tomate",
    month: "juil. → oct.",
    hue: "fraise"
  }, {
    name: "Basilic",
    month: "mai → sept.",
    hue: "primary"
  }, {
    name: "Melon",
    month: "juil. → sept.",
    hue: "secondary"
  }],
  semaine: [{
    jour: "Lundi",
    plat: "Risotto au citron",
    id: 'r2'
  }, {
    jour: "Mardi",
    plat: "Salade de lentilles tièdes",
    id: 'r5'
  }, {
    jour: "Mercredi",
    plat: null,
    id: null
  }, {
    jour: "Jeudi",
    plat: "Poulet au citron confit",
    id: 'r4'
  }, {
    jour: "Vendredi",
    plat: "Soupe de courge rôtie",
    id: 'r3'
  }, {
    jour: "Samedi",
    plat: null,
    id: null
  }, {
    jour: "Dimanche",
    plat: "Tarte aux abricots",
    id: 'r1'
  }],
  courses: [{
    rayon: "Fruits & légumes",
    items: ["600 g d'abricots", "2 courgettes", "1 botte de basilic", "3 citrons"]
  }, {
    rayon: "Épicerie",
    items: ["Riz arborio 250 g", "Lentilles vertes 300 g", "Sucre 80 g"]
  }, {
    rayon: "Crèmerie",
    items: ["Beurre doux 100 g", "Parmesan 60 g"]
  }],
  recette: {
    title: "Tarte aux abricots",
    time: "45 min",
    parts: "6 parts",
    cat: "Dessert",
    ingredients: ["600 g d'abricots bien mûrs", "1 pâte brisée maison", "80 g de sucre de canne", "2 c. à s. de poudre d'amandes", "1 gousse de vanille"],
    etapes: ["Préchauffe le four à 180 °C. Étale la pâte dans le moule et pique-la à la fourchette.", "Saupoudre la poudre d'amandes sur le fond : elle boit le jus des abricots.", "Range les demi-abricots serrés, face bombée vers le bas, puis sucre.", "Enfourne 40 à 45 min, jusqu'à ce que les bords caramélisent."],
    note: "Testée trois fois à l'Atelier avant d'entrer au Livre. Avec des abricots un peu acides, monte à 90 g de sucre."
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cannelle-app/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Fab = __ds_scope.Fab;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.BottomSheet = __ds_scope.BottomSheet;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.RecipeCard = __ds_scope.RecipeCard;

__ds_ns.CANNELLE_TABS = __ds_scope.CANNELLE_TABS;

__ds_ns.TabBar = __ds_scope.TabBar;

})();
