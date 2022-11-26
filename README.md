# SWC ttag macro

The `nextjs` uses Rust-based compiler `SWC` to compile Javascript/TypeScript.  This new compiler is up to 17x faster than Babel when compiling individual files and up to 5x faster Fast Refresh.

But when there is a `.babelrc` file in the project root directory, `SWC` is not gonna work and all the code is gonna be compiled using `babel` which is slow.

The module `ttag.macro` uses `babel-plugin-macros` to translate the webapp at build time. So we're gonna need a `.babelrc` file to set the needed configurations. 
But after adding the `.babelrc` file to the project, `SWC` is gonna switched off.

So This is a simple project which uses `ttag.macro` over `SWC` compiler.

There is no `.babelrc` file in the root directory and all needed configs are set using webpack in `next.config.js` file. So the source code is gonna be compiled using `SWC`.

