Bouton flottant d'ajout : une seule instance par écran, ancrée en bas à droite au-dessus de la tab bar.

```jsx
<Fab icon="plus" onClick={newRecipe} />
```

- 56px, cercle plein `--primary` (#5A8311) — le seul élément du système avec une ombre portée (`--shadow-fab`).
- Hover : passe à `--primary-dark`. Pas de variante secondaire.
