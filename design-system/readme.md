# Cannelle — Design System

**Cannelle** est une app mobile de gestion de recettes personnelles. Elle organise les recettes en deux modes — **Livre** (recettes validées, au point) et **Atelier** (idées et tests en cours) — permet d'explorer les **produits de saison** et de **planifier les repas de la semaine**.

Un seul produit, une seule surface : **l'app mobile**. Pas de site marketing, pas de back-office, pas de deck dans les sources — donc rien de tel ici.

## Sources fournies

- Codebase monté en lecture seule : `DS Cannelle/` — **un seul fichier**, `DS Cannelle/Design System Cannelle.dc.html`. C'est un document de spécification interne, en français, intitulé « Système actuel · Cannelle », qui décrit « le minimum vital pour construire les écrans du MVP : couleurs, typo, rayons, et les composants réellement utilisés ».
- Ce document renvoie à un fichier voisin `./Explorations couleurs.dc.html` (pistes de couleurs écartées) qui **n'était pas présent dans le dossier monté**. Les explorations écartées sont donc inconnues de ce système.
- Aucun dépôt GitHub, aucun lien Figma, aucun deck, **aucun fichier de logo**, **aucune photographie** n'ont été fournis.

Tout ce qui suit est repris littéralement de ce document — valeurs exactes, non arrondies. Les rares ajouts sont signalés à la section « Ajouts assumés ».

## Index

| Fichier | Contenu |
| --- | --- |
| `styles.css` | point d'entrée CSS unique — uniquement des `@import` |
| `tokens/colors.css` | neutres, primary, secondary, teintes catégorie, traits, alias sémantiques |
| `tokens/typography.css` | familles, poids, échelle mobile, alias `--type-*` |
| `tokens/spacing.css` | échelle 2 → 48px, gutters, hauteurs de contrôle |
| `tokens/radii.css` | 8 / 12 / 14 / 20 / pill |
| `tokens/elevation.css` | hairlines, trois ombres, durées et courbe d'animation |
| `tokens/fonts.css` | Sora ExtraBold + Quicksand (Google Fonts) |
| `tokens/icons.css` | webfont Tabler Icons |
| `guidelines/*.card.html` | 21 fiches de fondation (Colors, Type, Spacing, Brand) |
| `components/core/` | Button, Fab, Chip, Badge, Toggle, TextField, Icon |
| `components/patterns/` | Card, RecipeCard, TabBar, BottomSheet |
| `ui_kits/cannelle-app/` | recréation cliquable de l'app (6 écrans) — voir son `README.md` |
| `templates/app-screen/` | template DC — écran mobile prêt à dupliquer |
| `SKILL.md` | enveloppe Agent Skill pour usage hors de ce projet |

### Composants

**Core** — `Button`, `Fab`, `Chip`, `Badge`, `Toggle`, `TextField`, `Icon`
**Patterns** — `Card`, `RecipeCard`, `TabBar`, `BottomSheet`

