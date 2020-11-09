import { removeDuplicates } from './index'

test('remove duplicates -> 1', () => {
  let array = [1, 4, 5, 30, 2, 22, 22, 30]
  let expectedResultArray = [1, 4, 5, 30, 2, 22]
  expect(removeDuplicates(array)).toEqual(expectedResultArray)
})

test('remove duplicates -> 2', () => {
  let array = ['frontbench', 'FRontbench', 'web', 5, true, false, 'WEB']
  let expectedResultArray = ['frontbench', 'web', 5, true, false]
  expect(removeDuplicates(array)).toEqual(expectedResultArray)
})
