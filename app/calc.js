"use strict";

function toTitleCase(str){
  return str = str.toLowerCase()
                  .replace(/(?:^|\s)\S/g, function(a){ return a.toUpperCase()});
};

module.exports.toTitleCase = toTitleCase;
