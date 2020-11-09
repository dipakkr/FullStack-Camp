import { insertElemAt, removeElemAt } from './index'

test('insert 900 to end of array', () => {
  let array = [1, 2, 3, 4]
  let elem = 900
  let index = array.length
  let expectedResultArray = [1, 2, 3, 4, 900]
  expect(insertElemAt(array, index, elem)).toEqual(expectedResultArray)
})

test('remove 3 from array', () => {
  let array = [1, 2, 3, 4]
  let index = array.indexOf(3)
  let expectedResultArray = [1, 2, 4]
  expect(removeElemAt(array, index)).toEqual(expectedResultArray)
})
