# Memoirs

  [![Build Status](https://travis-ci.org/bredele/memoirs.svg?branch=master)](https://travis-ci.org/bredele/memoirs)
  [![NPM](https://img.shields.io/npm/v/memoirs.svg)](https://www.npmjs.com/package/memoirs)
  [![Downloads](https://img.shields.io/npm/dm/memoirs.svg)](http://npm-stat.com/charts.html?package=memoirs)
  [![pledge](https://bredele.github.io/contributing-guide/community-pledge.svg)](https://github.com/bredele/contributing-guide/blob/master/guidelines.md)

Sort dates chronologically or objects with given property containing a date. This module also accepts any kind of dates express in milliseconds or in string formats such as RFC822 or ISO 861.

## Usage

```js
const memoirs = require('memoirs')

// example using instance of Date
memoirs([
  new Date('01-01-2000'),
  new Date('01-01-2100'),
  new Date('01-01-2300'),
], new Date('01-01-2101'))
// { valid: [946710000000, 4102470000000], expired: [10413817200000], soon: []}

// exmaple using RFC822 formats
memoirs([
  new Date('01-01-2000'),
  '01-01-2100',
  new Date('01-01-2300'),
], '01-01-2101')
// { valid: [946710000000, 4102470000000], expired: [10413817200000], soon: []}


// example with a year time range for dates expiring soon
memoirs([
  new Date('01-01-2000'),
  new Date('01-01-2100'),
  new Date('12-06-2100'),
  new Date('01-01-2300'),
], new Date('01-01-2101'), 1000 * 60 * 60 * 24 * 365)
// { valid: [946710000000, 4102470000000], expired: [10413817200000], soon: [4102470000000, 4131759600000]}


```

## Installation

```shell
npm install memoirs --save
```

[![NPM](https://nodei.co/npm/memoirs.png)](https://nodei.co/npm/memoirs/)


## Question

For questions and feedback please use our [twitter account](https://twitter.com/bredeleca). For support, bug reports and or feature requests please make sure to read our
<a href="https://github.com/bredele/contributing-guide/blob/master/guidelines.md" target="_blank">community guideline</a> and use the issue list of this repo and make sure it's not present yet in our reporting checklist.

## Contribution

memoirs is an open source project and would not exist without its community. If you want to participate please make sure to read our <a href="https://github.com/bredele/contributing-guide/blob/master/guidelines.md" target="_blank">guideline</a> before making a pull request. If you have any memoirs related project, component or other let everyone know in our wiki.

## License

The MIT License (MIT)

Copyright (c) 2016 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
