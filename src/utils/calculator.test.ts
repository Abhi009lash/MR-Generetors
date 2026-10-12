import { describe, it, expect } from 'vitest';
import {
  calculateRequiredKva,
  getNearestStandardKva,
} from './calculator';

describe('capacity calculation engine', () => {
  it('returns 0 when load is 0 or negative', () => {
    expect(calculateRequiredKva({ connectedLoadKw: 0 })).toBe(0);
    expect(calculateRequiredKva({ connectedLoadKw: -50 })).toBe(0);
  });

  it('calculates recommended kVA with default power factor and margin', () => {
    // 100 kW * 0.75 diversity = 75 kW / 0.8 PF = 93.75 kVA * 1.20 future margin = 112.5 -> 113 kVA
    const result = calculateRequiredKva({ connectedLoadKw: 100 });
    expect(result).toBe(113);
  });

  it('matches nearest standard industrial rating', () => {
    expect(getNearestStandardKva(55)).toBe(57);
    expect(getNearestStandardKva(78)).toBe(82.5);
    expect(getNearestStandardKva(113)).toBe(125);
    expect(getNearestStandardKva(450)).toBe(500);
    expect(getNearestStandardKva(2500)).toBe(2000);
  });
});
