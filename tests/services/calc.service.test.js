import { describe, it, expect } from 'vitest';
import calcService from '../../src/services/calc.service.js';

describe('calcService', () => {

  describe('isEven', () => {

    it('should return true if the number is zero', () => {
      // Arange
      const nb = 0;
      const expected = true;

      // Action
      const actual = calcService.isEven(nb);

      // Assert
      expect(actual).toBe(expected);
    });

    it.each([
      [2],  // Test avec la la valeur 2
      [-2], // Test avec la la valeur -2
      [42]  // ...
    ])('should return true if the number is %i', (nb) => {
      // Action
      const actual = calcService.isEven(nb);
      // Assert
      expect(actual).toBe(true);
    });

    it.each([
      [3],
      [-13]
    ])('should return false if the number is %i', (nb) => {
      // Action
      const actual = calcService.isEven(nb);
      // Assert
      expect(actual).toBe(false);
    });

  });

  describe('add', () => {

    it.each([
      [19, 23, 42],
      [5, -9, -4]
    ])('should return $2 if the interger numbers are $0 and $1', (nb1, nb2, expected) => {
      // Action
      const actual = calcService.add(nb1, nb2);
      // Assert
      expect(actual).toBe(expected);
    });

    it.each([
      { nb1: 0.1, nb2: 0.2, expected: 0.3 },
      { nb1: 1, nb2: -0.01, expected: 0.99 }
    ])('should return $expected if the real numbers are $nb1 and $nb2', ({ nb1, nb2, expected }) => {
      // Action
      const actual = calcService.add(nb1, nb2);
      // Assert
      expect(actual).toBe(expected);
    });

  });

});