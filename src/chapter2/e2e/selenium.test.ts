import { WebDriver, Builder, By, Key, until, Capabilities } from 'selenium-webdriver';

jest.setTimeout(20000); // タイムアウトを20秒に延長

// chromedriverをセットアップ
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

  // chromedriverを利用してgoogle.comの検索
  it('a search keyword will be on the page title in google.com', async () => {
    // google.comにアクセス
    await chromeDriver.get('https://www.google.com/ncr');
    // 検索ボックスの要素を探し、`webdriver`を入力し、Enterキーを入力
    await chromeDriver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    // ページのタイトルが`webdriver - Google Search`であることを確認
    const results = await chromeDriver.wait(until.titleIs('webdriver - Google Search'), 10000);
    expect(results).toBe(true);
  });

  // geckodriverをセットアップ
  describe('e2e test with selenium and geckoDriver', () => {
    let geckoDriver: WebDriver;

    beforeAll(async () => {
      const fireFoxCapabilities = Capabilities.firefox();
      fireFoxCapabilities.set('moz:firefoxOptions', {
        args: ['--headless'],
      });

      // Firefoxを起動しWebDriverのインスタンスを取得
      geckoDriver = await new Builder().withCapabilities(fireFoxCapabilities).build();
    });

    afterAll(async () => {
      await geckoDriver.quit();
    });
  });
});
