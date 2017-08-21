# joi-creditcard-extension

Joi extension for credit card validation

[![CircleCI](https://circleci.com/gh/paflopes/joi-creditcard-extension.svg?style=svg)](https://circleci.com/gh/paflopes/joi-creditcard-extension)
[![npm version](https://badge.fury.io/js/joi-creditcard-extension.svg)](https://badge.fury.io/js/joi-creditcard-extension)
[![Known Vulnerabilities](https://snyk.io/test/github/paflopes/joi-creditcard-extension/badge.svg)](https://snyk.io/test/github/paflopes/joi-creditcard-extension)

Lead Maintainer: [Phillipe Lopes](https://github.com/paflopes)

# Usage

Usage is a two steps process. First, a schema is constructed using the provided types and constraints:

```js
const BaseJoi = require('joi');
const Extension = require('joi-creditcard-extension');
const Joi = BaseJoi.extend(Extension);

const schema = Joi.creditcard().number();
Joi.validate('5217 8503 2851 5461', Joi.creditcard().number()) // Output 5217850328515461
```

# API

Take a look at the [tests](https://github.com/paflopes/joi-creditcard-extension/tree/master/test)
