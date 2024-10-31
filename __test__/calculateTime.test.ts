import {calculateTime} from '../src/function';

describe('calculateTime', () => {
  test('should return result time for a future date', () => {
    const futureDate = new Date(Date.now() + 1000 * 60 * 60 * 24);
    const result = calculateTime(futureDate);
    expect(result).toMatch(/tomorrow|in 1 day/i);
  });

  test('should return result time for a past date', () => {
    const pastDate = new Date(Date.now() - 1000 * 60 * 60 * 24);
    const result = calculateTime(pastDate);
    expect(result).toMatch(/yesterday|1 day ago/i);
  });

  test('should return "now" for the current date', () => {
    const now = new Date();
    const result = calculateTime(now);
    expect(result).toMatch(/now/i);
  });

  test('should support different locales', () => {
    const futureDate = new Date(Date.now() + 1000 * 60 * 60 * 24);
    const resultEn = calculateTime(futureDate, 'en');
    const resultId = calculateTime(futureDate, 'id');

    expect(resultEn).toMatch(/tomorrow|in 1 day/i);
    expect(resultId).toMatch(/besok|dalam 1 hari/i);
  });

  test('should apply prefix and suffix correctly', () => {
    const futureDate = new Date(Date.now() + 1000 * 60 * 60 * 24);
    const resultWithPrefixSuffix = calculateTime(futureDate, 'en', 'In ', '!');
    expect(resultWithPrefixSuffix).toMatch(/^In .*!$/);

    const resultIdWithPrefixSuffix = calculateTime(
      futureDate,
      'id',
      'Dalam ',
      '!',
    );
    expect(resultIdWithPrefixSuffix).toMatch(/^Dalam .*!$/);
  });
});
