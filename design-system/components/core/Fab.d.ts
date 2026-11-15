/** Bouton flottant — une seule instance par écran, ancrée en bas à droite. */
export interface FabProps {
  /** Icône Tabler sans préfixe. @default "plus" */
  icon?: string;
  /** Libellé accessible. @default "Ajouter" */
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}
export function Fab(props: FabProps): JSX.Element;
