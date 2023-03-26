// axiosをモック化してsearch関数をテスト
import axios from 'axios';
import Users from './users';

jest.mock('axios');

test('should fetch all users', async () => {
  const users = [{ name: 'Bob' }];
  const res = { data: users };

  (axios as jest.Mocked<typeof axios>).get.mockResolvedValue(res);
  // axios.get.mockImplementation(() => Promise.resolve(res)) // 上記のmockResolvedValueと同じ設定

  await expect(Users.search()).resolves.toEqual(users);
});
