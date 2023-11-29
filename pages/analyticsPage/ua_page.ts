import { APIRequestContext, expect, request } from "@playwright/test"
import { Headers } from "../../utils/headers"
import { UaPayloads } from "./ua_payloads"

export class AnalyticsUserActivityPage {
    apiContext: APIRequestContext

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async showCreateAccountSuccess(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`request for create new account ${platform}`)
    }

    async pageViewFollowTop(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`request for pageview follow top showed, platform ${platform}`)
    }

    async clickFollowTop(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`request for follow top send, platform ${platform}`)
    }

    async clickFollow(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`request for ${event} send, platform ${platform}`)
    }

    async pageviewStream(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`request for stream list get, platform ${platform}`)
    }

    async clickSendGift(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`request for send gift, platform ${platform}`)
    }

    async showGiftSent(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`request for show gift sent, platform ${platform}`)
    }

    async clickGetCoins(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`request for open coin shop, platform ${platform}`)
    }

    async previewCoinShop(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Coin Shop Preview is displayed, platform ${platform}`)
    }

    async showCoinShop(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Coin Shop is displayed, platform ${platform}`)
    }

    async clickBuyPack(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Buy pack is clicked, platform ${platform}`)
    }

    async pageViewPayingMenu(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Paing Menu is Displayed, platform ${platform}`)
    }

    async clickClosePayingMenu(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Paing Menu is closed, platform ${platform}`)
    }

    async showPayingMenuSuccess(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Paying Menu is showed successfully, platform ${platform}`)
    }

    async showPremiumJoin(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Show Premium Join, platform ${platform}`)
    }

    async clickPremiumJoin(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Click Premium Join, platform ${platform}`)
    }

    async showRoomJoin(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Show Room Join, platform ${platform}`)
    }

    async clickRoomJoin(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Click Room Join, platform ${platform}`)
    }

    async clickGiftShop(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Click Gift Shop, platform ${platform}`)
    }

    async pageviewUserInfo(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression / displaying the user info screen, platform ${platform}`)
    }

    async clickSave(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ save profile information, platform ${platform}`)
    }

    async clickSkipProfileSetUp(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ closed profile set up, platform ${platform}`)
    }

    async clickLogout(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ Logout from account, platform ${platform}`)
    }

    async clickDeleteProfile(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on button delete, platform ${platform}`)
    }

    async showReasonDelete(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ page with delete's reason, platform ${platform}`)
    }

    async clickConfirmDeleteProfile(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ chose reason and confirm, platform ${platform}`)
    }

    async profileDeletedSuccess(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ profile delete success, platform ${platform}`)
    }

    async showConfirmDelete(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ modal window that the account has been deleted, platform ${platform}`)
    }

    async clickProfile(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on button profile on navigation bar, platform ${platform}`)
    }

    async pageviewEditProfile(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ edit profile page, platform ${platform}`)
    }

    async clickPhotoEdit(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click to chose a photo for profile, platform ${platform}`)
    }

    async clickSaveProfile(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click to save profile, platform ${platform}`)
    }


    async clickSettings(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click to settings, platform ${platform}`)
    }

    async pageviewSettings(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ settings page, platform ${platform}`)
    }

    async clickFollowers(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on page followers, platform ${platform}`)
    }

    async pageviewFollowers(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ followers page, platform ${platform}`)
    }

    async clickMyFollowings(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on page followings, platform ${platform}`)
    }

    async clickMyFollowers(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on page followers, platform ${platform}`)
    }

    async pageviewMyFollowings(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on page my followings, platform ${platform}`)
    }

    async clickRefferalProgram(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on page refferal program, platform ${platform}`)
    }

    async pageviewReferralProgram(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ page referral program, platform ${platform}`)
    }

    async clickRedeemCash(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on page redeem cash, platform ${platform}`)
    }

    async pageviewTransactionsHistory(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ page transaction history, platform ${platform}`)
    }

    async clickTopGifters(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on page top gifters, platform ${platform}`)
    }

    async pageviewTopGifters(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ page top gifters, platform ${platform}`)
    }

    async clickMyVipStatus(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click page vip status, platform ${platform}`)
    }

    async pageviewMyVipStatus(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ page my vip status, platform ${platform}`)
    }

    async showGiftReceived(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ user receives a gift, platform ${platform}`)
    }

    async clickGiftsShop(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on gift shop, platform ${platform}`)
    }

    async showGiftsShop(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ page of gift shop, platform ${platform}`)
    }

    async clickStartStream(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click button start stream, platform ${platform}`)
    }

    async clickStream(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on stream, platform ${platform}`)
    }

    async clickCoinsShop(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on coin shop, platform ${platform}`)
    }

    async pageviewСoinsShop(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ page of coin shop, platform ${platform}`)
    }

    async pageviewFollowings(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ page of streams who you follow, platform ${platform}`)
    }

    async clickFollowings(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ сlick on the following button on the progress bar, platform ${platform}`)
    }

    async pageviewAllStreams(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ page of all streams, platform ${platform}`)
    }

    async clickLeaderboard(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click button leaderboard, platform ${platform}`)
    }

    async clickCloseShop(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click button leaderboard, platform ${platform}`)
    }

    async pageviewNoInternet(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ modal window No internet, platform ${platform}`)
    }

    async showStartPremiumGifts(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ choose gift to start premium stream, platform ${platform}`)
    }

    async clickStartPremiumGifts(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ after choose gift start premium stream, platform ${platform}`)
    }

    async showInviteTopGifters(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ list of top gifters, platform ${platform}`)
    }

    async clickInviteTopGifters(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ invite top gifters, platform ${platform}`)
    }

    async showInvitesSent(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ invitation is sent, platform ${platform}`)
    }

    async showPopupEndStream(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ popup about end stream by moderator, platform ${platform}`)
    }

    async showPopupEndPremium(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ if less than 5 minutes of streaming have passed and the streamer tries to end the stream, platform ${platform}`)
    }

    async clickCloseStream(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on button close in stream, platform ${platform}`)
    }

    async clickPreviewStream(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on preview of start stream, platform ${platform}`)
    }

    async pageviewPreviewStream(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ page of preview start stream, platform ${platform}`)
    }

    async pageviewGoLive(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ displaying the completed title screen and the beginning of the stream, platform ${platform}`)
    }

    async clickGoLive(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on button go live, platform ${platform}`)
    }

    async showInappropriateTitle(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ inappropropriaet title for stream, platform ${platform}`)
    }

    async showSetPhoto(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ set photo to start stream, platform ${platform}`)
    }

    async clickSetPhoto(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ choose photo to start stream, platform ${platform}`)
    }

    async startBeautyFilterDownload(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ beauty filters have started to load, platform ${platform}`)
    }

    async beautyFilterDownloadSuccess(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ beauty filters are loaded successfully, platform ${platform}`)
    }

    async beautyFilterDownloadFailed(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ beauty filters aren't loaded successfully, platform ${platform}`)
    }

    async newStreamStarted(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ new stream is started, platform ${platform}`)
    }

    async clickEndStream(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ finish stream, platform ${platform}`)
    }

    async clickPauseStream(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on pause in stream, platform ${platform}`)
    }

    async streamShared(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ user share stream, platform ${platform}`)
    }

    async clickChooseSticker(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ streamer choose sticker in stream, platform ${platform}`)
    }

    async showAddStickerText(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ streamer choose sticker in stream, platform ${platform}`)
    }

    async clickAddStickerText(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ streamer choose sticker in stream and click on it, platform ${platform}`)
    }

    async showInappropriateStickerText(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ streamer add inappropriate sticker text, platform ${platform}`)
    }

    async showAddSticker(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ modal window with all gifts, platform ${platform}`)
    }

    async showStickerAdded(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ sticker is added, platform ${platform}`)
    }

    async clickChangeSticker(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on sticker and change gift, platform ${platform}`)
    }

    async clickDeleteDesiredGift(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on sticker and delete gift, platform ${platform}`)
    }

    async clickBeautyFilter(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on beauty filter, platform ${platform}`)
    }

    async showEditBeautyFilter(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ open editing of beauty filter, platform ${platform}`)
    }

    async showBeautyFilterAdded(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ streamer closed the editing screen and saw how the filters were applied, platform ${platform}`)
    }

    async beautyFilterError(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ error when adding beauty filters, platform ${platform}`)
    }

    async showEndStream(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ popup about End stream, platform ${platform}`)
    }

    async beautyFeedback(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ popup sent feedback about beauty, platform ${platform}`)
    }

    async clickEndConfirmation(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ popup about the end of the stream, platform ${platform}`)
    }

    async showBroadcastEnded(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ popup with stream statistic, platform ${platform}`)
    }

    async clickChangeStreamType(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ change stream type, platform ${platform}`)
    }

    async showInviteStreamer(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ list of streamers who we can start battle/party, platform ${platform}`)
    }

    async showStreamerInvited(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ request is sent to streamer, platform ${platform}`)
    }

    async clickInviteStreamerAnswer(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ streamer add answer on request:accept, decline, do_not_disturb_me, platform ${platform}`)
    }

    async showInviteStreamerRequest(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ battle request from streamer, platform ${platform}`)
    }

    async showInviteStreamerAccepted(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ streamer accepted invitation, platform ${platform}`)
    }

    async showInviteStreamerRejected(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ streamer rejected invitation, platform ${platform}`)
    }

    async showBattleResults(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ result of battle, platform ${platform}`)
    }

    async swipeTutorial(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ tutorial about swipe UI in stream, platform ${platform}`)
    }

    async swipeUi(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ user swipe UI in stream, platform ${platform}`)
    }

    async streamSwipe(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ user swipe stream, platform ${platform}`)
    }

    async showStreamPaused(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ stream is paused, platform ${platform}`)
    }

    async showPopupFollow(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ popup about follow streamer, platform ${platform}`)
    }

    async clickMessage(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ user tap on message field, platform ${platform}`)
    }

    async clickShare(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on Share button, platform ${platform}`)
    }

    async showProfilePreview(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ profile preview of user, platform ${platform}`)
    }

    async clickBlock(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on block button, platform ${platform}`)
    }

    async userBlocked(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ a message that the user is blocked, platform ${platform}`)
    }

    async clickReport(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ click on report button, platform ${platform}`)
    }

    async reportSend(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ a message that report is send, platform ${platform}`)
    }

    async showPushInviteToPremium(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ streamer invite watcher to premium stream, platform ${platform}`)
    }

    async showPushInviteToRoom(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ streamer invite watcher to 1:1 stream, platform ${platform}`)
    }

    async clickTranslate(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ user click on translate button , platform ${platform}`)
    }

    async giftShopSwipe(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ user swipe gift shop, platform ${platform}`)
    }

    async clickChatMessages(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ user click on message in group chat, platform ${platform}`)
    }

    async pageviewStreamEnded(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = UaPayloads.uaQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/ua`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ end stream for watcher, platform ${platform}`)
    }

}
