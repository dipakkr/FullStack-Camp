import { join } from './index'

test('join array elements with comma i.e ,', () => {
  let array = ['Red', 'Green', 'White', 'Black']
  let str = ','
  let expectedResult = 'Red,Green,White,Black'
  expect(join(array, str)).toEqual(expectedResult)
})

test('join array elements with plus i.e +', () => {
  let array = ['Red', 'Green', 'White', 'Black']
  let str = '+'
  let expectedResult = 'Red+Green+White+Black'
  expect(join(array, str)).toEqual(expectedResult)
})

test('join array elements with space i.e  ', () => {
  let array = ['Red', 'Green', 'White', 'Black']
  let str = ' '
  let expectedResult = 'Red Green White Black'
  expect(join(array, str)).toEqual(expectedResult)
})
