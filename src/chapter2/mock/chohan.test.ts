// seed関数をモック化してchohan関数をテスト
import { chohan } from './chohan';

jest.mock('./seed', () => {
  // seedをモック化する
  return {
    seed: jest
      .fn()
      .mockImplementationOnce(() => 2) // 1度目に偶数を返す
      .mockImplementationOnce(() => 1), // 2度目に奇数を返す
  };
});

describe('chohan', () => {
  it('returns 丁 when seed returns an even number like 2', () => {
    expect(chohan()).toBe('丁');
  });
  it('returns 半 when seed returns an even number like 1', () => {
    expect(chohan()).toBe('半');
  });
});
