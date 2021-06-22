# 11ty Sandbox - Bootstrap SCSS

I am also testing this at work, because if that works, it would be pretty awesome.

## Install Dependencies

```
$ npm intall
```

## Serve Project

This will hot reload the built files. You do not need to run in dev mode and then generate like Nuxt.

```
$ npm run serve
```

## Edit SCSS Files

SCSS can be found in `/styles/scss/custom.scss`. In order to use it, you need to have the Live Sass Compiler VS Code extension. Watch the SCSS files, and make sure the the layout is correctly linked to the outputted css file. This will depend on your user settings, but by default will be in the same file. 

Be sure when linking to the bootstrap files in Node Modules, to get them from `../../` instead of `/`. When using the slash, it is using the root directory of your computer, not the working root directory.