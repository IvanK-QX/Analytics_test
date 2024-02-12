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
        console.log('user`: ', user)
    })

    test.only('Show Registration Modal', async () => {
        const apiContext = await request.newContext()
        // console.log('apiContext`: ', {})
        const analytics = new Analytics(apiContext)
        console.log('analytics`: ', [apiUrl.qaEnvUrl, user.token, user.id, "Android", analyticsDataSet.events.showRegModal, analyticsDataSet.context.chat])
        await analytics.daPage.showRegModal(apiUrl.qaEnvUrl, user.token, user.id, "Android", analyticsDataSet.events.showRegModal, analyticsDataSet.context.chat)
        await analytics.daPage.showRegModal(apiUrl.qaEnvUrl, user.token, user.id, "Web", analyticsDataSet.events.showRegModal, analyticsDataSet.context.chat)
        await analytics.daPage.showRegModal(apiUrl.qaEnvUrl, user.token, user.id, 'iOS', analyticsDataSet.events.showRegModal, analyticsDataSet.context.chat)
    })

    test('Close Registration Modal', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.clickCloseReg(apiUrl.qaEnvUrl, guest.id, "Android", analyticsDataSet.events.clickCloseReg, analyticsDataSet.context.chat)
        await analytics.daPage.clickCloseReg(apiUrl.qaEnvUrl, guest.id, "Web", analyticsDataSet.events.clickCloseReg, analyticsDataSet.context.chat)
        await analytics.daPage.clickCloseReg(apiUrl.qaEnvUrl, guest.id, "iOS", analyticsDataSet.events.clickCloseReg, analyticsDataSet.context.chat)
    })

    test('Click Start Registration', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.clickStartReg(apiUrl.qaEnvUrl, guest.id, "Android", analyticsDataSet.events.clickStartReg, analyticsDataSet.context.allStreams)
        await analytics.daPage.clickStartReg(apiUrl.qaEnvUrl, guest.id, "Web", analyticsDataSet.events.clickStartReg, analyticsDataSet.context.allStreams)
        await analytics.daPage.clickStartReg(apiUrl.qaEnvUrl, guest.id, "iOS", analyticsDataSet.events.clickStartReg, analyticsDataSet.context.allStreams)
    })

    test('Show Join Modal', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.showJoinModal(apiUrl.qaEnvUrl, guest.id, "Web", analyticsDataSet.events.showJoinModal, analyticsDataSet.context.allStreams)
    })

    test('First open', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.daPage.firstOpen(apiUrl.qaEnvUrl, guest.id, "Android", analyticsDataSet.events.firstOpen, analyticsDataSet.context.allStreams)
        await analytics.daPage.firstOpen(apiUrl.qaEnvUrl, guest.id, "iOS", analyticsDataSet.events.firstOpen, analyticsDataSet.context.allStreams)
})
})
