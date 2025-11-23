const _ = require("lodash")
const numbers = [33, 44, 55, 66, 23, 53, 23]

_.each(numbers, (number, i) => {
    console.log(number,i)
});