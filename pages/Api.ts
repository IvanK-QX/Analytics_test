import { APIRequestContext } from "@playwright/test"
import { ApiLoginPage } from "./apiPages/login_page"
import { ApiDeleteAccountPage } from "./apiPages/deleteAccount_page"

export class Api {
    apiContext: APIRequestContext
    loginPage: ApiLoginPage
    deleteAccountPage: ApiDeleteAccountPage

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
        this.loginPage = new ApiLoginPage(apiContext)
        this.deleteAccountPage = new ApiDeleteAccountPage(apiContext)
    }
}