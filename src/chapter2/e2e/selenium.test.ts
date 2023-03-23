import { WebDriver, Builder, By, Key, until, Capabilities } from 'selenium-webdriver';

jest.setTimeout(20000); // タイムアウトを20秒に延長

describe('e2e test with selenium and chromeDriver', () => {
  let chromeDriver: WebDriver;

  beforeAll(async () => {
    const chromeCapabilities = Capabilities.chrome();
    chromeCapabilities.set('goog:chromeOptions', {
      args: [
        '--headless',
        '--no-sandbox',
        '--disable-gpu',
        '--lang=en-US',
        // '--user-data-dir=./tmp_user_data', // --headlessを外す場合は有効化する
      ],
    });

    // Chromeを起動しWebDriverのインスタンスを取得
    chromeDriver = await new Builder().withCapabilities(chromeCapabilities).build();
  });

  afterAll(async () => {
    await chromeDriver.quit(); // Chromeを停止する
  });
});
