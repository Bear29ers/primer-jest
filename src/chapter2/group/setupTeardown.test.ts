/*
テスト前後処理
テスト実行前に前後処理が必要な場合があり、初期化処理ではDBのセットアップや、外部の関数の一部モック化などがあり、
クリーンアップ処理では、テスト中の中間成果物やファイルの削除、データベースの停止、プロセスの終了などがある。
*/

let commonData;

beforeAll(() => {
  // beforeAllは全てのテスト関数の実行前に一度だけ実行される
  commonData = {
    username: 'jest_user',
    email: 'jest_user@example.com',
  };
});

test('Test case 1', () => {
  expect(commonData.username).toBe('jest_user');
});

test('Test case 2', () => {
  expect(commonData.email).toBe('jest_user@example.com');
});
