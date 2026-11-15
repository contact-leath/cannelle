/** Filtre sélectionnable en pilule — filtres de recettes, catégories, saisons. */
export interface ChipProps {
  /** État sélectionné : fond vert plein. @default false */
  selected?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}
export function Chip(props: ChipProps): JSX.Element;
