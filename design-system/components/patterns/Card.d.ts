/** Surface blanche à hairline — le conteneur générique du système (pas d'ombre). */
export interface CardProps {
  /** @default "var(--pad-card)" (20px) */
  padding?: string | number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
