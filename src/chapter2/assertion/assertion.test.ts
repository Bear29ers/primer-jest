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
