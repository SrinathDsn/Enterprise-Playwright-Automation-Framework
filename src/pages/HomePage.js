import {expect} from "@playwright/test";

export default class HomePage{

constructor(page)
{
    this.page = page; 
    this.setupTitleSelector = page.locator('[class="slds-truncate"]');
}

async expectSetupTitleToBeVisible()
{
    await expect(this.setupTitleSelector).toBeVisible({timeout : 15000});
}

}


