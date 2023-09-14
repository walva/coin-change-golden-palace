import { change } from '../index.js'

test('should fail if the amount is too low and in this case the amount is 3 being the maximal amount', () => {
    expect(change(1)).toBeFalsy()
    expect(change(2)).toBeFalsy()
    expect(change(3)).toBeFalsy()
})
test('should pass if the amount is 31 with the return object being {five : 1 , ten : 2 , two : 3} ', () => {
    const expected = { five: 1, ten: 2, two: 3 }
    expect(change(31)).toStrictEqual(expected)
})
test('should pass if the amount is 9007199254740991 with the return object being {five : 1 , ten : 900719925474098 , two : 3} ', () => {
    const expected = { five: 1, ten: 900719925474098, two: 3 }
    expect(change(9007199254740991)).toStrictEqual(expected)
})
test('should pass if the amount is 10 with the return object being {five : 1 , ten : 1 , two : 0} ', () => {
    const expected = { five: 0, ten: 1, two: 0 }
    expect(change(10)).toStrictEqual(expected)
})

