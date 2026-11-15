/** Interrupteur binaire — préférences, options de liste de courses. */
export interface ToggleProps {
  /** @default false */
  checked?: boolean;
  onChange?: (next: boolean) => void;
  /** Libellé posé à droite de l'interrupteur. */
  label?: string;
  style?: React.CSSProperties;
}
export function Toggle(props: ToggleProps): JSX.Element;
