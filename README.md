# David Garner's CV

A small static site generator for my CV.

This project creates a static web page and a PDF, which are viewable at https://dprgarner.github.io/cv and https://dprgarner.github.io/cv/cv.pdf respectively.

## Developing

`yarn run` to see all the commands.

- `yarn build` creates the PDF and HTML versions of the CV into `./dist`.
- `yarn build:watch` re-runs build on source file changes.
- `yarn serve` serves a server for viewing the statically-built files.
- `yarn start` creates a livereloading server for editing the HTML version.
- `yarn deploy` deploys `./dist` to Github Pages.
