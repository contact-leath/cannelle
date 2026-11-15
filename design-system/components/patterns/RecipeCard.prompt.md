Vignette de recette : l'unité de base des grilles Livre et Atelier.

```jsx
<RecipeCard title="Tarte aux abricots" time="45 min" image={photo} />
<RecipeCard title="Risotto citron" badge={<Badge hue="myrtille" tone="light">Atelier</Badge>} />
```

- Photo **3:4** obligatoire, dégradé `--overlay-scrim` en bas, titre Quicksand Bold 14px blanc + méta 11px.
- Sans photo : trame diagonale crème (`#f0ece4`/`#e8e3d9`, 8px) — jamais de bloc gris plat.
- Grille : `repeat(2,1fr)` avec `gap:12px` sur mobile.
