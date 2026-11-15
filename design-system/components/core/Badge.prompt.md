Badge de catégorie ou d'état : marque une recette, un produit de saison, un mode. Jamais cliquable — pour un choix, utiliser `Chip`.

```jsx
<Badge hue="fraise">Dessert</Badge>
<Badge hue="myrtille" tone="light">Atelier</Badge>
<Badge hue="primary" tone="vivid">De saison</Badge>
```

- `pastel` : couleur acidulée pleine, texte foncé obligatoire (le blanc plafonne à 2,1:1).
- `light` : même texte foncé sur fond très pâle — à préférer dès que plus de trois badges cohabitent.
- `vivid` : version la plus claire de la teinte atteignant 4,5:1 sur blanc, texte blanc.
