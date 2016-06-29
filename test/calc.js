var calc = require('../app/calc.js');
var expect = require('chai').expect;

describe('Update sentence', function () {
  it('First letter of every word should be capitalized', function () {
    var result = calc.toTitleCase('SoMe teXt');
    expect(result).to.equal('Some Text');
  });

  it('first letter of every word is not capitalized', function () {
    var result = calc.toTitleCase('somE phraSe');
    expect(result).not.to.equal('somE phraSe');
  });
});
