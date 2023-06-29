# Academind's Tutorial

- [The Complete Tutorial][tutorial]

[tutorial]: https://youtu.be/BwuLxPH8IDs

## Overview

- Static error checking is always better than runtime crazy ones.

## Course Outline

1. Getting Started
1. TypeScript Basics
1. Compiler & Configuration Deep Dive
1. Working with Next-Gen JS Code
1. Classes & Interfaces
1. Advanced Types & TypeScript Features
1. Generics
1. Decorators
1. Time to Practice &mdash; Full Project
1. Working with Namespaces & Modules
1. Webpack & TypeScript
1. Third-Party Libraries & TypeScript
1. React + TS & NodeJS + TS

## 1. Setting it up

1. Use `npm init` to set up the `package.json` file.
1. Use `npm install --saveDev lite-server` to install a dependency which will only affect the development environment.
1. Add `"start": "lite-server"` to the `"scripts"` key.
   - And also add this key:
     ```json
     "devDependencies": {
         "lite-server": "^2.5.4"
     }
     ```
1. Use `npm start` to start serving your website.
   - Now the app will be automatically reloaded.

> Having both the `.js` and the `.ts` files open at the same time might generate errors due to conflicts in the IDE.
