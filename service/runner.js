const calc = require('./calculator')

const run = (args) => {
    if (!args || args.length != 2) {
        throw new Error('Invalid arguments passed')
    }
    const range = args.map(n => parseInt(n))
    if (isNaN(range[0]) || isNaN(range[1])) {
        throw new Error('Invalid numbers passed')
    }
    if (range[0] >= range[1]) {
        throw new Error('Invalid range passed')
    }
    const numbers = []
    for (let i = range[0]; i <= range[1]; i++) {
        numbers.push(i)
    }
    return numbers.map(calc.getWord).join(' ')
}
module.exports = { run }