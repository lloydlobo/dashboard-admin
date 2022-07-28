# Dashboard-Admin

- [Vite + Svelte + TypeScript + Eslint(airbnb) + Prettier + Stylelint + Storybook(Vite)](https://zenn.dev/warugaki/scraps/b62edf8b125f3e)

## Brief

### Preview

![dashboard project](https://cdn.statically.io/gh/TheOdinProject/curriculum/main/html_css/grid-lessons/project-dashboard/dashboard-project.png)

### Assignment

[Link](<https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-admin-dashboard>)

#### Step 1: Set Up and Planning

- [x] Set up your HTML and CSS files with some simple dummy content, just to make sure you have everything linked correctly.
- [x] Set up your Git repository (refer to past projects if you need a refresher).
- [ ] Download a full-resolution copy of the project design file and get a general idea for how you're going to need to lay things out in your HTML document.

#### Step 2: Layout

- [ ] Start by writing out the HTML elements for the sidebar, header and main-content containers.
- [ ] In your CSS file, apply Grid properties until you have this basic layout built.

#### Step 3: Nesting

- [ ] Taking it one section at a time, begin nesting child elements under the parent elements in the HTML. Remember that you can keep making grid containers within grid containers.
- [ ] In the sidebar, use more grids to lay out the navigation and branding sections.
- [ ] In the header, use more grids to lay out the search bar, user info and buttons.
- [ ] For the main-content, use more grids to lay out the projects, announcements and trending items.
- [ ] Fill out some dummy content and placeholder images so you can position all of your grid items.

#### Step 4: Gather Assets

- [ ] Once you have your grid layout complete you can either recreate the dashboard example above or style your own design.
- [ ] Check out some color palettes from Tailwind.
- [ ] All of the icons and more can be downloaded as SVGs from Material Design Icons.
- [ ] Choose your own fonts! The design example uses Roboto, which is available with Google fonts.

#### Step 5: Some Tips

- [ ] When building the layout, apply background colors or borders to your containers to help you visualize your grid.
- [ ] It's up to you whether to use pixels, fr units or both for your grid tracks.
- [ ] This project does not have to be responsive, but if you'd like to you can expand or shrink the project cards section when resizing the browser window.
- [ ] You don't have to make a pixel perfect match with the design example. Consider this an opportunity to practice your CSS skills with your own designs.
- [ ] Don't forget to push your finished dashboard to GitHub. Use GitHub Pages to publish it to the world!

## Development

- [x] .vscode settings => fix: stylelint.validate
- [x] tailwind @rule-unknown fix stylelint eslint [Source](https://stackoverflow.com/a/72161880)
- Example

    ```yml
    'rules': { 'at-rule-no-unknown': [true, { 'ignoreAtRules': ['tailwind'] }] }

    ```

    [More](https://github.com/tailwindlabs/tailwindcss/discussions/5258)

### Tailwindcss

- Prettier + Tailwindcss plugin

   ```sh
   npm install -D prettier prettier-plugin-tailwindcss
   ```

### Linting

#### Stylelint

- [Rules](https://stylelint.io/user-guide/rules/list/)

## Design

### Theme

- Color Palette
  - [Tailwindcss](https://tailwindcss.com/docs/customizing-colors)
- Icons
  - [Material Design Icons](https://materialdesignicons.com/)

<!-- 
## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Need an official Svelte framework?

Check out [SvelteKit](https://github.com/sveltejs/kit#readme), which is also powered by Vite. Deploy anywhere with its serverless-first approach and adapt to various platforms, with out of the box support for TypeScript, SCSS, and Less, and easily-added support for mdsvex, GraphQL, PostCSS, Tailwind CSS, and more.

## Technical considerations

**Why use this over SvelteKit?**

- It brings its own routing solution which might not be preferable for some users.
- It is first and foremost a framework that just happens to use Vite under the hood, not a Vite app.
  `vite dev` and `vite build` wouldn't work in a SvelteKit environment, for example.

This template contains as little as possible to get started with Vite + TypeScript + Svelte, while taking into account the developer experience with regards to HMR and intellisense. It demonstrates capabilities on par with the other `create-vite` templates and is a good starting point for beginners dipping their toes into a Vite + Svelte project.

Should you later need the extended capabilities and extensibility provided by SvelteKit, the template has been structured similarly to SvelteKit so that it is easy to migrate.

**Why `global.d.ts` instead of `compilerOptions.types` inside `jsconfig.json` or `tsconfig.json`?**

Setting `compilerOptions.types` shuts out all other types not explicitly listed in the configuration. Using triple-slash references keeps the default TypeScript setting of accepting type information from the entire workspace, while also adding `svelte` and `vite/client` type information.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file allows VS Code to prompt the user to install the recommended extension upon opening the project.

**Why enable `allowJs` in the TS template?**

While `allowJs: false` would indeed prevent the use of `.js` files in the project, it does not prevent the use of JavaScript syntax in `.svelte` files. In addition, it would force `checkJs: false`, bringing the worst of both worlds: not being able to guarantee the entire codebase is TypeScript, and also having worse typechecking for the existing JavaScript. In addition, there are valid use cases in which a mixed codebase may be relevant.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/rixo/svelte-hmr#svelte-hmr).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

````ts
// store.ts
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
``` 
```` -->
