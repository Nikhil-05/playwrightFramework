const {LoginPage} = require('./LoginPage');

const {DashboardPage} = require('./DashboardPage');

const {UiElementPage} = require('./UiElementPage');

class PageObjectManager{
    constructor(page){

        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.uiElementPage = new UiElementPage(this.page);
    }

    getLoginPage(){
        return this.loginPage;   
    }

    getDashboardPage(){
        return this.dashboardPage;
    }

    getUiElementPage(){
        return this.uiElementPage;
    }
}

module.exports = {PageObjectManager};