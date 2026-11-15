/**
 * Bouton d'action Cannelle — trois niveaux, un seul primary par écran.
 */
export interface ButtonProps {
  /** Niveau hiérarchique. @default "primary" */
  variant?: 'primary' | 'secondary' | 'text';
  /** Occupe toute la largeur — usage typique en bas de formulaire ou de sheet. @default false */
  fullWidth?: boolean;
  /** @default false */
  disabled?: boolean;
  /** Nom d'icône Tabler sans préfixe, ex. "plus". */
  icon?: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
