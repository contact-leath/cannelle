/** Panneau glissant depuis le bas — filtres, choix rapides, ajout au menu. */
export interface BottomSheetProps {
  /** Titre en Sora ExtraBold 16px. */
  title?: string;
  /** @default true */
  open?: boolean;
  /** Appelé au clic sur la poignée. */
  onClose?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function BottomSheet(props: BottomSheetProps): JSX.Element;
