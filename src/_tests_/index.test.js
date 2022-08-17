import { largestNumber, evenOddNumber, getPercents } from '../index.js';

describe ('тесты для функции largestNumber', () => {
  it('должен вернуть наибольшее число', () => {
    expect(largestNumber(1,2,3)).toBe('Наибольшее число 3');
    expect(largestNumber(1,3,2)).toBe('Наибольшее число 3');
    expect(largestNumber(2,3,1)).toBe('Наибольшее число 3');
    expect(largestNumber(2,1,3)).toBe('Наибольшее число 3');
    expect(largestNumber(3,1,2)).toBe('Наибольшее число 3');
    expect(largestNumber(3,2,1)).toBe('Наибольшее число 3');
  }); 
});

describe ('тесты для функции evenOddNumber', () => {
  it('должен правильно определить четное или нечетное число', () => {
    expect(evenOddNumber(9)).toBe('Число 9 нечетное!');
    expect(evenOddNumber(6)).toBe('Число 6 четное!');
  });
});

describe ('тест для функции getPercents', () => {
  it('должен вернуть percent процентов от number', () => {
    expect(getPercents(30, 200)).toBe(60);
  });
});