const { expect } = require('@playwright/test');
const { username } = require('../utils/constants');

class LoginPage{

    constructor(page){

        this.page = page;

        this.signInBtn = page.locator(".signInBtn");

        this.errorMsg = page.locator(".error");  

        this.usernameField = page.locator("#inputUsername");

        this.passwordField = page.getByPlaceholder("Password");

        this.forgotYourPass = page.getByText("Forgot your password?");

        this.rstLogin = page.locator(".reset-pwd-btn");

        this.passwordInfo = page.locator(".infoMsg");

        this.goToLogin = page.locator(".go-to-login-btn");

        
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

    async fillUsername(username){
        await this.usernameField.fill(username); 
    }

    async fillPassword(password){
        await this.passwordField.fill(password);
    }

    async clickForgotYourPass(){
        await this.forgotYourPass.click();
    }

    async clickRstLogin(){
        await this.rstLogin.click();
    }

    async extractPasswordFromInfo(){

        let info = await this.passwordInfo.textContent()
        let infoArr = info.split("'");
        return infoArr[1];  
    }

    async clickGoToLogin(){
        await this.goToLogin.click();
    }

    // async pagePause(){
    //     await this.page.pause();
    // }

}

module.exports = {LoginPage};