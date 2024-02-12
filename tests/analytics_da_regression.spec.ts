import { request, test } from "@playwright/test";
import { Api } from "../pages/Api";
import { Analytics } from "../pages/Analytics"
import { apiUrl } from "../utils/apiUrl";
import { analyticsDataSet } from "../utils/analyticsDataSet";

let user

test.describe('Device analytics test', async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.login(`${apiUrl.qaEnvUrl}:3000/login`)
    })
    test('Show splash', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.showSplash(apiUrl.qaEnvUrl, user.token, user.id, "Android", analyticsDataSet.events.showSplash, analyticsDataSet.context.spalsh)
        await analytics.daPage.showSplash(apiUrl.qaEnvUrl, user.token, user.id, "iOS", analyticsDataSet.events.showSplash, analyticsDataSet.context.spalsh)
    })
    test('Show terms', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.showTerms(apiUrl.qaEnvUrl, guest.id, "Android", analyticsDataSet.events.showTerms, analyticsDataSet.context.spalsh)
        await analytics.daPage.showTerms(apiUrl.qaEnvUrl, guest.id, "iOS", analyticsDataSet.events.showTerms, analyticsDataSet.context.spalsh)
    })
    test('Show idfa', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.showIdfa(apiUrl.qaEnvUrl, guest.id, "iOS", analyticsDataSet.events.showIdfa, analyticsDataSet.context.spalsh)
    })

    test('Click idfa', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.clickIdfa(apiUrl.qaEnvUrl, guest.id, "iOS", analyticsDataSet.events.clickIdfa, analyticsDataSet.context.spalsh)

    })

    test('Show push', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.showPush(apiUrl.qaEnvUrl, guest.id, "iOS", analyticsDataSet.events.showPush, analyticsDataSet.context.spalsh)
        await analytics.daPage.showPush(apiUrl.qaEnvUrl, guest.id, "Android", analyticsDataSet.events.showPush, analyticsDataSet.context.spalsh)
    })

    test('Click push', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.clickPush(apiUrl.qaEnvUrl, guest.id, "iOS", analyticsDataSet.events.clickPush, analyticsDataSet.context.spalsh)
        await analytics.daPage.clickPush(apiUrl.qaEnvUrl, guest.id, "Android", analyticsDataSet.events.clickPush, analyticsDataSet.context.spalsh)
    })

    test('Show enter number', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.showEnterNumber(apiUrl.qaEnvUrl, guest.id, "iOS", analyticsDataSet.events.showEnterNumber, analyticsDataSet.context.startStream)
        await analytics.daPage.showEnterNumber(apiUrl.qaEnvUrl, guest.id, "Android", analyticsDataSet.events.showEnterNumber, analyticsDataSet.context.startStream)
    })

    test('Click confirm number', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.clickConfirmNumber(apiUrl.qaEnvUrl, guest.id, "iOS", analyticsDataSet.events.clickConfirmNumber, analyticsDataSet.context.startStream)
        await analytics.daPage.clickConfirmNumber(apiUrl.qaEnvUrl, guest.id, "Android", analyticsDataSet.events.clickConfirmNumber, analyticsDataSet.context.startStream)
    })

    test('Show verify', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.showVerify(apiUrl.qaEnvUrl, guest.id, "iOS", analyticsDataSet.events.showVerify, analyticsDataSet.context.startStream)
        await analytics.daPage.showVerify(apiUrl.qaEnvUrl, guest.id, "Android", analyticsDataSet.events.showVerify, analyticsDataSet.context.startStream)
    })

    test('Show invalid code', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.showInvalidCode(apiUrl.qaEnvUrl, guest.id, "iOS", analyticsDataSet.events.showInvalidCode, analyticsDataSet.context.startStream)
        await analytics.daPage.showInvalidCode(apiUrl.qaEnvUrl, guest.id, "Android", analyticsDataSet.events.showInvalidCode, analyticsDataSet.context.startStream)
        await analytics.daPage.showInvalidCode(apiUrl.qaEnvUrl, guest.id, "Web", analyticsDataSet.events.showInvalidCode, analyticsDataSet.context.startStream)
    })

    test('Click confirm code', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.clickConfirmCode(apiUrl.qaEnvUrl, guest.id, "iOS", analyticsDataSet.events.clickConfirmCode, analyticsDataSet.context.startStream)
        await analytics.daPage.clickConfirmCode(apiUrl.qaEnvUrl, guest.id, "Android", analyticsDataSet.events.clickConfirmCode, analyticsDataSet.context.startStream)
        await analytics.daPage.clickConfirmCode(apiUrl.qaEnvUrl, guest.id, "Web", analyticsDataSet.events.clickConfirmCode, analyticsDataSet.context.startStream)
    })

    test('Show cam access', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.showCamAccess(apiUrl.qaEnvUrl, guest.id, "iOS", analyticsDataSet.events.showCamAccess, analyticsDataSet.context.startStream)
        await analytics.daPage.showCamAccess(apiUrl.qaEnvUrl, guest.id, "Android", analyticsDataSet.events.showCamAccess, analyticsDataSet.context.startStream)
    })

    test('Click cam access', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.clickCamAccess(apiUrl.qaEnvUrl, guest.id, "iOS", analyticsDataSet.events.clickCamAccess, analyticsDataSet.context.startStream)
        await analytics.daPage.clickCamAccess(apiUrl.qaEnvUrl, guest.id, "Android", analyticsDataSet.events.clickCamAccess, analyticsDataSet.context.startStream)
    })

    test('Start beauty filter download', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.startBeautyFilterDownload(apiUrl.qaEnvUrl, guest.id, "iOS", '', '')
        await analytics.daPage.startBeautyFilterDownload(apiUrl.qaEnvUrl, guest.id, "Android", '', '')
    })

    test('Beauty filter download success', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.beautyFilterDownloadSuccess(apiUrl.qaEnvUrl, guest.id, "iOS", '', '')
        await analytics.daPage.beautyFilterDownloadSuccess(apiUrl.qaEnvUrl, guest.id, "Android", '', '')

    test('Beauty filter download failed', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.beautyFilterDownloadFailed(apiUrl.qaEnvUrl, guest.id, "iOS", '', '')
        await analytics.daPage.beautyFilterDownloadFailed(apiUrl.qaEnvUrl, guest.id, "Android", '', '')
    })

    test('Socket channels count subscription', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.socketChannelsCountSubscription(apiUrl.qaEnvUrl, guest.id, "iOS", '', '')
        await analytics.daPage.socketChannelsCountSubscription(apiUrl.qaEnvUrl, guest.id, "Android", '', '')
    })


    test('Logout success', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.logoutSuccess(apiUrl.qaEnvUrl, guest.id, "iOS", analyticsDataSet.events.logoutSuccess, analyticsDataSet.context.accountManagement)
        await analytics.daPage.logoutSuccess(apiUrl.qaEnvUrl, guest.id, "Android", analyticsDataSet.events.logoutSuccess, analyticsDataSet.context.accountManagement)
        await analytics.daPage.logoutSuccess(apiUrl.qaEnvUrl, guest.id, "Web", analyticsDataSet.events.logoutSuccess, analyticsDataSet.context.accountManagement)
    })

    test('Show mic access', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.showMicAccess(apiUrl.qaEnvUrl, guest.id, "iOS", analyticsDataSet.events.showMicAccess, analyticsDataSet.context.startStream)
        await analytics.daPage.showMicAccess(apiUrl.qaEnvUrl, guest.id, "Android", analyticsDataSet.events.showMicAccess, analyticsDataSet.context.startStream)
    })

    test('Click mic access', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.clickMicAccess(apiUrl.qaEnvUrl, guest.id, "iOS", analyticsDataSet.events.clickMicAccess, analyticsDataSet.context.startStream)
        await analytics.daPage.clickMicAccess(apiUrl.qaEnvUrl, guest.id, "Android", analyticsDataSet.events.clickMicAccess, analyticsDataSet.context.startStream)
    })

    test('Media source success', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.mediaSourceSuccess(apiUrl.qaEnvUrl,  guest.id, "iOS",  '', '')
        await analytics.daPage.mediaSourceSuccess(apiUrl.qaEnvUrl,  guest.id, "Android",  '', '')
    })

})
})
