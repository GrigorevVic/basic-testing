// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

interface Data {
  a: number;
  b: number;
  action: Action;
  expected: number;
}

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 10, b: 5, action: Action.Subtract, expected: 5 },
  { a: 100, b: 10, action: Action.Subtract, expected: 90 },
  { a: 666, b: 6, action: Action.Subtract, expected: 660 },
  { a: 25, b: 5, action: Action.Divide, expected: 5 },
  { a: 36, b: 6, action: Action.Divide, expected: 6 },
  { a: 81, b: 9, action: Action.Divide, expected: 9 },
  { a: 6, b: 6, action: Action.Multiply, expected: 36 },
  { a: 7, b: 7, action: Action.Multiply, expected: 49 },
  { a: 9, b: 9, action: Action.Multiply, expected: 81 },
  { a: 2, b: 4, action: Action.Exponentiate, expected: 16 },
  { a: 2, b: 2, action: Action.Exponentiate, expected: 4 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
];

describe('simpleCalculator', () => {
  test.each(testCases)('should blah-blah', (data: Data) => {
    const result = simpleCalculator(data);
    expect(result).toEqual(data.expected);
  });
});
