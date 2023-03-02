test('testを利用してテストケースを作成する', () => {
  const result = true; // テスト結果
  const expected = true; // 期待値
  expect(result).toBe(expected); // expect関数とtoBe関数を利用して結果を評価する
});

it('itを利用してテストケースを作成する', () => {
  expect(true).toBe(true);
});
