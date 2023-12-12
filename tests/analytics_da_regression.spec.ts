import { request, test } from "@playwright/test";
import { Api } from "../pages/Api";
import { Analytics } from "../pages/Analytics"
import { apiUrl } from "../utils/apiUrl";

let user

test.describe('Device analytics test', async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.login(`${apiUrl.qaEnvUrl}:3000/login`)
    })
    test('First open', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.firstOpen(apiUrl.qaEnvUrl, user.token, user.id, "Android", analyticsDataSet.events.firstOpen, analyticsDataSet.context.splash)
        await analytics.daPage.firstOpen(apiUrl.qaEnvUrl, user.token, user.id, "iOS", analyticsDataSet.events.firstOpen, analyticsDataSet.context.splash)
    })
    test('Show splash', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.showSplash(apiUrl.qaEnvUrl, user.token, user.id, "Android", analyticsDataSet.events.showSplash, analyticsDataSet.context.splash)
        await analytics.daPage.showSplash(apiUrl.qaEnvUrl, user.token, user.id, "iOS", analyticsDataSet.events.showSplash, analyticsDataSet.context.splash)
    })
    test('Show terms', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.showTerms(apiUrl.qaEnvUrl, user.token, user.id, "Android", analyticsDataSet.events.showTerms, analyticsDataSet.context.splash)
        await analytics.daPage.showTerms(apiUrl.qaEnvUrl, user.token, user.id, "iOS", analyticsDataSet.events.showTerms, analyticsDataSet.context.splash)
    })
    test('Show idfa', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.showIdfa(apiUrl.qaEnvUrl, user.token, user.id, "iOS", analyticsDataSet.events.showIdfa, analyticsDataSet.context.splash)
    })

    test('Click idfa', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.clickIdfa(apiUrl.qaEnvUrl, user.token, user.id, "iOS", analyticsDataSet.events.clickIdfa, analyticsDataSet.context.splash)

    })

    test('Show push', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.showPush(apiUrl.qaEnvUrl, user.token, user.id, "iOS", analyticsDataSet.events.showPush, analyticsDataSet.context.splash)
        await analytics.daPage.showPush(apiUrl.qaEnvUrl, user.token, user.id, "Android", analyticsDataSet.events.showPush, analyticsDataSet.context.splash)
    })

    test('Click push', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.clickPush(apiUrl.qaEnvUrl, user.token, user.id, "iOS", analyticsDataSet.events.clickPush, analyticsDataSet.context.splash)
        await analytics.daPage.clickPush(apiUrl.qaEnvUrl, user.token, user.id, "Android", analyticsDataSet.events.clickPush, analyticsDataSet.context.splash)
    })

    test('Show enter number', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.showEnterNumber(apiUrl.qaEnvUrl, user.token, user.id, "iOS", analyticsDataSet.events.showEnterNumber, analyticsDataSet.context.startStream)
        await analytics.daPage.showEnterNumber(apiUrl.qaEnvUrl, user.token, user.id, "Android", analyticsDataSet.events.showEnterNumber, analyticsDataSet.context.startStream)
    })

    test('Click confirm number', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.clickConfirmNumber(apiUrl.qaEnvUrl, user.token, user.id, "iOS", analyticsDataSet.events.clickConfirmNumber, analyticsDataSet.context.startStream)
        await analytics.daPage.clickConfirmNumber(apiUrl.qaEnvUrl, user.token, user.id, "Android", analyticsDataSet.events.clickConfirmNumber, analyticsDataSet.context.startStream)
    })

    test('Show verify', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.showVerify(apiUrl.qaEnvUrl, user.token, user.id, "iOS", analyticsDataSet.events.showVerify, analyticsDataSet.context.startStream)
        await analytics.daPage.showVerify(apiUrl.qaEnvUrl, user.token, user.id, "Android", analyticsDataSet.events.showVerify, analyticsDataSet.context.startStream)
    })

    test('Show invalid code', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.showInvalidCode(apiUrl.qaEnvUrl, user.token, user.id, "iOS", analyticsDataSet.events.showInvalidCode, analyticsDataSet.context.startStream)
        await analytics.daPage.showInvalidCode(apiUrl.qaEnvUrl, user.token, user.id, "Android", analyticsDataSet.events.showInvalidCode, analyticsDataSet.context.startStream)
        await analytics.daPage.showInvalidCode(apiUrl.qaEnvUrl, user.token, user.id, "Web", analyticsDataSet.events.showInvalidCode, analyticsDataSet.context.startStream)
    })

    test('Click confirm code', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.clickСonfirmСode(apiUrl.qaEnvUrl, user.token, user.id, "iOS", analyticsDataSet.events.clickСonfirmСode, analyticsDataSet.context.startStream)
        await analytics.daPage.clickСonfirmСode(apiUrl.qaEnvUrl, user.token, user.id, "Android", analyticsDataSet.events.clickСonfirmСode, analyticsDataSet.context.startStream)
        await analytics.daPage.clickСonfirmСode(apiUrl.qaEnvUrl, user.token, user.id, "Web", analyticsDataSet.events.clickСonfirmСode, analyticsDataSet.context.startStream)
    })

    test('Show cam access', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.showCamAccess(apiUrl.qaEnvUrl, user.token, user.id, "iOS", analyticsDataSet.events.showCamAccess, analyticsDataSet.context.startStream)
        await analytics.daPage.showCamAccess(apiUrl.qaEnvUrl, user.token, user.id, "Android", analyticsDataSet.events.showCamAccess, analyticsDataSet.context.startStream)
    })

    test('Click cam access', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.clickCamAccess(apiUrl.qaEnvUrl, user.token, user.id, "iOS", analyticsDataSet.events.clickCamAccess, analyticsDataSet.context.startStream)
        await analytics.daPage.clickCamAccess(apiUrl.qaEnvUrl, user.token, user.id, "Android", analyticsDataSet.events.clickCamAccess, analyticsDataSet.context.startStream)
    })

    test('Start beauty filter download', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.startBeautyFilterDownload(apiUrl.qaEnvUrl, user.token, user.id, "iOS", analyticsDataSet.events.startBeautyFilterDownload, analyticsDataSet.context.)
        await analytics.daPage.startBeautyFilterDownload(apiUrl.qaEnvUrl, user.token, user.id, "Android", analyticsDataSet.events.startBeautyFilterDownload, analyticsDataSet.context.)
    })

    test('Beauty filter download success', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.beautyFilterDownloadSuccess(apiUrl.qaEnvUrl, user.token, user.id, "iOS")
        await analytics.daPage.beautyFilterDownloadSuccess(apiUrl.qaEnvUrl, user.token, user.id, "Android")
    })

    test('Beauty filter download failed', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.beautyFilterDownloadFailed(apiUrl.qaEnvUrl, user.token, user.id, "iOS")
        await analytics.daPage.beautyFilterDownloadFailed(apiUrl.qaEnvUrl, user.token, user.id, "Android")
    })

    test('Socket channels count subscription', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.socketChannelsCountSubscription(apiUrl.qaEnvUrl, user.token, user.id, "iOS")
        await analytics.daPage.socketChannelsCountSubscription(apiUrl.qaEnvUrl, user.token, user.id, "Android")
    })


    test('Logout success', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.logoutSuccess(apiUrl.qaEnvUrl, user.token, user.id, "iOS")
        await analytics.daPage.logoutSuccess(apiUrl.qaEnvUrl, user.token, user.id, "Android")
        await analytics.daPage.logoutSuccess(apiUrl.qaEnvUrl, user.token, user.id, "Web")
    })

    test('Show mic access', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.showMicAccess(apiUrl.qaEnvUrl, user.token, user.id, "iOS")
        await analytics.daPage.showMicAccess(apiUrl.qaEnvUrl, user.token, user.id, "Android")
    })

    test('Click mic access', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.clickMicAccess(apiUrl.qaEnvUrl, user.token, user.id, "iOS")
        await analytics.daPage.clickMicAccess(apiUrl.qaEnvUrl, user.token, user.id, "Android")
    })

    test('Start gift animation download', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.startGiftAnimationDownload(apiUrl.qaEnvUrl, user.token, user.id, "iOS")
        await analytics.daPage.startGiftAnimationDownload(apiUrl.qaEnvUrl, user.token, user.id, "Android")
    })

    test('Gift animation download success', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.giftAnimationDownloadSuccess(apiUrl.qaEnvUrl, user.token, user.id, "iOS")
        await analytics.daPage.giftAnimationDownloadSuccess(apiUrl.qaEnvUrl, user.token, user.id, "Android")
    })

    test('Media source success', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.mediaSourceSuccess(apiUrl.qaEnvUrl, user.token, user.id, "iOS")
        await analytics.daPage.mediaSourceSuccess(apiUrl.qaEnvUrl, user.token, user.id, "Android")
    })

})
