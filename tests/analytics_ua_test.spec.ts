import { request, test } from "@playwright/test";
import { Api } from "../pages/Api";
import { Analytics } from "../pages/Analytics"
import { apiUrl } from "../utils/apiUrl";
import { analyticsDataSet } from "../utils/analyticsDataSet"

let user

test.describe('User analytics test', async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
    })

    test('Show create account success', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showCreateAccountSuccess(apiUrl.qaEnvUrl, user.userToken, user.id, 'Android', analyticsDataSet.events.showCreateAccountSuccess, analyticsDataSet.context.startStream)
        await analytics.uaPage.showCreateAccountSuccess(apiUrl.qaEnvUrl, user.userToken, user.id, 'Web', analyticsDataSet.events.showCreateAccountSuccess, analyticsDataSet.context.startStream)
        await analytics.uaPage.showCreateAccountSuccess(apiUrl.qaEnvUrl, user.userToken, user.id, 'iOS', analyticsDataSet.events.showCreateAccountSuccess, analyticsDataSet.context.startStream)
    })

    test('Pageview Follow Top', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageViewFollowTop(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.pageViewFollowTop, analyticsDataSet.context.spalsh)
        await analytics.uaPage.pageViewFollowTop(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.pageViewFollowTop, analyticsDataSet.context.spalsh)
        await analytics.uaPage.pageViewFollowTop(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.pageViewFollowTop, analyticsDataSet.context.spalsh)
    })

    test('Click Follow Top', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickFollowTop(apiUrl.qaEnvUrl, user.userToken, user.id, 'Android', analyticsDataSet.events.clickFollowTop, analyticsDataSet.context.spalsh)
        await analytics.uaPage.clickFollowTop(apiUrl.qaEnvUrl, user.userToken, user.id, 'Web', analyticsDataSet.events.clickFollowTop, analyticsDataSet.context.spalsh)
        await analytics.uaPage.clickFollowTop(apiUrl.qaEnvUrl, user.userToken, user.id, 'iOS', analyticsDataSet.events.clickFollowTop, analyticsDataSet.context.spalsh)
    })
    test('Click Follow', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickFollow(apiUrl.qaEnvUrl, user.userToken, user.id, 'Android', analyticsDataSet.events.clickFollow, analyticsDataSet.context.spalsh)
        await analytics.uaPage.clickFollow(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickFollow, analyticsDataSet.context.spalsh)
        await analytics.uaPage.clickFollow(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickFollow, analyticsDataSet.context.spalsh)
    })

    test('Pageview stream', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.pageviewStream, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.pageviewStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.pageviewStream, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.pageviewStream(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.pageviewStream, analyticsDataSet.context.watchersStream)
    })

    test('Click send gift', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickSendGift(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickSendGift, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.clickSendGift(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickSendGift, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.clickSendGift(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickSendGift, analyticsDataSet.context.watchersStream)
    })

    test('Show Gift Sent', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showGiftSent(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showGiftSent, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.showGiftSent(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.showGiftSent, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.showGiftSent(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showGiftSent, analyticsDataSet.context.watchersStream)
    })

    test('Click Get Coins', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickGetCoins(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickGetCoins, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.clickGetCoins(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickGetCoins, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.clickGetCoins(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickGetCoins, analyticsDataSet.context.watchersStream)
    })

    test('Preview Coin Shop', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.previewCoinShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.previewCoinShop, analyticsDataSet.context.buynow)
        await analytics.uaPage.previewCoinShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.previewCoinShop, analyticsDataSet.context.buynow)
        await analytics.uaPage.previewCoinShop(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.previewCoinShop, analyticsDataSet.context.buynow)
    })

    test('Show Coin Shop', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showCoinShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showCoinShop, analyticsDataSet.context.chat)
        await analytics.uaPage.showCoinShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.showCoinShop, analyticsDataSet.context.chat)
        await analytics.uaPage.showCoinShop(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showCoinShop, analyticsDataSet.context.chat)
    })

    test('Click Buy Pack', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickBuyPack(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickBuyPack, analyticsDataSet.context.coinsshop)
        await analytics.uaPage.clickBuyPack(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickBuyPack, analyticsDataSet.context.coinsshop)
        await analytics.uaPage.clickBuyPack(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickBuyPack, analyticsDataSet.context.coinsshop)
    })

    test('Page View Paying menu', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageViewPayingMenu(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.pageViewPayingMenu, analyticsDataSet.context.coinsshop)
        await analytics.uaPage.pageViewPayingMenu(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.pageViewPayingMenu, analyticsDataSet.context.coinsshop)
        await analytics.uaPage.pageViewPayingMenu(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.pageViewPayingMenu, analyticsDataSet.context.coinsshop)
    })

    test('Click Close Paying Menu', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickClosePayingMenu(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickClosePayingMenu, analyticsDataSet.context.coinsshop)
        await analytics.uaPage.clickClosePayingMenu(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickClosePayingMenu, analyticsDataSet.context.coinsshop)
        await analytics.uaPage.clickClosePayingMenu(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickClosePayingMenu, analyticsDataSet.context.coinsshop)
    })

    test('Show Paying Menu Success', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showPayingMenuSuccess(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showPayingMenuSuccess, analyticsDataSet.context.coinsshop)
        await analytics.uaPage.showPayingMenuSuccess(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.showPayingMenuSuccess, analyticsDataSet.context.coinsshop)
        await analytics.uaPage.showPayingMenuSuccess(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showPayingMenuSuccess, analyticsDataSet.context.coinsshop)
    })

    test('Show Premium Join', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showPremiumJoin(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showPremiumJoin, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.showPremiumJoin(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.showPremiumJoin, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.showPremiumJoin(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showPremiumJoin, analyticsDataSet.context.watchersStream)
    })

    test('Click Premium Join', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickPremiumJoin(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickPremiumJoin, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.clickPremiumJoin(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickPremiumJoin, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.clickPremiumJoin(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickPremiumJoin, analyticsDataSet.context.watchersStream)
    })

    test('Show Room Join', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showRoomJoin(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showRoomJoin, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.showRoomJoin(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.showRoomJoin, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.showRoomJoin(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showRoomJoin, analyticsDataSet.context.watchersStream)
    })

    test('Click Room Join', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickRoomJoin(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickRoomJoin, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.clickRoomJoin(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickRoomJoin, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.clickRoomJoin(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickRoomJoin, analyticsDataSet.context.watchersStream)
    })

    test.only('Click Gift Shop', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickGiftShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickGiftShop, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.clickGiftShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickGiftShop, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.clickGiftShop(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickGiftShop, analyticsDataSet.context.watchersStream)
    })
})






