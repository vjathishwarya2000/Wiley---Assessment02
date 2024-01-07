const { Builder, By, Key, until } = require('selenium-webdriver');

async function homePageLoadTest() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('https://onlinelibrary.wiley.com/');
        let title = await driver.getTitle();
        console.assert(title.includes('Wiley Online Library'), 'Test failed');
    } finally {
        await driver.quit();
    }
}

homePageLoadTest();
