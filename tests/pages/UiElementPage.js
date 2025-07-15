import { expect } from "@playwright/test";

class UiElementPage{

    constructor(page){
        this.page = page ; 
        this.blinkLink = page.locator(".blinkingText");
    }

    async openUiElementPageUrl(url){

        await this.page.goto(url);
    }

    async linkIsBlinking(){
        
        await expect(this.blinkLink).toBeVisible();
        await expect(this.blinkLink).toHaveAttribute('class','blinkingText');
    }
}

module.exports = {UiElementPage}