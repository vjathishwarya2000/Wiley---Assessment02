const { Builder, By, Key, until } = require('selenium-webdriver');

async function loginFunctionalityTest() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('https://onlinelibrary.wiley.com/');
        await driver.findElement(By.linkText('Login')).click();
        await driver.findElement(By.name('username')).sendKeys('test_username');
        await driver.findElement(By.name('password')).sendKeys('test_password', Key.RETURN);
        let pageSource = await driver.getPageSource();
        console.assert(pageSource.includes('My Account'), 'Test failed');
    } finally {
        await driver.quit();
    }
}

loginFunctionalityTest();
