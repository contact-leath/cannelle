/** Glyphe Tabler Icons (webfont). Enveloppe fine — aucune icône dessinée à la main dans ce système. */
export interface IconProps {
  /** Nom Tabler sans préfixe, ex. "leaf", "clock", "shopping-cart". */
  name: string;
  /** @default 20 */
  size?: number | string;
  /** @default "currentColor" */
  color?: string;
  style?: React.CSSProperties;
}
export function Icon(props: IconProps): JSX.Element;
