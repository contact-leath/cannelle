Bouton d'action standard : à utiliser pour toute action déclenchée par l'utilisateur, avec un seul `primary` par écran.

```jsx
<Button onClick={save}>Ajouter la recette</Button>
<Button variant="secondary">Enregistrer</Button>
<Button variant="text">Tout effacer</Button>
<Button fullWidth icon="shopping-cart">Ajouter aux courses</Button>
```

- Hauteur fixe 48px, rayon 12px, libellé Quicksand 15px semi-bold. Jamais d'ombre (seul le FAB en porte une).
- `primary` utilise `--primary-dark` (#43640A) et non `--primary` : le vert clair ne passe pas le contraste avec du blanc.
- `disabled` : primary devient gris `--surface2`, secondary garde son fond blanc et perd son bord vert.
