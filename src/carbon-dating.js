const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {

  if (+sampleActivity  !== Number || +sampleActivity < 0) {
    return false
  }

  let k = (Math.log(MODERN_ACTIVITY / sampleActivity))/(HALF_LIFE_PERIOD)
  let result = (Math.log(MODERN_ACTIVITY / sampleActivity))/(k)

    return result;
};
