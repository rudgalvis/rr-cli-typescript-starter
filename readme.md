# rr-cli-starter: Typescript 5 to ESNext
[Getting started](#getting-started) | [Structure](#structure) | [Developing CLI app example](#developing-cli-app-example) | [Gotchas](#gotchas)

![Static Badge](https://img.shields.io/badge/license-MIT-green)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/rudgalvis/rr-cli-typescript-starter.svg)](https://github.com/rudgalvis/rr-cli-typescript-starter)
[![GitHub last commit](https://img.shields.io/github/last-commit/rudgalvis/rr-cli-typescript-starter)](https://github.com/rudgalvis/rr-cli-typescript-starter)
![Static Badge](https://img.shields.io/badge/keywords-Typescript%205%2C%20CLI%2C%20starter-blue)

Most minimal Typescript starter. It has only `Typescript` and `@types/node` as dependencies. In current state it's perfect for:
**CLI tool development** & **draft projects**

## Getting started

Clone the repository and install the dependencies

```bash
git clone git@github.com:rudgalvis/rr-cli-typescript-starter.git
```

Remove git associated files, to be able to connect fresh repo of yours.

```bash
rm -rf .git
```

Install dependencies

```bash
npm i
```

To compile typescript to esnext once run
```bash
npm run build
```

Or to compile after every file change run
```bash
npm run dev
```

## Structure

Out of the box structure is as follows:

```
|-src
  |  |-bin
  |  |  |-feature
  |  |  |  |- index.ts
  |  |-lib
  |  |  |-helpers
  |  |  |  |- ...
```

It compiles to CLI ready script

```
|-dist
  |  |-bin
  |  |  |-feature
  |  |  |  |- index.js
  |  |-lib
  |  |  |- ...
```


## Developing CLI app example

Start developing: run watcher to compile typescript to esnext

```bash
npm run dev
```

#### Setting up package.json

Your CLI commands are described under `bin` property in package.json.

```
// package.json
{
  ...
  "bin": {
    "<feature-command>": "dist/bin/hello-world/index.js"
  },
  ...
}
```

> The idea to test your CLI locally is to create a simlink to your package using `npm link`.
> It's good practice to unlink it after you done working not to pollute your npm directory.

Setup npm scripts for:
* linking _(already there)_, 
* unlinking  
* running the local command. 

Update `package.json` as following (make sure repo name is the same as used in unlink command):

```
// package.json
{
  "name": "<name-of-the-repository>",
  ...
  "scripts": {
    "unlink": "npm unlink <name-of-the-repository>",
    "test-local-<feature-command>": "npm run link && <feature-command>"
  },
  ...
}
```

Then you will be able to test your CLI command by running: 

```bash
npm run test-local-<feature-command>
```

## Gotchas

### ES Important

For compiled version of the code to work, the import statements in the code have to be in the following format:

* has to have relative path from the file it is being imported to. 
* has to have explicit .js extension.

Example:

```typescript
import {wait} from "./../../lib/helpers/wait.js";
```

You can make it less cumbersome by resolving modules in a better way or adding path aliases, but that 
requires adding post build processes or additional dependencies. This is the most minimal setup.
