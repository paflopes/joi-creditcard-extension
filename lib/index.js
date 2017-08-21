const Joi = require('joi');
const _ = require('lodash');
const cardValidator = require('card-validator');

module.exports = {
  name: 'creditcard',
  base: Joi.string(),
  language: {
    number: 'must be a valid credit card number',
    expirationMonth: 'must be a valid expiration month',
    expirationYear: 'must be a valid expiration year',
    cvv: 'must be a valid cvv',
    postalCode: 'must be a valid postal code',
    type: 'can\'t get credit card type with given number',
  },
  rules: [
    {
      name: 'number',
      validate(params, value, state, options) {
        const result = cardValidator.number(value);
        if (!result.isValid) {
          return this.createError('creditcard.number', { v: value, q: params.q }, state, options);
        }

        return _(value).replace(/\s/g, '').toString();
      },
    },
    {
      name: 'expirationMonth',
      validate(params, value, state, options) {
        const result = cardValidator.expirationMonth(value);
        if (!result.isValid) {
          return this.createError('creditcard.expirationMonth', { v: value, q: params.q }, state, options);
        }
        return value;
      },
    },
    {
      name: 'expirationYear',
      validate(params, value, state, options) {
        const result = cardValidator.expirationYear(value);
        if (!result.isValid) {
          return this.createError('creditcard.expirationYear', { v: value, q: params.q }, state, options);
        }
        return value;
      },
    },
    {
      name: 'cvv',
      validate(params, value, state, options) {
        const result = cardValidator.cvv(value);
        if (!result.isValid) {
          return this.createError('creditcard.cvv', { v: value }, state, options);
        }
        return value;
      },
    },
    {
      name: 'postalCode',
      validate(params, value, state, options) {
        const result = cardValidator.postalCode(value);
        if (!result.isValid) {
          return this.createError('creditcard.postalCode', { v: value, q: params.q }, state, options);
        }
        return value;
      },
    },
  ],
};
