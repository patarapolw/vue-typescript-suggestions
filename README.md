# vue-typescript-suggestions

An example repo for using TypeScript in Vue, with maximal VSCode suggestions

## Setup

```sh
vue create <APP_NAME>  # Don't forget to choose TypeScript and Babel
```

**Don't use `*.vue`**

- Change `src/App.vue` to `src/pages/App/index.(tsx|css)`
- Change `components/HelloWorld.vue` to `src/components/HelloWorld/index.(tsx|css)`
- Change `.eslintrc.js` to

```js
module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true,
    },
  },
}
```

- I seems to not need to change `.babelrc` as in <https://github.com/vuejs/jsx>, nor install additional packages.

`src/pages/App/index.tsx` will be the following

```tsx
import { Component, Vue } from 'vue-property-decorator'

import HelloWorld from '@/components/HelloWorld'

import './index.css'

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  render () {
    return (
      <div id="app">
        <img alt="Vue logo" src={ require('@/assets/logo.png') } />
        <HelloWorld props={ { msg: 'Welcome to Your Vue.js + TypeScript App' } } />
      </div>
    )
  }
}
```

About `src/components/HelloWorld/index.tsx`, you can [guess](/packages/vue-sample/src/components/HelloWorld/index.tsx), but in short,

- There needs to be a `/>` or a closing tag.
- Props might not work properly. You need `props={ { msg: 'Welcome to Your Vue.js + TypeScript App' } }`.
- Don't forget to add `this.`
- `require('@/assets/logo.png')` seems to work because of some Webpack loader in Vue CLI.

## Plan

I will experiment later with Nuxt CLI.

## TLDR / Take Home Message

- [Vetur in VSCode](https://github.com/vuejs/vetur) does not always work fully for TypeScript, especially in a [Monorepo](https://github.com/vuejs/vetur/issues/815)
  - The best fix is indeed, do not use TypeScript in `*.vue`
  - One of the workarounds is `<script lang="ts" src="./index.ts">`
- [Vue template string isn't as smart as TypeScript Intellisense](https://dev.to/skyrpex/comment/6m6j).
  - The workaround is, do not use `<template>`. Use `*.tsx` (or `*.jsx`) instead.
- `@angular/cli`'s `ng generate component App` doesn't even create a Single File Component, but instead create a single folder with multiple components.

```raw
./src/app/comp
├── comp.component.html
├── comp.component.scss
├── comp.component.spec.ts
└── comp.component.ts
```

## Summary

In summary, do not use `*.vue`, if you want a better IntelliSense. There are other approaches in component-based structure; like a folder.
