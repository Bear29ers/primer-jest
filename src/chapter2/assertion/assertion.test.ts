// プリミティブの評価
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

// オブジェクトの評価
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

// toBe関数
// can1とcan2は同一のインスタンスの参照を持っていないため、異なると評価される
test('can1 and can2 are not the exact same instance', () => {
  expect(can1).not.toBe(can2);
});

// can2とcan3は等しいと評価される
test('can2 and can3 are the same instance', () => {
  expect(can2).toBe(can3);
});

// toEqual関数
// can1とcan2は再帰的に評価され、同じプロパティ・値を持っているため、等しいと評価される
test('can1 and can2 have the same properties', () => {
  expect(can1).toEqual(can2);
});

// can2とcan4は等しいと評価される
test('can2 and can4 have the same properties', () => {
  expect(can2).toEqual(can4);
});

// toStrictEqual関数
// 生成元クラスを考慮する以外のtoEqualとtoStrictEqualの違い
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

// can2とcan4はオブジェクトの生成元クラスが異なるため、等しくないと評価される
test('can2 and can4 are different class', () => {
  expect(can2).not.toStrictEqual(can4);
});

// toBeTruthyとtoBeFalsyを利用した値の評価
test('"0" should be Truthy', () => {
  expect('0').toBeTruthy();
});

test('0 should be Falsy', () => {
  expect(0).toBeFalsy();
});

// null、undefinedの評価
test('should be null', () => {
  expect(null).toBe(null);
  expect(null).toBeNull();
});

test('should be undefined', () => {
  expect(undefined).toBe(undefined);
  expect(undefined).toBeUndefined();
})

test('should be null or undefined', () => {
  let a; // undefined
  expect(a == null).toBe(true);
  a = null; // null
  expect(a == null).toBe(true);
})
