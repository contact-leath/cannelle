Chip de filtre : une rangée de choix mutuellement exclusifs ou cumulables, dans une barre de filtres ou un bottom sheet.

```jsx
<Chip selected>Plat</Chip>
<Chip onClick={() => setFilter('dessert')}>Dessert</Chip>
```

- Rayon pill, padding 8px 14px, 13.5px. Inactive : `--surface2` + hairline `--border`. Active : `--primary-dark` plein, texte blanc.
- Se pose en `display:flex; gap:8px` — jamais de bord droit tronqué, la rangée passe à la ligne.
