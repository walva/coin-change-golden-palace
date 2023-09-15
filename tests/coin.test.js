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
test('2', () => {
    const expected = { two: 1, five: 0, ten: 0}
    expect(change(2)).toStrictEqual(expected)
})
test('4', () => {
    const expected = { two: 2, five: 0, ten: 0}
    expect(change(4)).toStrictEqual(expected)
})
test('6', () => {
    const expected = { two: 3, five: 0, ten: 0}
    expect(change(6)).toStrictEqual(expected)
})
test('8', () => {
    const expected = { two: 4, five: 0, ten: 0}
    expect(change(8)).toStrictEqual(expected)
})
test('10', () => {
    const expected = { two: 0, five: 0, ten: 1}
    expect(change(10)).toStrictEqual(expected)
})
test('11', () => {
    const expected = { two: 3, five: 1, ten: 0}
    expect(change(11)).toStrictEqual(expected)
})
test('13', () => {
    const expected = { two: 4, five: 1, ten: 0}
    expect(change(13)).toStrictEqual(expected)
})
test('21', () => {
    const expected = { two: 3, five: 1, ten: 1}
    expect(change(21)).toStrictEqual(expected)
})
test('23', () => {
    const expected = { two: 4, five: 1, ten: 1}
    expect(change(23)).toStrictEqual(expected)
})
test('31', () => {
    const expected = { two: 3, five: 1, ten: 2}
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

