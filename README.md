# Portfolio (split en pages)

Ce dépôt contient une version découpée du composant initial (présent dans `page.html`) en un petit projet React utilisant Vite.

Fichiers créés:
- `index.html` - point d'entrée Vite
- `package.json` - dépendances et scripts
- `src/main.jsx` - point d'entrée React
- `src/App.jsx` - routage et état global
- `src/components/Nav.jsx` - navigation
- `src/components/Modal.jsx` - modal générique
- `src/pages/*` - pages séparées : Home, About, Skills, Projects, Experience, Certifications, Contact
- `src/styles.css` - styles minimaux (placeholder)
- `index.html` - nouvelle page HTML statique (site principal)
- `styles.css` - styles racine (palette terre)
- `script.js` - interactions (preview photo, gallery certifs, upload/download CV)

Version actuelle : le projet a été converti en site statique minimal (HTML/CSS/JS). Pour lancer localement simplement ouvrir `index.html` dans un navigateur ou utiliser un petit serveur local (recommandé pour la fonctionnalité /cv.pdf) :

```powershell
# si vous avez Python installé :
python -m http.server 5173
# ou utilisez un serveur Node (si installé) :
npx serve .
```

Fonctionnalités utiles ajoutées :
- Thème couleurs "terre" (marron / ocre / beige).
- Upload et preview de votre photo de profil directement dans la page.
- Upload multiple des images de certifications — galerie interactive et modal de visualisation.
- Option upload CV (PDF) + bouton fonctionnel "Télécharger mon CV" ; si vous placez un fichier `cv.pdf` à la racine il sera proposé automatiquement.

Remarques:
- Les images de certificat et la photo restent en mémoire de session (Blob URL) — si vous voulez que ces fichiers soient stockés définitivement dans le projet, copiez-les dans le dossier et modifiez les balises `<img>` pour pointer sur leurs chemins.
- Si vous souhaitez que je remplace les placeholders par des images réelles (si vous les fournissez), je peux les copier dans le repo et mettre à jour les références.
