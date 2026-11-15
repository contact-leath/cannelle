# Cannelle — notes pour Claude

## L'application
Cannelle est mon application personnelle de recettes de cuisine. Je suis la seule à l'utiliser, surtout sur mon téléphone, où elle est ajoutée à l'écran d'accueil.

- **Tout tient dans un seul fichier : `index.html`** (HTML, CSS et JavaScript, sans framework ni étape de build). Il n'y a pas de `npm`, pas de bundler : on modifie le fichier directement.
- **Hébergement : GitHub Pages**, adresse `https://contact-leath.github.io/cannelle/`. Chaque push sur la branche `main` republie le site en une minute environ.
- Toute l'interface est **en français**, avec un ton chaleureux et simple (tutoiement).

## Organisation du fichier
- **CSS** : dans la balise `<style>` en haut du fichier. Les couleurs, rayons et polices sont des variables CSS dans `:root` (`--accent`, `--secondary`, `--radius`, `--font`…), avec une version mode sombre (`prefers-color-scheme: dark`).
- **HTML** : une vue par section, repérée par un commentaire (`<!-- MAIN VIEW -->`, `<!-- DETAIL VIEW -->`, `<!-- ADD/EDIT VIEW -->`, `<!-- SAISONS VIEW (ACCUEIL) -->`, `<!-- MENU VIEW -->`…), plus des modales et des « bottom sheets » (filtres, choix d'ajout, choix du jour).
- **Barre d'onglets** en bas : Saisons (accueil), Recettes (`home`), Menu, Courses. La navigation passe par `switchTab()`.
- **JavaScript** : dans la balise `<script>` à la fin du fichier, en fonctions globales appelées par des `onclick`. Icônes : Tabler Icons (classes `ti ti-...`). Polices : Quicksand (texte) et Sora (titres).

## Données — à manipuler avec précaution
- **Recettes et photos : Supabase** (projet `gpbzppfqcbzpxdhuuaos`), appelé directement avec `fetch` sur l'API REST, sans bibliothèque Supabase.
  - Table `recettes` : fonctions `fetchRecipes`, `insertRecipe`, `updateRecipe`, `deleteRecipeDB`.
  - Photos : bucket de stockage `photos` (`uploadPhoto`, `deletePhoto`, compression avec `compressImage`).
  - Génération de recettes par IA : fonction Supabase `generate-recipe` (`generateRecipe`, `regenerateTitle`).
  - La clé dans le fichier est la clé publique `anon`, c'est normal. **Ne jamais ajouter de clé `service_role` ni aucun autre secret dans le code** : le dépôt est public.
- **Stockés dans le navigateur (localStorage)**, donc propres à chaque appareil :
  - `menu_v1` : le menu de la semaine ;
  - `courses_v1` : la liste de courses ;
  - `galleryCols` : le nombre de colonnes de la galerie.
  - **Ne pas renommer ces clés**, sinon mes données existantes disparaissent.
- Une recette contient : `name`, `emoji`, `category`, `prepTime`, `cookTime`, `portions`, `status` (`idee` / `ajuster` / `validee`, ce que l'appli appelle « l'atelier »), `ingredients` (liste de `{ qty, name }`), `steps`, `fav`, `photoUrl`. Toute modification de cette structure doit rester compatible avec les recettes déjà enregistrées.

## Règles de travail
1. **Ne jamais supprimer ni modifier en masse des données Supabase** (recettes, photos) sans me demander d'abord.
2. **Suivre le design system** (voir la section ci-dessous) : utiliser les variables CSS existantes plutôt que de nouvelles couleurs codées en dur, et vérifier que ça rend bien en mode sombre.
3. **Penser mobile d'abord** : l'appli est surtout utilisée sur iPhone (zones tactiles assez grandes, `safe-area` respectée, pas de survol obligatoire).
4. **Modifier seulement ce qui est demandé.** Le fichier est gros : ne pas le réécrire ni le reformater en entier.
5. **Tester avant d'envoyer** : ouvrir la page, vérifier qu'il n'y a pas d'erreur dans la console et que la fonctionnalité touchée marche.
6. Faire des commits clairs, en français, qui décrivent la modification (ex. « Ajoute un filtre par temps de préparation »).
7. M'expliquer simplement ce qui a changé : je ne suis pas développeuse.

## Design system — obligatoire pour tout développement
Le design system de Cannelle est dans le dossier **`design-system/`**. C'est la référence pour tout ce qui touche à l'apparence et aux textes de l'app.

**Avant chaque nouveau développement ou modification visuelle :**
1. Lire `design-system/readme.md` (palette, typo, espacements, rayons, ombres, mouvement, états d'interaction, icônes, ton des textes).
2. Lire les valeurs exactes dans `design-system/tokens/*.css`.
3. Si l'écran touche un composant (bouton, FAB, chip, badge, toggle, champ, carte, carte recette, barre d'onglets, bottom sheet), lire son `.prompt.md` dans `design-system/components/` ; `ui_kits/cannelle-app/` montre des écrans complets.

**Comment l'appliquer dans `index.html` :**
- Les composants du design system sont écrits en React (`.jsx`) : ce sont des **modèles visuels**, pas du code à importer. On reproduit leur rendu en HTML/CSS/JS simple, dans le fichier unique, sans charger React ni les fichiers de `design-system/`.
- Utiliser les variables CSS déjà présentes dans `:root` de l'app (tableau ci-dessous). Si une valeur du design system n'a pas encore d'équivalent (ex. `--primary-darker`, `--shadow-fab`, `--duration-base`), l'ajouter dans `:root` **sous le nom et avec la valeur du design system**, et prévoir sa version mode sombre si c'est une couleur.
- Ne rien inventer : si un élément manque dans le design system (nouveau composant, nouvelle couleur…), me le proposer avant de le créer, puis mettre `design-system/readme.md` à jour une fois validé.
- Les textes suivent les règles de rédaction du readme : tutoiement, casse de phrase, libellés « verbe + objet » (jamais « OK » seul), unités à la française (« 45 min », « 180 °C »), séparateur `·`.

**Correspondance entre les noms de l'app et ceux du design system :**

| App (`index.html`) | Design system | Valeur |
|---|---|---|
| `--accent` | `--primary` | `#5A8311` |
| `--accent-dark` | `--primary-dark` | `#43640A` |
| `--accent-light` | `--primary-light` | `#EDF4DD` |
| `--border` (0,08) | `--border-subtle` | `rgba(0,0,0,0.08)` |
| `--border2` (0,14) | `--border` | `rgba(0,0,0,0.14)` |
| `--radius` | `--radius-card` | `14px` |
| `--radius-sm` | `--radius-field` | `8px` |
| `--font` | `--font-text` | Quicksand |
| `--font-heading` | `--font-display` | Sora 800 |

⚠️ **Piège :** `--border` ne désigne pas la même valeur dans l'app (trait discret) et dans le design system (trait marqué). Toujours vérifier avec ce tableau.

**Écarts connus, à me faire trancher avant d'y toucher (ne rien changer en masse) :**
- **Emojis** : le design system dit « aucun emoji », mais chaque recette a un champ `emoji` affiché dans l'app.
- **Gris clair du texte** : `--text3` vaut `#9b9c90` dans l'app, plus pâle que la limite du design system (`#767769`).
- **Noms des variables** : l'app utilise encore les anciens noms (`--accent`…). Ne pas tout renommer sans mon accord.
- **Mode sombre** : le design system ne le décrit pas. Garder les couleurs sombres actuelles de l'app et en prévoir une pour toute nouvelle couleur.
