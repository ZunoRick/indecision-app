import { describe, expect, test } from 'vitest';
import { addArray, sum } from '../../src/helpers/sum';

describe('Add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    const a = 1;
    const b = 2;

    const result = sum(a, b);

    expect(result).toBe(a + b);
  });
});

describe('addArray function', () => {
  test('Debe sumar los elementos del array', () => {
    const arr = [1, 2, 3];

    const result = addArray(arr);

    expect(result).toBe(6);
  });

  test('Debe retornar 0 si el array es vacío', () => {
    const arr = [];

    const result = addArray(arr);

    expect(result).toBe(0);
  });
});
