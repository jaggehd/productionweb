# Sassy normalize

<a href="https://github.com/necolas/normalize.css"><img
  src="https://necolas.github.io/normalize.css/logo.svg" alt="Normalize Logo"
  width="80" height="80" align="right"></a>

> A modern way to import normalize.css

If you were searching a way to integrate normalize.css in your project easily in your gulp sass workflow. You're at the good place.

## Instalation

```sh
npm install --save sassy-normalize
```

## Make SASS aware of the sassy-normalize path

**import path in your gulp file**

```js
const gulp            = require('gulp');
const sass            = require('gulp-sass');
const normalize       = require("sassy-normalize").includePaths;

gulp.task('css', function () {
    return gulp.src('sass/**/*.{sass,scss}')
        .pipe(sass({ includePaths: [normalize] })
        .pipe(gulp.dest('./dist/css/')
    );
});
```

**_or_ use eyeglass**

```sh
npm install --save-dev eyeglass
```

```js
const gulp      = require('gulp');
const sass      = require('gulp-sass');
const eyeglass  = require("eyeglass");

gulp.task('css', function () {
    return gulp.src('sass/**/*.{sass,scss}')
        .pipe(sass(eyeglass())
        .pipe(gulp.dest('./dist/css/')
    );
});
```

more info @: https://github.com/sass-eyeglass/eyeglass

## Import anywere in your sass/scss
```scss
@import 'normalize'
```

**More info**

See https://necolas.github.io/normalize.css/latest/normalize.css


[![npm][npm-image]][npm-url] [![license][license-image]][license-url]
[![changelog][changelog-image]][changelog-url]
[![gitter][gitter-image]][gitter-url]
