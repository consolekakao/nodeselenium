const {Builder, By, Key, until} = require('selenium-webdriver');
(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.naver.com/');  //URL 커넥션
    
    driver.takeScreenshot().then(  //스크린샷
        function(image, err) {
            require('fs').writeFile('out.png', image, 'base64', function(err) { //스크린샷 작성한거 파일로 저장
                console.log(err);
            });
        }
    );
  //  await driver.findElement(By.name('q')).sendKeys('성공이다', Key.RETURN);  //q라는 name을 가진 엘리먼트에 성공이다 메시지 쓰고 엔터
   // await driver.wait(until.titleIs('webdriver - Google Search'), 1000); 해당하는 타이틀일때 1초 기다림.
  } finally {
    //await driver.quit();  //브라우저 닫기
  }
})();

