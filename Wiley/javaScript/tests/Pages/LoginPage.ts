import { type Page,type Locator, expect } from '@playwright/test';


class LoginPage{
   private page: Page;
  /*  private loginButton: Locator;
    private username: Locator;
    private password: Locator;
    private loginButton2: Locator; */

   constructor(page: Page){
    this.page = page;
  /*  this.loginButton= page.getByText('Login / Register');
    this.username=page.getByLabel('Forgot your password?').getByPlaceholder('Enter your email');
    this.password=page.getByPlaceholder('Enter your password'); */
   }

async open(){
    const url= "wiley"
    await this.page.goto('https://onlinelibrary.wiley.com/');
}   

async fillEmail(email: string){
 //   await this.username.fill(email);
}

async fillPassword(password: string) {
 //   await this.password.fill(password);
}

async login(email: string,password: string){
  //  await this.loginButton.click();
  //  await this.username.fill(email);
 //   await this.password.fill(password);
 //   await this.loginButton2.click();
}

}

export default LoginPage;