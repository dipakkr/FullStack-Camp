import { doesElemExist } from './index'

test('check if 5 exists in array', () => {
  let array = [2, 5, 9, 6]
  let elem = 5
  let expectedResult = true
  expect(doesElemExist(array, elem)).toBe(expectedResult)
})

test('check if 10 exists in array', () => {
  let array = [2, 5, 9, 6]
  let elem = 10
  let expectedResult = false
  expect(doesElemExist(array, elem)).toBe(expectedResult)
})
