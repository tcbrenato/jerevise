# JeRévise

JeRévise est une plateforme de révision interactive conçue pour aider les étudiants à réviser leurs cours de manière efficace. Elle offre des outils comme des flashcards, des quiz et un suivi des progrès pour une expérience d'apprentissage personnalisée.

## Fonctionnalités

- **Dashboard** : Vue d'ensemble des unités d'enseignement (UE) et progression.
- **Modules UE** : Accès aux différentes unités d'enseignement.
- **Cours** : Consultation des contenus de cours.
- **Flashcards** : Outil de révision avec cartes mémoire.
- **Quiz** : Tests interactifs pour évaluer les connaissances.
- **Statistiques** : Suivi des performances et progrès.

## Technologies utilisées

- **React** : Bibliothèque JavaScript pour l'interface utilisateur.
- **Vite** : Outil de build rapide pour le développement.
- **Tailwind CSS** : Framework CSS utilitaire pour le styling.
- **Framer Motion** : Bibliothèque d'animation pour React.
- **React Router** : Gestion du routage dans l'application.

## Installation

1. Clonez le dépôt :
   ```bash
   git clone <url-du-dépôt>
   cd jerevise
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```

4. Ouvrez votre navigateur à l'adresse `http://localhost:5173`.

## Scripts disponibles

- `npm run dev` : Lance le serveur de développement.
- `npm run build` : Construit l'application pour la production.
- `npm run lint` : Vérifie le code avec ESLint.
- `npm run preview` : Prévisualise la version de production.

## Structure du projet

```
jerevise/
├── .git/
├── .gitignore
├── eslint.config.js
├── index.html
├── node_modules/
├── package-lock.json
├── package.json
├── postcss.config.js
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── README.md
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── Badge.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── ProgressBar.jsx
│   └── UECard.jsx
│   ├── context/
│   │   └── ProgressContext.jsx
│   ├── data/
│   │   ├── ue1.js
│   │   ├── ue2.js
│   │   ├── ue3.js
│   │   ├── ue4.js
│   │   ├── ue5.js
│   │   ├── ue6.js
│   │   └── ue7.js
│   ├── index.css
│   ├── main.jsx
│   └── pages/
│       ├── Cours.jsx
│       ├── Dashboard.jsx
│       ├── Flashcards.jsx
│       ├── Quiz.jsx
│       ├── Stats.jsx
│       └── UEModule.jsx
├── tailwind.config.js
└── vite.config.js
```

## Contribution

Les contributions sont les bienvenues ! Veuillez ouvrir une issue ou soumettre une pull request.

## Licence

Ce projet est sous licence MIT.
