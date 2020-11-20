const {Builder, By, Key, until} = require('selenium-webdriver');
(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.naver.com/');
    
    driver.takeScreenshot(1).then(
        function(image, err) {
            require('fs').writeFile('out.png', image, 'base64', function(err) {
                console.log(err);
            });
        }
    );
  //  await driver.findElement(By.name('q')).sendKeys('성공이다', Key.RETURN);
   // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    //await driver.quit();
  }
})();

