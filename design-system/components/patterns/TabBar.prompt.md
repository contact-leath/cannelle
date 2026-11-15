Navigation principale de l'app, fixée en bas de l'écran.

```jsx
<TabBar active="recettes" onChange={setTab} />
```

- Cinq entrées seulement : Accueil (leaf), Recettes (book), Atelier (flask), Menu (calendar-week), Courses (shopping-cart). Recettes montre le Livre (recettes validées) ; Atelier, les idées et les recettes à ajuster.
- Icône Tabler 20px + libellé 10px. Actif : `--primary-dark`; inactif : `--text3`. Aucun indicateur autre que la couleur.
