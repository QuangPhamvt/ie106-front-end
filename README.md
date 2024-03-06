# IE106-FE - User Interface Design's Project

<div align="center">
   <img src="Project/Images/Homepage.png" alt="Banu Store Homepage""/>
</div>

<div align="center">
   <strong>Banu Store's Homepage</strong>
</div>

+ Canva: https://www.canva.com/design/DAF3fjvFrJM/RyKnB_YB3Bex5h7Dtq63mg/edit
+ Demo website: http://ie106.customafk.com/
+ Figma: https://www.figma.com/file/OeCVzsCyK6P0KohcXXI84E
+ Demo Youtube: https://www.youtube.com/watch?v=DSh2PA9_e2M

```
___Table of Contents___
# Introduction
# Chapter 1: Survey, analysis, and reference
# Chapter 2: Interface design
# Chapter 3: Complete website interface
# Chapter 4: Interface interaction
# Chapter 5: Conclusion
# REFERENCES
```

## Technology
<a href="https://skillicons.dev">
<img src="https://skillicons.dev/icons?i=html,css,js,typescript,vite,react,nodejs,vscode,linux,git,github,figma&perline=6" />
</a>

### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
