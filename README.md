# Projet React avec Vite, Tailwind CSS et shadcn/UI

Ce projet est une application React utilisant Vite comme outil de build, Tailwind CSS pour le style, et shadcn/UI pour les composants.

## Prérequis

Assurez-vous d'avoir Node.js et npm (ou yarn) installés sur votre machine.

## Étapes d'installation

1. Créez un nouveau projet React avec Vite :
   ```
   npm create vite@latest mon-projet -- --template react
   cd mon-projet
   ```

2. Installez les dépendances du projet :
   ```
   npm install
   ```

3. Installez Tailwind CSS et ses dépendances :
   ```
   npm install -D tailwindcss postcss autoprefixer
   ```

4. Générez les fichiers de configuration Tailwind :
   ```
   npx tailwindcss init -p
   ```

5. Configurez les chemins de contenu dans `tailwind.config.js` :
   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,jsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

6. Ajoutez les directives Tailwind à votre fichier CSS principal (src/index.css) :
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

7. Installez le plugin d'animation Tailwind :
   ```
   npm install tailwindcss-animate
   ```

8. Créez un fichier `jsconfig.json` à la racine du projet avec le contenu suivant :
   ```json
   {
     "compilerOptions": {
       "baseUrl": ".",
       "paths": {
         "@/*": ["./src/*"]
       }
     }
   }
   ```

9. Modifiez le fichier `vite.config.js` pour ajouter l'alias :
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import path from 'path'

   export default defineConfig({
     plugins: [react()],
     resolve: {
       alias: {
         "@": path.resolve(__dirname, "./src"),
       },
     },
     // ... autres configurations
   })
   ```

10. Installez shadcn/UI :
    ```
    npx shadcn-ui@latest init
    ```

11. Suivez les instructions de l'assistant d'installation de shadcn/UI. Voici les réponses recommandées :
    - Style : Default
    - Base color : Slate
    - Global CSS file : src/index.css
    - CSS variables : Yes
    - Tailwind CSS config : tailwind.config.js
    - Components folder : src/components
    - Utils folder : src/lib/utils.js
    - React Server Components : No
    - Customize default theme : Yes (si vous voulez personnaliser)
    - Use TypeScript : No

12. Lancez votre application en mode développement :
    ```
    npm run dev
    ```

Votre projet React avec Vite, Tailwind CSS et shadcn/UI est maintenant prêt à être utilisé !

## Utilisation de shadcn/UI

Pour ajouter des composants shadcn/UI à votre projet, utilisez la commande suivante :

```
npx shadcn-ui@latest add [nom-du-composant]
```

Par exemple, pour ajouter le composant Button :

```
npx shadcn-ui@latest add button
```

## Scripts disponibles

Dans le répertoire du projet, vous pouvez exécuter :

- `npm run dev` : Lance l'application en mode développement.
- `npm run build` : Compile l'application pour la production dans le dossier `dist`.
- `npm run preview` : Prévisualise localement la version de production.

## Personnalisation

Vous pouvez personnaliser davantage votre configuration Tailwind et shadcn/UI en modifiant les fichiers `tailwind.config.js` et `components.json`. N'hésitez pas à ajouter des thèmes, des couleurs ou des plugins supplémentaires selon vos besoins.

## Configuration de Vite

Vite est préconfiguré pour fonctionner avec React. Si vous avez besoin de personnaliser la configuration de Vite, vous pouvez le faire en modifiant le fichier `vite.config.js` à la racine du projet.

Pour plus d'informations sur la configuration de Vite, consultez la [documentation officielle de Vite](https://vitejs.dev/config/).

## Ressources supplémentaires

- [Documentation de shadcn/UI](https://ui.shadcn.com/)
- [Documentation de Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation de Vite](https://vitejs.dev/guide/)
