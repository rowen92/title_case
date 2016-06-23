'use strict';
/**
 * Calc module
 * @module app/calc
*/
/**
  * Transform the sentence to title case
  * @constructor
  * @param {string} str - Sentence
  * @return {string} Title case an every word
*/
function toTitleCase(str) {
  return str = str.toLowerCase()
                  .replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
};

module.exports.toTitleCase = toTitleCase;
