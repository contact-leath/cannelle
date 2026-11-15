/**
 * Vignette de recette — photo 3:4 avec dégradé de protection et titre en surimpression.
 */
export interface RecipeCardProps {
  title: string;
  /** Durée affichée avec une icône horloge, ex. "45 min". */
  time?: string;
  /** URL de la photo. Sans image, une trame diagonale crème sert de placeholder. */
  image?: string;
  /** Badge posé en haut à gauche (typiquement un `<Badge>`). */
  badge?: React.ReactNode;
  /** @default "100%" */
  width?: string | number;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function RecipeCard(props: RecipeCardProps): JSX.Element;
