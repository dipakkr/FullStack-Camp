import { last } from './index'

test('return last element of array', () => {
  let array = [7, 9, 0, -2]
  let expectedResult = -2
  expect(last(array)).toEqual(expectedResult)
})

test('return last 3 elements of array', () => {
  let array = [7, 9, 0, -2]
  let expectedResult = [9, 0, -2]
  expect(last(array, 3)).toEqual(expectedResult)
})

test('return last 5 elements of array', () => {
  let array = [7, 9, 0, -2]
  let expectedResult = [7, 9, 0, -2]
  expect(last(array, 5)).toEqual(expectedResult)
})
