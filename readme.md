# 🚀 Mini Portfolio Dynamique

Salut ! Voici un projet de mini portfolio web interactif et personnalisable. Il combine une interface moderne avec des fonctionnalités dynamiques pour créer une présentation percutante.

## ✨ Fonctionnalités principales

- 🖼️ Fond d'écran à changement dynamique
- 👤 Section de profil personnalisable
- 💬 Zone de message personnalisé
- 🔗 Intégration des réseaux sociaux
- 🖱️ Curseur personnalisé pour une UX améliorée

## 🛠️ Configuration

Toutes les données personnalisables sont centralisées dans `config.js`. Vous pouvez facilement ajuster :

- Informations de profil
- Images de fond
- Liens vers les réseaux sociaux

## 📁 Structure du projet

mini-portfolio/
│
├── index.html
├── styles.css
├── script.js
├── config.js
└── README.md

## ⚙️ Personnalisation

1. Ouvrez `config.js`
2. Modifiez les valeurs selon vos besoins :

```javascript
const config = {
    username: "Ton Nom ici",
    profilePicture: "URLPP", 
    backgroundImage: "URLBACKGROUND", 
    message: "Bienvenue sur mon mini portfolio !",
    socialLinks: [
        { icon: "fab fa-github", url: "https://github.com/tongithub" },
        { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/tongithub/" },
        { icon: "fab fa-twitter", url: "https://twitter.com/tongithub" }
    ]
};
```
## 🚀 Déploiement

Clonez le repository
Personnalisez config.js
Ouvrez index.html dans un navigateur ou déployez sur votre serveur

## 🤝 Contributions

Vous avez des idées d'amélioration ? N'hésitez pas à ouvrir une issue ou à proposer une pull request. Toute contribution constructive est la bienvenue !

## 📜 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et de le modifier, en citant la source originale.
Bon développement ! 💻✨
