/** Badge de catégorie — marquage seulement, jamais une action. */
export interface BadgeProps {
  /** Teinte catégorie. @default "primary" */
  hue?: 'primary' | 'secondary' | 'fraise' | 'peche' | 'myrtille';
  /** `pastel` acidulé, `light` très pâle (listes denses), `vivid` texte blanc. @default "pastel" */
  tone?: 'pastel' | 'light' | 'vivid';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
