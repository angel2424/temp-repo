// CommonJS, every file is a module (by default)
// Modules -Encapsulated Code (only share minimum)
const {john, peter} = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative')
require('./7-mind-grenade')


sayHi(john)
sayHi(peter)