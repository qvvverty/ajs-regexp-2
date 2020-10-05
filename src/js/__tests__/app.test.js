import { TestScheduler } from 'jest';
import formatPhoneNumber from '../app';

const phoneNumbers = [
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
  ['7 960 000 00 00', '+79600000000'],
];

test.each(phoneNumbers)('Expect .formatPhoneNumber to format "%s" to "%s"', (inputPhoneNumber, expectedPhoneNumber) => {
  expect(formatPhoneNumber(inputPhoneNumber)).toBe(expectedPhoneNumber);
});
