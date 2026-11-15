Bottom sheet : tout choix secondaire se fait ici, jamais dans une modale centrée.

```jsx
<BottomSheet title="Filtres" onClose={close}>
  <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
    <Chip selected>Plat</Chip><Chip>Dessert</Chip><Chip>Entrée</Chip>
  </div>
</BottomSheet>
```

- Coins hauts 20px seulement, poignée 36×4px `--border` centrée, padding 16px.
- Titre en Sora ExtraBold 16px. Ouverture 260ms (`--duration-sheet`), scrim noir 40% derrière.
