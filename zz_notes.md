# Getting Started

## Project repo and NPM

- typescript
  - entry point for typescript is `/node_modules/.bin/tsc`
  - `nxp tsc -v`
  - could be a dev dependency, but typescript is going to be the compiler. Push code to production and compile it remotely. This

## Express and TypeScript

`/node_modules/.bin/tsnd`
don't need server.js, we can just run the file

but first configure `tsconfig.json`

- compiling to target es5 means more compatibility, but larger file size

## Middlewares and Templating

`console.info` used for messages that will stay. Typescript can find `console.log`s and remove them for production.

ejs template tag example:

```
<%= Math.random() -%>
```

with a dash at beginning, it won't escape html

```
<%-  -%>
```

## Node Modules

running `node`, then double tapping tab shows all properties or functions

differentiating between internal/external dependencies:
`import os from "node:os";`

When importing, you can just write `import "./config";`, but if you want to import something from config, you have to have an export.

- in `config.ts` by having it exported both as named and default, I have options for import
- I'm noticing he imports files before creating them, which will ensure that they're properly imported.

## MongoDB and Docker

