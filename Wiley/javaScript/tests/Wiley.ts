import { test, chromium, Browser,expect } from '@playwright/test';
import LoginPage from './Pages/LoginPage' ;
import { Page } from '@playwright/test';


const searchField='//input[@id="searchField1"]';
const searchIcon ='//button[@type="submit"]';
const JavaSearchResult ='//a[text()="Ten Websites for "]';
const username1 = "vsjathu2000@gmail.com.com";
const password1 = "Xasdi@789";
let loginPage: LoginPage;


test.beforeEach('Login', async ({ page }) => {
// await page.goto(Pages.loginPage);
// loginPage = new LoginPage(page);
 //loginPage.login(username1,password1)


 // navigating to the url
 await page.goto('https://onlinelibrary.wiley.com/');
 // click on login button
 await page.getByText('Login / Register').click();
 // entering Username and password
 const username =await page.getByLabel('Forgot your password?').getByPlaceholder('Enter your email')
 const password =await page.getByPlaceholder('Enter your password')
 await username?.type("vsjathu2000@gmail.com.com");
 await password?.type("Xasdi@789");
 // Click on login button
 await page.click("input[name='submitButton']") 

});
// navigate to the search area
test('search1', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');
  //type "Java" in the search field
  await page.locator(searchField).pressSequentially("Java");
  // click on search icon
  await page.locator(searchIcon).click();
//  await expect(page.locator(JavaSearchResult)).toHaveText(JavaSearchResult,{timeout:5000});
 // https://onlinelibrary.wiley.com/action/doSearch?AllField=java 
});
// due to security issue can't able to continue seach from automation script so splitted in to second part
test('Search2', async ({ page }) => { 
  await page.goto('https://onlinelibrary.wiley.com/action/doSearch?AllField=java');
  //assert that search result is available
  await expect(page.locator(JavaSearchResult)).toHaveText('Ten Websites for Java',{timeout:5000});
});