const { expect } = require('@playwright/test');
const { username } = require('../utils/constants');

class DashboardPage{

    constructor(page){
        this.page = page;

        

    }

    async extractAndVerifyHelloText(){
        const helloMsg = this.page.getByRole('heading' ,{name : `Hello ${username},`});
        await expect(helloMsg).toBeVisible();
        let hellotext = await helloMsg.textContent();
        let nameArr = hellotext.split(" ");
        let name = nameArr[1].split(",");
        expect(name[0] == username).toBeTruthy();

    }
}

module.exports = {DashboardPage}