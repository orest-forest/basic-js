const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

    try {
        var month = date.getMonth();
    } catch (err) {
        if (arguments.length === 0) {
            return 'Unable to determine the time of year!'
        } else {
            throw err
        }
    }

    if (date.toString.toString() !== Date.toString.toString()) {
        throw new Error('Alert!')
    }

    if ((1 < month) && (month < 5)) {
        return 'spring'
    } else if ((4 < month) && (month < 8)) {
        return 'summer'
    } else if ((7 < month) && (month < 11)) {
        return 'autumn'
    } else {
        return 'winter'
    }
    return false
};
