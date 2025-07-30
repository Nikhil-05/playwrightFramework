class loginPagePractice{

    constructor(page){
        this.page = page; 
        this.usernameField = page.locator("#username");
        this.passwordField = page.locator("#password");
        this.submitBtn = page.locator("#submit");
    }

    async openLoginPracPage(url){
        await this.page.goto(url);
    }

    async performLogin(username,password){
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.submitBtn.click();
    }
}

module.exports = {loginPagePractice}