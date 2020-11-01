const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arrOfFirstLetters = [];
  if (members === null || members === undefined) {
    return false
  }

  for (let i = 0; i < members.length; i++) {

   if (typeof members[i] === 'string' && !(isNaN(members[i].replace(/\s+/g, '').charCodeAt(0))) && ((64 < members[i].replace(/\s+/g, '').charCodeAt(0) < 91) || 96 < members[i].replace(/\s+/g, '').charCodeAt(0) < 123)) {
     arrOfFirstLetters.push(members[i].replace(/\s+/g, '').charAt(0).toUpperCase())
   }
  }
  if ( arrOfFirstLetters.length === 0) {
    return false
  }

  return arrOfFirstLetters.sort().join('');
};
