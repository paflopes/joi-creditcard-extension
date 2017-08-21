/* eslint no-unused-expressions: off  */
const chai = require('chai');
const BaseJoi = require('joi');
const creditCardExt = require('../lib');

const Joi = BaseJoi.extend(creditCardExt);
const expect = chai.expect;


describe('credit card validation test', () => {
  it('should trim spaces from original value', () => {
    const { error, value } = Joi.validate('5217 8503 2851 5461', Joi.creditcard().number());
    expect(error).to.be.null;
    expect(value).to.be.a('string').and.be.equal('5217850328515461');
  });

  it('should validate credit card number', () => {
    const { error } = Joi.validate('5217 2851 5461', Joi.creditcard().number());
    expect(error).to.exist.and.have.property('isJoi', true);
    expect(error).to.have.nested.property('details.[0].message', '"value" must be a valid credit card number');
  });

  it('should validate credit card cvv', () => {
    const { error } = Joi.validate('85', Joi.creditcard().cvv());
    expect(error).to.exist.and.have.property('isJoi', true);
    expect(error).to.have.nested.property('details.[0].message', '"value" must be a valid cvv');
  });

  it('should return credit card cvv', () => {
    const { error, value } = Joi.validate('485', Joi.creditcard().cvv());
    expect(error).to.be.null;
    expect(value).to.be.a('string').and.be.equal('485');
  });

  it('should return credit card cvv', () => {
    const { error, value } = Joi.validate('485', Joi.creditcard().cvv());
    expect(error).to.be.null;
    expect(value).to.be.a('string').and.be.equal('485');
  });

  it('should validate expiration month', () => {
    const { error } = Joi.validate('13', Joi.creditcard().expirationMonth());
    expect(error).to.exist.and.have.property('isJoi', true);
    expect(error).to.have.nested.property('details.[0].message', '"value" must be a valid expiration month');
  });

  it('should return expiration month', () => {
    const { error, value } = Joi.validate('2', Joi.creditcard().expirationMonth());
    expect(error).to.be.null;
    expect(value).to.be.a('string').and.be.equal('2');
  });

  it('should validate expiration year', () => {
    const { error } = Joi.validate('99', Joi.creditcard().expirationYear());
    expect(error).to.exist.and.have.property('isJoi', true);
    expect(error).to.have.nested.property('details.[0].message', '"value" must be a valid expiration year');
  });

  it('should return expiration year', () => {
    const { error, value } = Joi.validate('2020', Joi.creditcard().expirationYear());
    expect(error).to.be.null;
    expect(value).to.be.a('string').and.be.equal('2020');
  });

  it('should return expiration year', () => {
    const { error, value } = Joi.validate('20', Joi.creditcard().expirationYear());
    expect(error).to.be.null;
    expect(value).to.be.a('string').and.be.equal('20');
  });

  it('should validate postal code', () => {
    const { error } = Joi.validate('97', Joi.creditcard().postalCode());
    expect(error).to.exist.and.have.property('isJoi', true);
    expect(error).to.have.nested.property('details.[0].message', '"value" must be a valid postal code');
  });

  it('should return postal code', () => {
    const { error, value } = Joi.validate('9743', Joi.creditcard().postalCode());
    expect(error).to.be.null;
    expect(value).to.be.a('string').and.be.equal('9743');
  });
});
