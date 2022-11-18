const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

writeFileSync('./content/third.txt', 'Hello World')

writeFileSync('./content/third.txt', ', Welcome!', {flag: 'a'})


console.log(first)
console.log(second)