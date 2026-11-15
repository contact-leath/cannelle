/** Barre d'onglets basse de l'app — Accueil, Recettes, Menu, Courses. */
export interface TabBarItem { id: string; icon: string; label: string; }
export interface TabBarProps {
  /** @default CANNELLE_TABS */
  items?: TabBarItem[];
  active?: string;
  onChange?: (id: string) => void;
  style?: React.CSSProperties;
}
export const CANNELLE_TABS: TabBarItem[];
export function TabBar(props: TabBarProps): JSX.Element;
