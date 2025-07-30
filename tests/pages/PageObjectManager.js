const {LoginPage} = require('./LoginPage');

const {DashboardPage} = require('./DashboardPage');

const {UiElementPage} = require('./UiElementPage');

const {loginPagePractice} = require('./loginPagePractice')

const {dashboardPracticePage} = require('./dashboardPracticePage')

class PageObjectManager{
    constructor(page){

        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.uiElementPage = new UiElementPage(this.page);
        this.loginPagePractice = new loginPagePractice(this.page);
        this.dashboardPracticePage = new dashboardPracticePage(this.page);
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

    getLoginPagePractice(){
        return this.loginPagePractice;
    }

    getdashboardPracticePage(){
        return this.dashboardPracticePage;
    }
}

module.exports = {PageObjectManager};