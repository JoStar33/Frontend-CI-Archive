import { describe, expect, it } from 'vitest';
import { mapObject } from './helper';

describe('Helper 함수 테스트 - mapObject', () => {
  it('객체내에 숫자는 0, 스트링은 jostar로 반환되는지?', () => {
    const testObject = {
      a: 10000,
      b: 'movie',
      c: 300000,
    };
    const mappedObject = mapObject(testObject, (value) => {
      if (typeof value === 'string') return 'jostar';
      if (typeof value === 'number') return 0;
      return value;
    });

    expect(mappedObject.a).toBe(0);
  });
});
