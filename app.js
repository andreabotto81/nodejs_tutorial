const _ = require('lodash')

const array = [1,[2,[3,[4]]]]
const simpleArray = _.flattenDeep(array)
console.log(simpleArray)