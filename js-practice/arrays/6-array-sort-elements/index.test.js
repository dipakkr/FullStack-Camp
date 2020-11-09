import { sortByKeys } from './index'

test('sort array of objects by title and id', () => {
  let array = [
    { author: 'Bill Gates', title: 'The Road Ahead', id: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', id: 4264 },
    {
      author: 'Suzanne Collins',
      title: 'Mockingjay: The Hunger Games',
      id: 3245,
    },
  ]
  let expectedResultArray = [
    {
      author: 'Suzanne Collins',
      title: 'Mockingjay: The Hunger Games',
      id: 3245,
    },
    { author: 'Bill Gates', title: 'The Road Ahead', id: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', id: 4264 },
  ]
  expect(sortByKeys(array, 'title', 'id')).toEqual(expectedResultArray)
})
