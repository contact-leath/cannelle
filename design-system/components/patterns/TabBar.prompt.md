Navigation principale de l'app, fixée en bas de l'écran.

```jsx
<TabBar active="recettes" onChange={setTab} />
```

- Quatre entrées seulement : Accueil (leaf), Recettes (book), Menu (calendar-week), Courses (shopping-cart).
- Icône Tabler 20px + libellé 10px. Actif : `--primary-dark`; inactif : `--text3`. Aucun indicateur autre que la couleur.
