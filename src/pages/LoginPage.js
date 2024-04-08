import { expect } from "@playwright/test";
import Homepage from "./HomePage";



export default class LoginPage {

    constructor(page) {
        this.page = page;
        this.userNameSelector = page.locator('[name="username"]');
        this.passWordSelector = page.locator('[id="password"]');
        this.loginBtn = page.locator('[id="Login"]');
    }

    async navigateToLoginPage() {
        await this.page.goto('/');
    }

    async fillUsername(username) {
        await this.userNameSelector.fill(username);
    }

    async fillPassword(password) {
        await this.passWordSelector.fill(password);
    }

    async clickLoginButton() {

        await this.loginBtn.click();
        const homePage = new Homepage(this.page);
        return homePage;

    }






}