Chaque composant a son `.d.ts` (contrat de props) et son `.prompt.md` (quand l'employer, exemple, variantes).

### Ajouts assumés

- **`TextField`** — le document fixe le rayon des champs (8px) et la hauteur des contrôles (48px) mais n'en dessine pas d'exemple. Le composant applique ces valeurs, rien de plus.
- **`Icon`** — enveloppe de 6 lignes autour du webfont Tabler, pour éviter que les consommateurs ne dessinent des SVG à la main.
- **`Card`** — le document répète partout la même surface (blanc, rayon 14, hairline 0.5px, sans ombre) sans la nommer. Elle est extraite telle quelle.
- **`Fab`** — décrit dans le document comme une variante de bouton ; sorti en composant distinct parce qu'il est le seul élément porteur d'ombre et qu'il est limité à une instance par écran.

Rien d'autre n'a été inventé : pas de Toast, pas d'Avatar, pas de Tabs, pas de Dialog centré — le système source ne les définit pas.

---

## Content fundamentals

**Langue : français, exclusivement.** Y compris les libellés techniques et les noms de tokens commentés (`Fond`, `Surface`, `Primary clair`, `Texte 2`).

**Tutoiement.** L'app parle à une personne qui cuisine chez elle, pas à un utilisateur : « Préchauffe le four à 180 °C », « Étale la pâte », « Range les demi-abricots ». L'impératif à la deuxième personne du singulier est la forme par défaut des instructions. Le « nous » de marque n'existe pas.

**Casing : phrase, jamais Title Case.** « Ajouter la recette », « Tout effacer », « Ajouter aux courses », « Grouper par rayon ». Les seules capitales sont les surtitres (eyebrow) en `text-transform: uppercase` avec `letter-spacing: 1.4px` — et les deux noms propres du produit, **Livre** et **Atelier**, toujours capitalisés parce qu'ils désignent des lieux de l'app.

**Libellés d'action = verbe + objet.** Jamais « OK », « Valider », « Soumettre » seuls. « Ajouter la recette », « Voir les recettes », « Choisir un plat », « Chercher dans le Livre ». Les boutons destructeurs ou de remise à zéro passent en variante texte : « Tout effacer ».

**Ton : sobre, pratique, un peu complice.** Le document source lui-même est écrit ainsi : « Une seule instance par écran, ancrée en bas à droite », « le pastel plein devient bruyant au-delà de trois par écran ». Des affirmations courtes, des raisons données, aucune emphase marketing. Pas de « ! », pas de superlatifs, pas de « Oups ». Les notes utiles s'écrivent comme un carnet : « Testée trois fois à l'Atelier avant d'entrer au Livre. Avec des abricots un peu acides, monte à 90 g de sucre. »

**Chiffres et unités à la française.** Virgule décimale (`4,6:1`, `1,5px`), espace insécable avant l'unité (`600 g`, `45 min`, `180 °C`), abréviations culinaires standard (`c. à s.`, `g`, `min`, `1 h 10`). Les durées s'écrivent « 45 min », « 1 h 10 », jamais « 45m » ni « 1:10 ».

**Séparateur `·` (point médian)** pour les méta juxtaposées : « Système actuel · Cannelle », « --bg · #FAFAF6 », « Texte 3 · 4,6:1 », « Livre · 6 ». C'est la ponctuation signature du système ; ni tiret, ni barre verticale.

**Aucun emoji.** Nulle part : ni dans l'UI, ni dans la documentation, ni comme icône. L'iconographie passe intégralement par Tabler.

**États vides** : ils décrivent l'action possible, pas le vide. Un jour sans repas affiche « Choisir un plat », pas « Aucun repas planifié ».

---

## Visual foundations

### Palette

Un fond **crème** (`#FAFAF6`) et non blanc — c'est la première décision du système, elle donne toute sa chaleur. Les surfaces sont blanc pur (`#ffffff`) et se détachent du crème sans avoir besoin d'ombre. Une troisième valeur, `#F1F1E9`, sert de surface creuse (fonds de chips inactives, arrière-plan de scène).

**Deux couleurs de marque seulement** : un **vert olive** (`#5A8311`, foncé `#43640A`, très foncé `#2F4707`) et un **jaune citron** (`#F7E364`). Le vert porte toutes les actions et tous les états actifs ; le jaune ne porte **jamais** d'action — uniquement du marquage. Règle de contraste stricte : les boutons utilisent `--primary-dark` (#43640A, 6,9:1 sur blanc), pas `--primary` — le vert clair échoue avec du texte blanc.

Cinq **teintes catégorie** (primary vert, secondary jaune, fraise, pêche, myrtille) déclinées en trois niveaux calibrés :
- **pastel** — même luminosité et saturation que la secondary, texte foncé obligatoire (le blanc plafonne à 2,1:1)
- **light** — fond très pâle, même texte foncé ; à préférer dès que plus de trois badges cohabitent
- **vivid** — version la plus claire de la teinte atteignant 4,5:1 sur blanc, texte blanc

Texte : `#1a1a18` (presque noir, jamais `#000`), secondaire `#656659`, et une limite basse à `#767769` (4,6:1 sur le crème) — rien de plus clair.

Jamais de dégradé décoratif. Le seul dégradé du système est fonctionnel : le voile de protection sur les photos.

### Typographie

**Sora ExtraBold (800)** pour les titres d'écran (28px) et de section (19px) ; **Quicksand** (400/500/600/700) pour absolument tout le reste. Sora ne descend jamais dans le corps de texte, Quicksand ne monte jamais en titre d'écran. Cinq tailles suffisent : 28 / 20 / 18 / 16 / 14, plus 10-11px réservés aux libellés de tab bar et aux méta sur photo. Interlignage 1,15 en titre, 1,5 en corps, `text-wrap: pretty` sur les paragraphes.

### Espacement et layout

Pas régulier mais **non strictement 4px** — le système emploie 2, 4, 8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 48. Copier les valeurs telles quelles plutôt que les aligner sur une grille.

Marge latérale d'écran 16px ; padding de carte 20px ; padding de sheet 16px ; gap 12px dans les grilles de recettes (2 colonnes sur mobile), 8px entre chips. Hauteur de contrôle 48px, FAB 56px, cible tactile minimale 44px.

**Éléments fixes** : la tab bar (cinq onglets : Accueil, Recettes, Atelier, Menu, Courses) est ancrée en bas, flottante à 16px des bords, posée sur le fond crème ; le FAB flotte au-dessus d'elle en bas à droite, une seule instance par écran. Le contenu défile dessous avec un padding bas de ~108px pour ne jamais passer sous la barre.

### Fonds, imagerie, textures

Aucune illustration, aucun motif répété, aucune texture de papier, aucun bruit. Les fonds sont des aplats : crème, blanc, ou `#F1F1E9`.

L'imagerie, c'est **la photographie de plat** et rien d'autre — format **3:4** dans les vignettes, 4:3 en tête de détail, toujours plein cadre. Registre chaud, lumière naturelle, pas de noir et blanc, pas de grain ajouté. **Aucune photo n'est fournie dans les sources** : le placeholder officiel est une trame diagonale crème (`repeating-linear-gradient(135deg, #f0ece4 0 8px, #e8e3d9 8px 16px)`) — jamais un rectangle gris plat.

**Protection du texte sur image : dégradé, jamais capsule.** `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 65%, rgba(0,0,0,0.8) 100%)` sur la moitié basse de la photo, avec le titre en blanc dedans. Pas de pastille translucide, pas de bandeau plein.

### Bordures, rayons, ombres

**Le système est presque plat.** Deux hairlines à 0.5px remplacent l'ombre : `rgba(0,0,0,0.08)` pour les cartes et séparateurs, `rgba(0,0,0,0.14)` pour les champs et les chips inactives. Aucune bordure opaque, aucune bordure colorée à gauche.

Rayons : **8px** champs et petites vignettes, **12px** boutons, **14px** cartes et sheets, **20px** coins hauts d'un bottom sheet, **pill** chips et badges, **cercle** FAB et pastilles.

Trois ombres seulement, toutes justifiées par un objet qui flotte réellement : FAB `0 4px 14px rgba(0,0,0,0.18)`, pastille de toggle `0 1px 3px rgba(0,0,0,0.2)`, bottom sheet `0 -8px 28px rgba(0,0,0,0.12)`. **Pas d'ombre interne**, nulle part. Une carte n'a jamais d'ombre.

### Transparence et flou

**Aucun flou.** Pas de `backdrop-filter`, pas de verre dépoli. La transparence sert trois choses et s'arrête là : les hairlines (noir à 8 % / 14 %), le voile de protection sur photo, et le scrim noir à 40 % derrière un bottom sheet. Les boutons ronds posés sur une photo (retour, favori) utilisent du blanc à 92 %, pas un flou.

### Mouvement

Sobre et court : **120ms** pour un survol ou un changement de couleur, **180ms** pour un toggle ou une chip, **260ms** pour l'ouverture d'un bottom sheet. Une seule courbe, `cubic-bezier(0.2, 0, 0.2, 1)`. Fondus et glissements verticaux ; **aucun rebond, aucun ressort, aucune rotation**. Les sheets montent, les écrans se croisent, rien ne saute.

### États d'interaction

- **Survol** : changement de *couleur*, jamais d'opacité. Primary `#43640A` → `#2F4707`. Secondary : fond blanc → `--primary-light`. Texte : `#43640A` → `#2F4707`. Chip inactive : `--surface2` → `--primary-light`.
- **Pression** : la couleur de survol est conservée ; **pas de mise à l'échelle**, rien ne rétrécit.
- **Focus clavier** : la hairline du champ passe à `--primary` (1px) — pas de halo, pas d'anneau externe.
- **Sélection** : remplissage plein `--primary-dark` avec texte blanc (chips, jours actifs).
- **Désactivé** : primary devient `--surface2` avec texte `--text3` ; secondary garde son fond blanc et perd son bord vert ; `cursor: not-allowed`. Jamais d'opacité globale.

---

## Iconography

**Un seul jeu : Tabler Icons**, chargé en **webfont** depuis `@tabler/icons-webfont@3.19.0` (jsDelivr) — c'est exactement ce que fait le document source. Usage : `<i class="ti ti-clock"></i>`, ou le composant `Icon` (`<Icon name="clock" size={16} />`).

- **Style** : outline uniquement, trait ~1,5–2px, jamais de version remplie, jamais deux jeux mélangés.
- **Tailles** : 20px en tab bar et en action de barre, 18px dans un bouton, 14–16px pour une méta accolée à du texte, 24–26px pour un retour ou un FAB.
- **Couleur** : `currentColor` par défaut ; `--text3` pour une icône décorative, `--primary-dark` pour un état actif, blanc sur photo.
- **Glyphes du produit** : `leaf` (Accueil), `book` (Recettes / Livre), `flask` (Atelier), `calendar-week` (Menu), `shopping-cart` (Courses), `clock` (durée), `plus` (FAB), `search`, `filter`, `heart`, `check`, `chevron-left`, `dots`, `users` (parts).
- **Aucun emoji**, aucun caractère Unicode utilisé comme icône. Le seul caractère typographique fonctionnel est le point médian `·`, employé comme séparateur de méta — et le `·` vert en tête de ligne d'ingrédient.
- **Aucun SVG dessiné à la main** dans ce système, et aucun ne doit l'être : si un glyphe manque dans Tabler, en choisir un autre dans Tabler.

### Substitutions à valider

- **Polices** : Sora ExtraBold (800) remplace Paytone One pour les titres, choisi lors d'un test comparatif (Fredoka, Baloo 2, Space Grotesk, Sora). Chargée depuis **Google Fonts** (`fonts.googleapis.com/css2?family=Sora:wght@800&family=Quicksand:wght@400;500;600;700`). **Il n'y a pas de binaire local** : un consommateur hors ligne devra héberger les fichiers lui-même.
- **Icônes** : Tabler par CDN, sans copie locale (le webfont n'était pas fourni en binaire).
- **Logo** : **aucun logo n'existe dans les sources.** Le nom « Cannelle » se compose en Sora ExtraBold partout où une marque serait attendue (voir la fiche « Nom de marque »). Aucun mark n'a été dessiné ni approximé.
- **Photographies** : aucune. Trame diagonale crème partout, y compris dans le UI kit.
