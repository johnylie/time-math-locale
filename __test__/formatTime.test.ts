import {formatTime} from '../src/function';

describe('formatTime', () => {
  test('should return "sekarang" for current time', () => {
    const now = new Date();
    expect(formatTime(now, 'id')).toBe('sekarang');
  });

  test('should return "X detik dari sekarang" for future time', () => {
    const futureDate = new Date(Date.now() + 30000);
    expect(formatTime(futureDate, 'id')).toMatch(/^\d+ detik dari sekarang$/);
  });

  test('should return "X detik yang lalu" for past time', () => {
    const pastDate = new Date(Date.now() - 30000);
    expect(formatTime(pastDate, 'id')).toMatch(/^\d+ detik yang lalu$/);
  });

  test('should return "X menit dari sekarang" for future time in minutes', () => {
    const futureDate = new Date(Date.now() + 5 * 60 * 1000);
    expect(formatTime(futureDate, 'id')).toMatch(/^\d+ menit dari sekarang$/);
  });

  test('should return "X menit yang lalu" for past time in minutes', () => {
    const pastDate = new Date(Date.now() - 5 * 60 * 1000);
    expect(formatTime(pastDate, 'id')).toMatch(/^\d+ menit yang lalu$/);
  });

  test('should return "X jam dari sekarang" for future time in hours', () => {
    const futureDate = new Date(Date.now() + 3 * 60 * 60 * 1000);
    expect(formatTime(futureDate, 'id')).toMatch(/^\d+ jam dari sekarang$/);
  });

  test('should return "X jam yang lalu" for past time in hours', () => {
    const pastDate = new Date(Date.now() - 3 * 60 * 60 * 1000);
    expect(formatTime(pastDate, 'id')).toMatch(/^\d+ jam yang lalu$/);
  });

  test('should return "X hari dari sekarang" for future time in days', () => {
    const futureDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
    expect(formatTime(futureDate, 'id')).toMatch(/^\d+ hari dari sekarang$/);
  });

  test('should return "X hari yang lalu" for past time in days', () => {
    const pastDate = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
    expect(formatTime(pastDate, 'id')).toMatch(/^\d+ hari yang lalu$/);
  });
});
