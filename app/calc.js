'use strict';

/**
 * Calc module
 * @module app/calc
*/

/**
  * Transform the sentence to title case
  * @param {string} str - Sentence
  * @return {string} Title case an every word
  */
exports.toTitleCase = function (str) {
  return str.toLowerCase()
            .replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
};
