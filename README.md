<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# acoth

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [inverse hyperbolic cotangent][hyperbolic-arctangent] of a double-precision floating-point number.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-acoth
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var acoth = require( '@stdlib/math-base-special-acoth' );
```

#### acoth( x )

Computes the [inverse hyperbolic cotangent][hyperbolic-arctangent] of a double-precision floating-point number.

```javascript
var v = acoth( 2.0 );
// returns ~0.5493

v = acoth( 1.0 );
// returns Infinity
```

The domain of the inverse hyperbolic cotangent is the union of the intervals `(-inf,-1]` and `[1,inf)`. If provided a value on the open interval `(-1,1)`, the function returns `NaN`.

```javascript
var v = acoth( 0.0 );
// returns NaN

v = acoth( 0.5 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random-array-uniform' );
var logEachMap = require( '@stdlib/console-log-each-map' );
var acoth = require( '@stdlib/math-base-special-acoth' );

var x = uniform( 100, 1.0, 5.0, {
    'dtype': 'float64'
});

logEachMap( 'acoth(%0.4f) = %0.4f', x, acoth );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/acoth.h"
```

#### stdlib_base_acoth( x )

Computes the [inverse hyperbolic cotangent][hyperbolic-arctangent] of a double-precision floating-point number.

```c
double out = stdlib_base_acoth( 2.0 );
// returns ~0.5493
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_acoth( const double x );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/acoth.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 1.0, 1.44, 1.89, 2.33, 2.78, 3.22, 3.67, 4.11, 4.56, 5.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_acoth( x[ i ] );
        printf( "acoth(%lf) = %lf\n", x[ i ], v );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/acosh`][@stdlib/math/base/special/acosh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arccosine of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math-base/special/acot`][@stdlib/math/base/special/acot]</span><span class="delimiter">: </span><span class="description">compute the inverse cotangent.</span>
-   <span class="package-name">[`@stdlib/math-base/special/asinh`][@stdlib/math/base/special/asinh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arcsine of a double-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math-base/special/atanh`][@stdlib/math/base/special/atanh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arctangent of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-acoth.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-acoth

[test-image]: https://github.com/stdlib-js/math-base-special-acoth/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-acoth/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-acoth/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-acoth?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-acoth.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-acoth/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-acoth/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-acoth/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-acoth/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-acoth/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-acoth/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-acoth/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-acoth/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-acoth/main/LICENSE

[hyperbolic-arctangent]: https://en.wikipedia.org/wiki/Inverse_hyperbolic_function

<!-- <related-links> -->

[@stdlib/math/base/special/acosh]: https://github.com/stdlib-js/math-base-special-acosh

[@stdlib/math/base/special/acot]: https://github.com/stdlib-js/math-base-special-acot

[@stdlib/math/base/special/asinh]: https://github.com/stdlib-js/math-base-special-asinh

[@stdlib/math/base/special/atanh]: https://github.com/stdlib-js/math-base-special-atanh

<!-- </related-links> -->

</section>

<!-- /.links -->
