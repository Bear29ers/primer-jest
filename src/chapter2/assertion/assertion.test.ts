// ---------------------------------
// testとitを利用したテストケースの作成
// ---------------------------------

import { exportSpecifier } from '@babel/types';

test('testを利用してテストケースを作成する', () => {
  const result = true; // テスト結果
  const expected = true; // 期待値
  expect(result).toBe(expected); // expect関数とtoBe関数を利用して結果を評価する
});

it('itを利用してテストケースを作成する', () => {
  expect(true).toBe(true);
});

// ---------------------------------
// プリミティブな値の評価
// ---------------------------------

const numberValue = 0;
const stringValue = '文字列';
const booleanValue = true;

// toBeでプリミティブな値を評価
test('evaluates as equal for all the same primitive values when using the toBe function', () => {
  expect(numberValue).toBe(0);
  expect(stringValue).toBe('文字列');
  expect(booleanValue).toBe(true);
});

// toEqualでプリミティブな値を評価
test('evaluates as equal for all the same primitive values when using the toEqual function', () => {
  expect(numberValue).toEqual(0);
  expect(stringValue).toEqual('文字列');
  expect(booleanValue).toEqual(true);
});

// toStrictEqualでプリミティブな値を評価
test('evaluates as equal for all the same primitive values when using the toStrictEqual function', () => {
  expect(numberValue).toStrictEqual(0);
  expect(stringValue).toStrictEqual('文字列');
  expect(booleanValue).toStrictEqual(true);
});

// ---------------------------------
// オブジェクトの評価
// ---------------------------------

// canの型を定義
type CanType = {
  flavor: string;
  ounces: number;
};

// can1とcan2はそれぞれ同じプロパティと同じ値を持つ
const can1: CanType = {
  flavor: 'grapefruit',
  ounces: 12,
};

const can2: CanType = {
  flavor: 'grapefruit',
  ounces: 12,
};

// can3はcan2の参照を持つ
const can3: CanType = can2;

// Canクラス
class Can {
  flavor: string;
  ounces: number;

  constructor({ flavor, ounces }: CanType) {
    this.flavor = flavor;
    this.ounces = ounces;
  }
}

// can4はCanクラスで生成されたオブジェクトでcan1、can2と同じプロパティを持つ
const can4 = new Can({
  flavor: 'grapefruit',
  ounces: 12,
});

// ---------------------------------
// toBe関数を利用したオブジェクトの評価
// ---------------------------------

// can1とcan2は同一のインスタンスの参照を持っていないため、異なると評価される
test('can1 and can2 are not the exact same instance', () => {
  expect(can1).not.toBe(can2);
});

// can2とcan3は等しいと評価される
test('can2 and can3 are the same instance', () => {
  expect(can2).toBe(can3);
});

// ---------------------------------
// toEqual関数を利用したオブジェクトの評価
// ---------------------------------

// can1とcan2は再帰的に評価され、同じプロパティ・値を持っているため、等しいと評価される
test('can1 and can2 have the same properties', () => {
  expect(can1).toEqual(can2);
});

// can2とcan4は等しいと評価される
test('can2 and can4 have the same properties', () => {
  expect(can2).toEqual(can4);
});

// ---------------------------------
// 生成元のクラスを考慮する以外のtoStrictEqualとtoEqualの違い
// ---------------------------------

// toEqualとtoStrictEqualの違い
test('differences between toEqual and toStrictEqual', () => {
  // undefinedを持つプロパティはtoEqualでは無視される
  expect({ foo: NaN, bar: undefined }).toEqual({ foo: NaN });

  // undefinedを持つプロパティはtoStrictEqualでは一致しないと評価する
  expect({ foo: NaN, bar: undefined }).not.toStrictEqual({ foo: NaN });

  // undefinedやemptyを持つArrayはtoEqualでは同じと評価する
  expect([, undefined, 1]).toEqual([undefined, , 1]); // eslint-disable-line no-sparse-arrays

  // undefinedやemptyを持つArrayはtoStrictEqualでは一致しないと評価される
  expect([, undefined, 1]).not.toStrictEqual([undefined, , 1]); // eslint-disable-line no-sparse-arrays
});

// ---------------------------------
// toStrictEqualを利用したオブジェクトの評価
// ---------------------------------

// can2とcan4はオブジェクトの生成元クラスが異なるため、等しくないと評価される
test('can2 and can4 are different class', () => {
  expect(can2).not.toStrictEqual(can4);
});

// ---------------------------------
// toBeTruthyとtoBeFalsyを利用した値の評価
// ---------------------------------

test('"0" should be Truthy', () => {
  expect('0').toBeTruthy();
});

test('0 should be Falsy', () => {
  expect(0).toBeFalsy();
});

// ---------------------------------
// null、undefinedの評価
// ---------------------------------

test('should be null', () => {
  expect(null).toBe(null);
  expect(null).toBeNull();
});

