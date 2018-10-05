import Test from './test.js'

export default class {
  constructor(name) {
    this.name = name
  }

  hiall() {
    const test1 = new Test("David")
    const test2 = new Test("Davila")
    const test3 = new Test("Arroyo")
    test1.hi()
    test2.hi()
    test3.hi()
  }
}
