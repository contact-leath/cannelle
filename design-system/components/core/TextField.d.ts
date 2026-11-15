/** Champ de saisie — recherche, titre de recette, ingrédients, notes d'atelier. */
export interface TextFieldProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  /** Icône Tabler posée à gauche, ex. "search". Ignorée en multiline. */
  icon?: string;
  /** @default false */
  multiline?: boolean;
  /** @default 3 */
  rows?: number;
  style?: React.CSSProperties;
}
export function TextField(props: TextFieldProps): JSX.Element;
