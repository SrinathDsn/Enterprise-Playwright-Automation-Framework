import {test} from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import { log } from "console";
import credentials from "../data/credentials.json";

test("test", async({page}) => {

const loginPage = new LoginPage(page);

await loginPage.navigateToLoginPage();
await loginPage.fillUsername("dsn@company.sandbox");
await loginPage.fillPassword("ABcd@8700522");

const homePage = await loginPage.clickLoginButton(); 
await homePage.expectSetupTitleToBeVisible();

});


