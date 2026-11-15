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
2. **Garder le style visuel actuel** : utiliser les variables CSS existantes plutôt que de nouvelles couleurs codées en dur, et vérifier que ça rend bien en mode sombre.
3. **Penser mobile d'abord** : l'appli est surtout utilisée sur iPhone (zones tactiles assez grandes, `safe-area` respectée, pas de survol obligatoire).
4. **Modifier seulement ce qui est demandé.** Le fichier est gros : ne pas le réécrire ni le reformater en entier.
5. **Tester avant d'envoyer** : ouvrir la page, vérifier qu'il n'y a pas d'erreur dans la console et que la fonctionnalité touchée marche.
6. Faire des commits clairs, en français, qui décrivent la modification (ex. « Ajoute un filtre par temps de préparation »).
7. M'expliquer simplement ce qui a changé : je ne suis pas développeuse.
