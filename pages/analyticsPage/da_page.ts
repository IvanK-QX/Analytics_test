import { APIRequestContext, expect, request } from "@playwright/test"
import { Headers } from "../../utils/headers"
import { DaPayloads } from "./da_payloads"

export class AnalyticsDeviceActivityPage {
    apiContext: APIRequestContext

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async showRegModal(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.daQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`request for registration modal send, platform ${platform}`)
    }

    async clickCloseReg(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.daQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`request for registration modal closed, platform ${platform}`)
    }


    async clickStartReg(url: string, userToken: string, userId: string, platform: 'iOS' | 'Web' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.daQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`request for start registration, platform ${platform}`)

    }

    async showJoinModal(url: string, userToken: string, userId: string, platform: 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.daQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`request for registration modal show, platform`)

    }

    async firstOpen(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.daQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ request for first open, platform ${platform}`)
    }

    async showSplash(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.daQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ request for Splash screen, platform ${platform}`)
    }

    async showTerms(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.daQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ request for Show Terms ${platform}`)
    }

    async showIdfa(url: string, userToken: string, userId: string, platform: 'iOS', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.daQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ request for Show Idfa, platform`)
    }

    async clickIdfa(url: string, userToken: string, userId: string, platform: 'iOS', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.daQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ request for click Idfa, platform`)
    }

    async showPush(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.daQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ request for show push, platform ${platform}`)
    }

    async clickPush(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.daQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ request for click push, platform ${platform}`)
    }

    async showEnterNumber(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.daQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ request for click push, platform ${platform}`)
    }

    async clickConfirmNumber(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.daQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ request for confirm number, platform ${platform}`)
    }

    async showVerify(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.daQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ request for verify, platform ${platform}`)
    }

    async showInvalidCode(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.daQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ request for invalid code, platform ${platform}`)
    }

    async clickСonfirmСode(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.daQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ request for confirm code, platform ${platform}`)
    }

    async showCamAccess(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.daQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ request for access camera, platform ${platform}`)
    }

    async clickCamAccess(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.daQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ request for click access camera, platform ${platform}`)
    }

    async startBeautyFilterDownload(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.daQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ request for download Beauty filter, platform ${platform}`)
    }

    async beautyFilterDownloadSuccess(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.daQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ request for Beauty filter download success, platform ${platform}`)
    }

    async beautyFilterDownloadFailed(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.daQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ request for Beauty filter download failed, platform ${platform}`)
    }

    async socketChannelsCountSubscription(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.daQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ request for Socket Channel, platform ${platform}`)
    }

    async logoutSuccess(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android' | 'Web', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.daQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ sign out of the account success, platform ${platform}`)
    }

    async showMicAccess(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.daQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ modal window for turning on the microphone, platform ${platform}`)
    }

    async clickMicAccess(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.daQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ turn on the microphone, platform ${platform}`)
    }

    async startGiftAnimationDownload(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.daQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ 3D animation loading, platform ${platform}`)
    }

    async giftAnimationDownloadSuccess(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.daQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ animation downloaded successfully, platform ${platform}`)
    }

    async mediaSourceSuccess(url: string, userToken: string, userId: string, platform: 'iOS' | 'Android', event: string, context: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = DaPayloads.daQueryParmeter(userId, event, context, platform)
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3005/a/da`, { data, headers })
        expect(apiRequest.status()).toEqual(200)
        console.log(`Regression/ mediasource downloaded successfully, platform ${platform}`)
    }
}