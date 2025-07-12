const { expect } = require('@playwright/test');

class LoginPage{

    constructor(page){

        this.page = page;

        this.signInBtn = page.locator(".signInBtn");

        this.errorMsg = page.locator(".error");  
    }

    async openLoginPage(url){
       
        await this.page.goto(url);
    
    }

    async clickSignIn(){

        await this.signInBtn.click();
    }

    async verifyError(expectedText){
        await expect(this.errorMsg).toHaveText(expectedText);
        await expect(this.errorMsg).toBeVisible();
    }   
}

module.exports = {LoginPage};