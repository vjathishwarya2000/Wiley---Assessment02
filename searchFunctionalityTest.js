const { Builder, By, Key, until } = require('selenium-webdriver');

async function searchFunctionalityTest() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('https://onlinelibrary.wiley.com/');
        await driver.findElement(By.name('queryString')).sendKeys('test search term', Key.RETURN);
        let pageSource = await driver.getPageSource();
        console.assert(pageSource.includes('test search term'), 'Test failed');
    } finally {
        await driver.quit();
    }
}

searchFunctionalityTest();
