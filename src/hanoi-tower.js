const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let speed = 3600 / turnsSpeed ;
    const turns = Math.pow(2, disksNumber) - 1;

    return {
        turns,
        seconds: Math.floor(turns * speed),
    }
};
