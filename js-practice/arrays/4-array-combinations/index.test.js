import { combineArrays } from './index'

test('combine colors and list elements -> 1', () => {
  let colors = [
    'White',
    'Blue',
    'Green',
    'Red',
    'Orange',
    'Violet',
    'Indigo',
    'Yellow',
  ]
  let list = ['th', 'st', 'nd', 'rd']
  let expectedResultArray = [
    '0th choice is White',
    '1st choice is Blue',
    '2nd choice is Green',
    '3rd choice is Red',
  ]
  expect(combineArrays(colors, list)).toEqual(expectedResultArray)
})

test('combine colors and list elements -> 2', () => {
  let colors = ['White', 'Blue']
  let list = ['th', 'st', 'nd', 'rd']
  let expectedResultArray = ['0th choice is White', '1st choice is Blue']
  expect(combineArrays(colors, list)).toEqual(expectedResultArray)
})
