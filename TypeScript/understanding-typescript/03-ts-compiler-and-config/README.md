# The TypeScript Compiler (and its Configuration)

### Useful Resources & Links

- [tsconfig Docs](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [Compiler Config Docs](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- [VS Code TS Debugging](https://code.visualstudio.com/docs/typescript/typescript-debugging)

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> Using "Watch Mode" </p>

Now, each time you want to compile `app.ts` file we do `tsc app.ts`.

`tsc app.ts --watch` or `tsc app.ts -w` is going to compile this specific file each time we save it.

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> Compiling the Entire Project / Multiple Files </p>

`tsc --init` in the root of the project. And it creates `tsconfig.json` file.

> Note: if you've installed `typescript` locally on your machine, you can do: `npx tsc --init` to create the `tsconfig.json` file.

As soon as you have set up `tsconfig.json` file, you can run `tsc` and it will compile all your TypeScript files. and you
can run `tsc --watch` to compile entire project in watch mode.

```js
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Basic Options */
    // "incremental": true,                   /* Enable incremental compilation */
    "target": "es5" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,
    "module": "commonjs" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */,
    // "lib": [],                             /* Specify library files to be included in the compilation. */
    // "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    // "outDir": "./",                        /* Redirect output structure to the directory. */
    // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                     /* Enable project compilation */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    // "removeComments": true,                /* Do not emit comments to output. */
    // "noEmit": true,                        /* Do not emit outputs. */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    "strict": true /* Enable all strict type-checking options. */,
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

    /* Module Resolution Options */
    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */

    /* Advanced Options */
    "skipLibCheck": true /* Skip type checking of declaration files. */,
    "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */
  }
}
```

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> Including & Excluding Files </p>

Now if you add exclude here, that will be an array, and what you can enter here are paths to files which should not be
included in compilation when you run TSC on the entire project.

```js
{
  "compilerOptions": {
    //...
    "target": "es5",
    "module": "commonjs"
    //...
    /* Advanced Options */
    //...
  },
  "exclude": [
    "node_modules",
    "analytics.dev.ts",
    "*.dev.ts"
  ] /* if you add any exclude, you should specify node_modules ortherwise it does it by default */,
  "include": [
    "app.ts"
  ] /* if you use include, we need to include ALL the files/folders we want */,
  "files": [
    "app.js"
  ] /* files is similar to include but only accept files and not folders */
}
```

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> Setting a Compilation Target </p>

```js
{
  "compilerOptions": {
    //...
    "target": "es5",
    "module": "commonjs"
    //...
  }
}
```

`"target": "es5",` means all our typescript code is compiled in `es5`, but you could change to (ctrl + space) and let Babel or other to choose how to transpile your JS code.

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> Understanding TypeScript Core Libs </p>

`lib` is an option that allow us to specify which default objects and features typescript knows. For example: `dom`, `window`,...

The default objects and features available will depend on your `target`.

```js
{
  "compilerOptions": {
    //...
    "lib": [
      "dom",
      "es6",
      "dom.iterable",
      "scripthost"
    ] /* this is the default value included with es6 target */
    //...
  }
}
```

How does TS know that we have such a document, constant or variable available? How does it know that even if we have
that available that it holds an object which has our querySelector method?

How does it know that button is something which has addEventListener method? How does TypeScript know all of that?
Now you might say, "Of course it knows." Because in Vanilla JavaScript this would be valid code but keep in mind that
when you write TypeScript code, you don't necessarily write it for the browser. You could be writing your Node.js
application with TypeScript and there indeed this would all not work.

So, the reason why this works is this lib option and as you see it's not even set here, but if it isn't set then some
defaults are assumed. If it's not set the defaults depend on your JavaScript target here, and for es6 it, by default,
includes all the features that are globally available in es6. For example, the Map object which is available in es6.
Therefore it wouldn't complain if you use Map.

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> More Configuration & Compilation options </p>

With allowJs and by the way all the way we have checkJs you can always include JavaScript files in the compilation.
Now with allowJs a JavaScript file will be compiled by type script so even if doesn't end with .ts, type script will
compile it with checkJs it will not compile it but it will still check the syntax in there and report potentially errors.

```js
/* JavaScript Support */
{
  "allowJs": true,
  "checkJs": true,
}

```

<p style="text-align: center; font-size: 20px; font-weight: bold"> Working with Source Maps </p>

`SourceMap` helps us with debugging and development.

The map files generated act as a **bridge** in the modern browsers and the developer tools to connect the JS files to the input TS files. **We can even breakpoint in our TS file.**

With this, we can see TS files as well in sources tab in browser.

```js
{
  "compilerOptions": {
    //...
    "sourceMap": true
    //...
  }
}
```

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> rootDir and outDir </p>

A good prcatice is to set up a `src` folder with all the TS files (and folders) and a `dist` folder where all the JS file compiled/generated are.

```js
{
  "compilerOptions": {
    //...
    "outDir": "./dist",
    "rootDir": "./src"
    //...
  }
}
```

If removeComments set to true then all the cmments will be removed from output js file.

```js
{
  "compilerOptions": {
    //...
    "removeComments": true
    //...
  }
}
```

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> Stop Emitting Files on Compilation Errors </p>

`noEmitOnError` prevents code to be compiled if there is an error. No output js files are generated if there is
compilation error.

```js
{
  "compilerOptions": {
    //...
    "noEmitOnError": true /* default is false */
    //...
  }
}
```

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> Strict Compilation </p>

If strict is set to true then all other strict type checking is enabled.

```js
{
  "compilerOptions": {
    //...
    "strict": true /* Enable all strict type-checking options. */
    //...
  }
}
```

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> Code Quality Options </p>

It is a good practice to put keep them at `true` (default value).

```js
{
  "compilerOptions": {
    //...
    "noUnusedLocals": true /* Report errors on unused locals. */,
    "noUnusedParameters": true /* Report errors on unused parameters. */,
    "noImplicitReturns": true /* Report error when not all code paths in function return a value. */,
    "noFallthroughCasesInSwitch": true /* Report errors for fallthrough cases in switch statement. */
    //...
  }
}
```

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> Debugging with Visual Studio Code </p>

1. Install **Debugger for Chrome** extension.
2. Go to Debug and create a config file for "Chrome".
3. You should see:

```js
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome against localhost",
      "url": "http://localhost:3000", // same as the server you're running
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```

4. Add a breakpoint somewhere. It should work!

Note: the port for the `url` has to be the same as your current server.
