import { describe, it, expect } from 'vitest';
import {
  formatPhoneNumber,
  isValidPhoneNumber,
  isValidEmail,
  formatKva,
} from './formatters';

describe('formatters and validation utilities', () => {
  it('formats 10-digit phone numbers correctly', () => {
    expect(formatPhoneNumber('8977778811')).toBe('+91 89777 78811');
    expect(formatPhoneNumber('9014902266')).toBe('+91 90149 02266');
  });

  it('validates mobile phone numbers', () => {
    expect(isValidPhoneNumber('8977778811')).toBe(true);
    expect(isValidPhoneNumber('+91 89777 78811')).toBe(true);
    expect(isValidPhoneNumber('123')).toBe(false);
    expect(isValidPhoneNumber('')).toBe(false);
  });

  it('validates email addresses', () => {
    expect(isValidEmail('info@mrgenerators.com')).toBe(true);
    expect(isValidEmail('sales.dept@company.co.in')).toBe(true);
    expect(isValidEmail('invalid-email')).toBe(false);
    expect(isValidEmail('user@')).toBe(false);
  });

  it('formats kVA rating labels', () => {
    expect(formatKva(82.5)).toBe('82.5 kVA');
    expect(formatKva(500)).toBe('500 kVA');
  });
});
