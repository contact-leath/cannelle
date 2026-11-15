Champ de saisie ou de recherche.

```jsx
<TextField icon="search" placeholder="Chercher une recette" />
<TextField label="Titre" value={title} onChange={e => setTitle(e.target.value)} />
<TextField label="Notes" multiline rows={4} />
```

- Rayon 8px (et non 12px comme les boutons), hauteur 48px, hairline `--border` qui passe à `--primary` au focus — pas de halo.
- Ajout au système source, qui fixe le rayon des champs sans en dessiner d'exemple (voir readme, « Ajouts assumés »).
