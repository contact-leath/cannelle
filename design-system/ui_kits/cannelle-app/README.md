# UI kit — Cannelle, app mobile

Recréation cliquable de l'app Cannelle, composée **uniquement** avec les composants du système (`components/core`, `components/patterns`) et les tokens de `styles.css`.

Ouvrir `index.html`. Cadre 430×900, sans bezel de téléphone : le kit montre l'écran, pas l'appareil.

## Écrans

| Écran | Fichier | Contenu |
| --- | --- | --- |
| Accueil | `Screens.jsx` → `HomeScreen` | repas du soir, produits de saison, ajouts récents, essais d'Atelier |
| Recettes | `RecipesScreen` | bascule Livre / Atelier par `Chip`, recherche, grille 2 colonnes, sheet de filtres |
| Détail recette | `DetailScreen` | photo 4:3 avec dégradé, ingrédients, étapes numérotées, note d'atelier |
| Menu de la semaine | `MenuScreen` | 7 jours, choix d'un plat via bottom sheet, manques |
| Courses | `CoursesScreen` | cases à cocher, regroupement par rayon (Toggle) |
| De saison | `SaisonScreen` | grille des produits du mois + recettes associées |

## Interactions réelles

- Navigation par la `TabBar` et par les liens « Tout voir ».
- Bascule Livre ↔ Atelier, filtres par catégorie dans un bottom sheet.
- Planification : un jour vide ouvre un sheet et le plat choisi s'inscrit dans la semaine.
- Courses : cochage persistant en session, regroupement par rayon activable.
- « Ajouter aux courses » passe en état confirmé.

## Ce qui est volontairement absent

Le système source ne fournit **aucune photographie**. Toutes les images sont remplacées par la trame diagonale crème documentée dans le readme (Traitement photo). Pas d'onboarding, de compte, ni de partage : rien dans les sources ne les décrit.

## Fichiers

- `data.js` — contenu factice (recettes, semaine, courses, saison) sur `window.CannelleData`
- `Screens.jsx` — les six écrans + petites briques de mise en page (ScreenTitle, SectionTitle, Eyebrow, TopBar, Sheet)
- `App.jsx` — routeur, FAB, tab bar