test('should be undefined', () => {
  expect(undefined).toBe(undefined);
  expect(undefined).toBeUndefined();
});

test('should be null or undefined', () => {
  // undefined
  let a; // eslint-disable-line prefer-const
  expect(a == null).toBe(true);
  a = null; // null
  expect(a == null).toBe(true);
});

// ---------------------------------
// 曖昧な結果の評価
// ---------------------------------

const hoge = () => ({ hoge: 'hogehoge', number: 0 });

test('hoge return anything', () => {
  // 期待値やnullやundefinedではないことを評価
  expect(hoge()).toEqual(expect.anything());

  // 期待値の一部のプロパティがnullやundefinedではないことを評価
  expect(hoge()).toEqual({
    hoge: 'hogehoge',
    number: expect.anything(),
  });

  // 期待値の一部のプロパティnumberがNumber型であることを評価
  expect(hoge()).toEqual({
    hoge: 'hogehoge',
    number: expect.any(Number),
  });
});

// ---------------------------------
// 小数の計算で意図した結果にならない例
// ---------------------------------

// 小数の計算で意図した結果にならない → NumberがIEEE 754 倍精度浮動小数点数であるため
test('0.1 + 0.2 not returns 0.3', () => {
  expect(0.1 + 0.2).not.toBe(0.3);
});

// ---------------------------------
// 浮動小数点数の誤差を許容した数値の評価
// ---------------------------------

test('0.1 + 0.2 returns 0.3', () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3); // デフォルトでは小数点以下2桁までを評価する
});

test('0.301 and 0.3 are different when numDigits is 3', () => {
  expect(0.3 + 0.001).not.toBeCloseTo(0.3, 3); // 小数点以下3桁目まで評価する場合、0.3と0.301は異なると評価する
});

// ---------------------------------
// 数値の比較
// ---------------------------------

// toBeGreaterThan
test('0.1 + 0.2 is greater than 0.3', () => {
  expect(0.1 + 0.2).toBeGreaterThan(0.3);
  expect(0.1 + 0.2 > 0.3).toBe(true);
});

// toBeGreaterThanOrEqual
test('0.1 + 0.2 is greater than 0.3 or 0.1 + 0.2 equals to 0.30000000000000004', () => {
  expect(0.1 + 0.2).toBeGreaterThanOrEqual(0.3);
  expect(0.1 + 0.2).toBeGreaterThanOrEqual(0.30000000000000004);
  expect(0.1 + 0.2 >= 0.3).toBe(true);
  expect(0.1 + 0.2 >= 0.30000000000000004).toBe(true);
});

// toBeLessThan
test('0.1 + 0.2 is less than 0.4', () => {
  expect(0.1 + 0.2).toBeLessThan(0.4);
  expect(0.1 + 0.2 < 0.4).toBe(true);
});

// toBeLessThanOrEqual
test('0.1 + 0.2 is less than 0.4 or 0.1 + 0.2 equals to 0.30000000000000004', () => {
  expect(0.1 + 0.2).toBeLessThanOrEqual(0.4);
  expect(0.1 + 0.2).toBeLessThanOrEqual(0.30000000000000004);
  expect(0.1 + 0.2 <= 0.4).toBe(true);
  expect(0.1 + 0.2 <= 0.30000000000000004).toBe(true);
});

// ---------------------------------
// 文字列の部分一致（正規表現）
// ---------------------------------

const log1 = '10.0.0.3 - - [30/Jan/2023:12:20:12 +0000] "GET / HTTP/1.1" 200 615 "-" "curl/7.74.0" "-"';
const log2 = '10.0.0.11 - - [30/Jan/2023:12:20:40 +0000] "GET / HTTP/1.1" 200 615 "-" "curl/7.74.0" "-"';
const log3 = '10.0.0.99 - - [30/Jan/2023:12:20:40 +0000] "GET / HTTP/1.1" 200 615 "-" "curl/7.74.0" "-"';

test('contains 10.0.0.3 IP address', () => {
  expect(log1).toEqual(expect.stringContaining('10.0.0.3'));
});

test('contain IP address between 10.0.0.0 and 10.0.0.99', () => {
  // 10.0.0.0から10.0.0.99までのIPアドレスにマッチするための正規表現
  const expected = /^10.0.0.([1-9]?[0-9]) /;

  // expect.stringMaching
  expect(log1).toEqual(expect.stringMatching(expected));
  expect(log2).toEqual(expect.stringMatching(expected));
  expect(log3).toEqual(expect.stringMatching(expected));

  // toMatch
  expect(log1).toMatch(expected);
  expect(log2).toMatch(expected);
  expect(log3).toMatch(expected);

  // toBe
  const regex = new RegExp(expected);
  expect(regex.test(log1)).toBe(true);
  expect(regex.test(log2)).toBe(true);
  expect(regex.test(log3)).toBe(true);
});
