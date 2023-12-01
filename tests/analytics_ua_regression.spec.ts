import { request, test } from "@playwright/test";
import { Api } from "../pages/Api";
import { Analytics } from "../pages/Analytics"
import { apiUrl } from "../utils/apiUrl";
import { analyticsDataSet } from "../utils/analyticsDataSet";
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

    test('Pageview user info', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewUserInfo(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.pageviewUserInfo, analyticsDataSet.context.spalsh)
        await analytics.uaPage.pageviewUserInfo(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.pageviewUserInfo, analyticsDataSet.context.spalsh)
    })

    test('Click save', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickSave(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickSave, analyticsDataSet.context.spalsh)
        await analytics.uaPage.clickSave(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickSave, analyticsDataSet.context.spalsh)
    })

    test('Click skip profile set up', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickSkipProfileSetUp(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickSkipProfileSetUp, analyticsDataSet.context.spalsh)
        await analytics.uaPage.clickSkipProfileSetUp(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickSkipProfileSetUp, analyticsDataSet.context.spalsh)
    })

    test('Click logout', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickLogout(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickLogout, analyticsDataSet.context.accountManagement)
        await analytics.uaPage.clickLogout(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickLogout, analyticsDataSet.context.accountManagement)
        await analytics.uaPage.clickLogout(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickLogout, analyticsDataSet.context.accountManagement)
    })

    test('Click delete profile', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickDeleteProfile(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickDeleteProfile, analyticsDataSet.context.accountManagement)
        await analytics.uaPage.clickDeleteProfile(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickDeleteProfile, analyticsDataSet.context.accountManagement)
        await analytics.uaPage.clickDeleteProfile(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickDeleteProfile, analyticsDataSet.context.accountManagement)
    })

    test('Show reason delete', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showReasonDelete(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showReasonDelete, analyticsDataSet.context.accountManagement)
        await analytics.uaPage.showReasonDelete(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showReasonDelete, analyticsDataSet.context.accountManagement)
        await analytics.uaPage.showReasonDelete(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.showReasonDelete, analyticsDataSet.context.accountManagement)
    })

    test('Click confirm delete profile', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickConfirmDeleteProfile(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickConfirmDeleteProfile, analyticsDataSet.context.accountManagement)
        await analytics.uaPage.clickConfirmDeleteProfile(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickConfirmDeleteProfile, analyticsDataSet.context.accountManagement)
        await analytics.uaPage.clickConfirmDeleteProfile(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickConfirmDeleteProfile, analyticsDataSet.context.accountManagement)
    })

    test('Profile deleted success', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.profileDeletedSuccess(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.profileDeletedSuccess, analyticsDataSet.context.accountManagement)
        await analytics.uaPage.profileDeletedSuccess(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.profileDeletedSuccess, analyticsDataSet.context.accountManagement)
        await analytics.uaPage.profileDeletedSuccess(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.profileDeletedSuccess, analyticsDataSet.context.accountManagement)
    })

    test('Show confirm delete', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showConfirmDelete(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showConfirmDelete, analyticsDataSet.context.accountManagement)
        await analytics.uaPage.showConfirmDelete(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showConfirmDelete, analyticsDataSet.context.accountManagement)
        await analytics.uaPage.showConfirmDelete(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.showConfirmDelete, analyticsDataSet.context.accountManagement)
    })

    test('Click Profile', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickProfile(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickConfirmDeleteProfile, analyticsDataSet.context.profile)
        await analytics.uaPage.clickProfile(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickConfirmDeleteProfile, analyticsDataSet.context.profile)
        await analytics.uaPage.clickProfile(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickConfirmDeleteProfile, analyticsDataSet.context.profile)
    })

    test('Pageview edit profile', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewEditProfile(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.pageviewEditProfile, analyticsDataSet.context.profile)
        await analytics.uaPage.pageviewEditProfile(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.pageviewEditProfile, analyticsDataSet.context.profile)
        await analytics.uaPage.pageviewEditProfile(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.pageviewEditProfile, analyticsDataSet.context.profile)
    })

    test('Click photo edit', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickPhotoEdit(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickPhotoEdit, analyticsDataSet.context.profile)
        await analytics.uaPage.clickPhotoEdit(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickPhotoEdit, analyticsDataSet.context.profile)
    })

    test('Click save profile', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickSaveProfile(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickSaveProfile, analyticsDataSet.context.profile)
        await analytics.uaPage.clickSaveProfile(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickSaveProfile, analyticsDataSet.context.profile)
    })


    test('Click settings', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickSettings(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickSettings, analyticsDataSet.context.profile)
        await analytics.uaPage.clickSettings(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickSettings, analyticsDataSet.context.profile)
    })


    test('Pageview settings', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewSettings(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.pageviewSettings, analyticsDataSet.context.profile)
        await analytics.uaPage.pageviewSettings(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.pageviewSettings, analyticsDataSet.context.profile)
    })

    test('Click followers', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickFollowers(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickFollowers, analyticsDataSet.context.profile)
        await analytics.uaPage.clickFollowers(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickFollowers, analyticsDataSet.context.profile)
    })

    test('Pageview followers', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewFollowers(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.pageviewFollowers, analyticsDataSet.context.profile)
        await analytics.uaPage.pageviewFollowers(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.pageviewFollowers, analyticsDataSet.context.profile)
    })

    test('Click my followings', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickMyFollowings(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickMyFollowings, analyticsDataSet.context.profile)
        await analytics.uaPage.clickMyFollowings(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickMyFollowings, analyticsDataSet.context.profile)
    })

    test('Click my followers', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickMyFollowers(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickMyFollowers, analyticsDataSet.context.profile)
        await analytics.uaPage.clickMyFollowers(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickMyFollowers, analyticsDataSet.context.profile)
    })

    test('Pageview my followings', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewMyFollowings(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.pageviewMyFollowings, analyticsDataSet.context.profile)
        await analytics.uaPage.pageviewMyFollowings(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.pageviewMyFollowings, analyticsDataSet.context.profile)
    })

    test('Click refferal program', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickRefferalProgram(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickRefferalProgram, analyticsDataSet.context.profile)
        await analytics.uaPage.clickRefferalProgram(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickRefferalProgram, analyticsDataSet.context.profile)
    })

    test('Pageview referral program', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewReferralProgram(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.pageviewReferralProgram, analyticsDataSet.context.referral)
        await analytics.uaPage.pageviewReferralProgram(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.pageviewReferralProgram, analyticsDataSet.context.referral)
    })

    test('Click redeem cash', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickRedeemCash(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickRedeemCash, analyticsDataSet.context.profile)
        await analytics.uaPage.clickRedeemCash(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickRedeemCash, analyticsDataSet.context.profile)
    })

    test('Pageview transactions history', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewTransactionsHistory(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.pageviewTransactionsHistory, analyticsDataSet.context.profile)
        await analytics.uaPage.pageviewTransactionsHistory(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.pageviewTransactionsHistory, analyticsDataSet.context.profile)
    })

    test('Click top gifters', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickTopGifters(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickTopGifters, analyticsDataSet.context.profile)
        await analytics.uaPage.clickTopGifters(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickTopGifters, analyticsDataSet.context.profile)
        await analytics.uaPage.clickTopGifters(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickTopGifters, analyticsDataSet.context.profile)

    })

    test('Pageview top gifters', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewTopGifters(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.pageviewTopGifters, analyticsDataSet.context.profile)
        await analytics.uaPage.pageviewTopGifters(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.pageviewTopGifters, analyticsDataSet.context.profile)
        await analytics.uaPage.pageviewTopGifters(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.pageviewTopGifters, analyticsDataSet.context.profile)

    })

    test('Click my vip status', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickMyVipStatus(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickMyVipStatus, analyticsDataSet.context.profile)
        await analytics.uaPage.clickMyVipStatus(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickMyVipStatus, analyticsDataSet.context.profile)
        await analytics.uaPage.clickMyVipStatus(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickMyVipStatus, analyticsDataSet.context.profile)

    })

    test('Pageview my vip status', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewMyVipStatus(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.pageviewMyVipStatus, analyticsDataSet.context.profile)
        await analytics.uaPage.pageviewMyVipStatus(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.pageviewMyVipStatus, analyticsDataSet.context.profile)
        await analytics.uaPage.pageviewMyVipStatus(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.pageviewMyVipStatus, analyticsDataSet.context.profile)

    })
    test('Show gift received', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showGiftReceived(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showGiftReceived, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.showGiftReceived(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showGiftReceived, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.showGiftReceived(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.showGiftReceived, analyticsDataSet.context.streamersStream)

    })

    test('Click gifts shop', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickGiftsShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickGiftsShop, analyticsDataSet.context.chat)
        await analytics.uaPage.clickGiftsShop(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickGiftsShop, analyticsDataSet.context.chat)
        await analytics.uaPage.clickGiftsShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickGiftsShop, analyticsDataSet.context.chat)

    })

    test('Show gifts shop', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showGiftsShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showGiftsShop, analyticsDataSet.context.chat)
        await analytics.uaPage.showGiftsShop(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showGiftsShop, analyticsDataSet.context.chat)
        await analytics.uaPage.showGiftsShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.showGiftsShop, analyticsDataSet.context.chat)

    })

    test('Click start stream', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickStartStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickStartStream, analyticsDataSet.context.allStreams)
        await analytics.uaPage.clickStartStream(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickStartStream, analyticsDataSet.context.allStreams)
        await analytics.uaPage.clickStartStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickStartStream, analyticsDataSet.context.allStreams)

    })

    test('Click stream', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickStream, analyticsDataSet.context.allStreams)
        await analytics.uaPage.clickStream(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickStream, analyticsDataSet.context.allStreams)
        await analytics.uaPage.clickStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickStream, analyticsDataSet.context.allStreams)

    })

    test('Click coins shop', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickCoinsShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickCoinsShop, analyticsDataSet.context.coinsshop)
        await analytics.uaPage.clickCoinsShop(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickCoinsShop, analyticsDataSet.context.coinsshop)
        await analytics.uaPage.clickCoinsShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickCoinsShop, analyticsDataSet.context.coinsshop)

    })

    test('Pageview coins shop', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewСoinsShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.pageviewСoinsShop, analyticsDataSet.context.coinsshop)
        await analytics.uaPage.pageviewСoinsShop(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.pageviewСoinsShop, analyticsDataSet.context.coinsshop)
        await analytics.uaPage.pageviewСoinsShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.pageviewСoinsShop, analyticsDataSet.context.coinsshop)

    })

    test('Pageview followings', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewFollowings(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.pageviewFollowings, analyticsDataSet.context.followings)
        await analytics.uaPage.pageviewFollowings(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.pageviewFollowings, analyticsDataSet.context.followings)
        await analytics.uaPage.pageviewFollowings(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.pageviewFollowings, analyticsDataSet.context.followings)

    })

    test('Click followings', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickFollowings(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickFollowings, analyticsDataSet.context.followings)
        await analytics.uaPage.clickFollowings(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickFollowings, analyticsDataSet.context.followings)
        await analytics.uaPage.clickFollowings(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickFollowings, analyticsDataSet.context.followings)

    })

    test('Pageview all streams', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewAllStreams(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.pageviewAllStreams, analyticsDataSet.context.allStreams)
        await analytics.uaPage.pageviewAllStreams(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.pageviewAllStreams, analyticsDataSet.context.allStreams)
        await analytics.uaPage.pageviewAllStreams(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.pageviewAllStreams, analyticsDataSet.context.allStreams)

    })

    test('Click leaderboard', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickLeaderboard(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickLeaderboard, analyticsDataSet.context.allStreams)
        await analytics.uaPage.clickLeaderboard(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickLeaderboard, analyticsDataSet.context.allStreams)

    })

    test('Click close shop', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickCloseShop(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickCloseShop, analyticsDataSet.context.chat)
        await analytics.uaPage.clickCloseShop(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickCloseShop, analyticsDataSet.context.chat)

    })

    test('Pageview no internet', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewNoInternet(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.pageviewNoInternet, analyticsDataSet.context.noInternet)
        await analytics.uaPage.pageviewNoInternet(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.pageviewNoInternet, analyticsDataSet.context.noInternet)

    })

    test('Show start premium gifts', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showStartPremiumGifts(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showStartPremiumGifts, analyticsDataSet.context.startStream)
        await analytics.uaPage.showStartPremiumGifts(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showStartPremiumGifts, analyticsDataSet.context.startStream)

    })

    test('Click start premium Gifts', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickStartPremiumGifts(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickStartPremiumGifts, analyticsDataSet.context.startStream)
        await analytics.uaPage.clickStartPremiumGifts(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickStartPremiumGifts, analyticsDataSet.context.startStream)

    })

    test('Show invite top gifters', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showInviteTopGifters(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showInviteTopGifters, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.showInviteTopGifters(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showInviteTopGifters, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.showInviteTopGifters(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.showInviteTopGifters, analyticsDataSet.context.streamersStream)

    })

    test('Click invite top gifters', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickInviteTopGifters(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickInviteTopGifters, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.clickInviteTopGifters(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickInviteTopGifters, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.clickInviteTopGifters(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickInviteTopGifters, analyticsDataSet.context.streamersStream)

    })

    test('Show invites sent', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showInvitesSent(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showInvitesSent, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.showInvitesSent(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showInvitesSent, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.showInvitesSent(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.showInvitesSent, analyticsDataSet.context.streamersStream)

    })

    test('Show popup end stream', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showPopupEndStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showPopupEndStream, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.showPopupEndStream(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showPopupEndStream, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.showPopupEndStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.showPopupEndStream, analyticsDataSet.context.streamersStream)

    })

    test('Show popup end premium', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showPopupEndPremium(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showPopupEndPremium, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.showPopupEndPremium(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showPopupEndPremium, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.showPopupEndPremium(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.showPopupEndPremium, analyticsDataSet.context.streamersStream)

    })

    test('Click close stream', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickCloseStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickCloseStream, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.clickCloseStream(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickCloseStream, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.clickCloseStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickCloseStream, analyticsDataSet.context.streamersStream)

    })

    test('Click preview stream', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickPreviewStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickPreviewStream, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.clickPreviewStream(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickPreviewStream, analyticsDataSet.context.streamersStream)

    })

    test('Pageview preview stream', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewPreviewStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.pageviewPreviewStream, analyticsDataSet.context.startStream)
        await analytics.uaPage.pageviewPreviewStream(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.pageviewPreviewStream, analyticsDataSet.context.startStream)

    })

    test('Pageview go live', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewGoLive(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.pageviewGoLive, analyticsDataSet.context.startStream)
        await analytics.uaPage.pageviewGoLive(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.pageviewGoLive, analyticsDataSet.context.startStream)

    })

    test('Click go live', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickGoLive(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickGoLive, analyticsDataSet.context.startStream)
        await analytics.uaPage.clickGoLive(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickGoLive, analyticsDataSet.context.startStream)

    })

    test('Show inappropriate title', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showInappropriateTitle(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showInappropriateTitle, analyticsDataSet.context.startStream)
        await analytics.uaPage.showInappropriateTitle(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showInappropriateTitle, analyticsDataSet.context.startStream)

    })

    test('Show set photo', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showSetPhoto(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showSetPhoto, analyticsDataSet.context.startStream)
        await analytics.uaPage.showSetPhoto(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showSetPhoto, analyticsDataSet.context.startStream)

    })

    test('Click set photo', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickSetPhoto(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickSetPhoto, analyticsDataSet.context.startStream)
        await analytics.uaPage.clickSetPhoto(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickSetPhoto, analyticsDataSet.context.startStream)

    })

    test('Start beauty filter download', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.startBeautyFilterDownload(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", '', '')
        await analytics.uaPage.startBeautyFilterDownload(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", '', '')

    })

    test('Beauty filter download success', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.beautyFilterDownloadSuccess(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", '', '')
        await analytics.uaPage.beautyFilterDownloadSuccess(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", '', '')

    })

    test('Beauty filter download failed', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.beautyFilterDownloadFailed(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", '', '')
        await analytics.uaPage.beautyFilterDownloadFailed(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", '', '')

    })

    test('New stream started', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.newStreamStarted(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.newStreamStarted, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.newStreamStarted(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.newStreamStarted, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.newStreamStarted(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.newStreamStarted, analyticsDataSet.context.streamersStream)

    })

    test('Click end stream', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickEndStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickEndStream, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.clickEndStream(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickEndStream, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.clickEndStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickEndStream, analyticsDataSet.context.streamersStream)

    })

    test('Сlick pause stream', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickPauseStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickPauseStream, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.clickPauseStream(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickPauseStream, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.clickPauseStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickPauseStream, analyticsDataSet.context.streamersStream)

    })

    test('Stream shared', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.streamShared(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.streamShared, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.streamShared(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.streamShared, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.streamShared(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.streamShared, analyticsDataSet.context.streamersStream)

    })

    test('Click choose sticker', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickChooseSticker(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickChooseSticker, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.clickChooseSticker(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickChooseSticker, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.clickChooseSticker(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickChooseSticker, analyticsDataSet.context.streamersStream)

    })

    test('Show add sticker text', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showAddStickerText(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showAddStickerText, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.showAddStickerText(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showAddStickerText, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.showAddStickerText(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.showAddStickerText, analyticsDataSet.context.streamersStream)

    })

    test('Click add sticker text', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickAddStickerText(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickAddStickerText, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.clickAddStickerText(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickAddStickerText, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.clickAddStickerText(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickAddStickerText, analyticsDataSet.context.streamersStream)

    })

    test('Show inappropriate sticker text', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showInappropriateStickerText(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showInappropriateStickerText, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.showInappropriateStickerText(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showInappropriateStickerText, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.showInappropriateStickerText(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.showInappropriateStickerText, analyticsDataSet.context.streamersStream)

    })

    test('Show add sticker', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showAddSticker(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showAddSticker, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.showAddSticker(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showAddSticker, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.showAddSticker(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.showAddSticker, analyticsDataSet.context.streamersStream)

    })

    test('Show sticker added', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showStickerAdded(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showStickerAdded, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.showStickerAdded(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showStickerAdded, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.showStickerAdded(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.showStickerAdded, analyticsDataSet.context.streamersStream)

    })

    test('Click change sticker', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickChangeSticker(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickChangeSticker, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.clickChangeSticker(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickChangeSticker, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.clickChangeSticker(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickChangeSticker, analyticsDataSet.context.streamersStream)

    })

    test('Click delete desired gift', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickDeleteDesiredGift(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickDeleteDesiredGift, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.clickDeleteDesiredGift(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickDeleteDesiredGift, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.clickDeleteDesiredGift(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickDeleteDesiredGift, analyticsDataSet.context.streamersStream)

    })

    test('Click beauty filter', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickBeautyFilter(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickBeautyFilter, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.clickBeautyFilter(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickBeautyFilter, analyticsDataSet.context.streamersStream)

    })

    test('Show edit beauty filter', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showEditBeautyFilter(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", '', '')
        await analytics.uaPage.showEditBeautyFilter(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", '', '')

    })

    test('Show beauty filter added', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showBeautyFilterAdded(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", '', '')
        await analytics.uaPage.showBeautyFilterAdded(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", '', '')

    })

    test('Beauty filter error', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.beautyFilterError(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", '', '')
        await analytics.uaPage.beautyFilterError(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", '', '')
    })

    test('Show end stream', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showEndStream(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showEndStream, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.showEndStream(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showEndStream, analyticsDataSet.context.streamersStream)

    })

    test('Beauty feedback', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.beautyFeedback(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", '', '')
        await analytics.uaPage.beautyFeedback(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", '', '')

    })

    test('Сlick end confirmation', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickEndConfirmation(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickEndConfirmation, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.clickEndConfirmation(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickEndConfirmation, analyticsDataSet.context.streamersStream)

    })

    test('Show broadcast ended', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showBroadcastEnded(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showBroadcastEnded, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.showBroadcastEnded(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showBroadcastEnded, analyticsDataSet.context.streamersStream)

    })

    test('Click change stream type', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickChangeStreamType(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickChangeStreamType, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.clickChangeStreamType(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickChangeStreamType, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.clickChangeStreamType(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickChangeStreamType, analyticsDataSet.context.streamersStream)
    })

    test('Show invite streamer', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showInviteStreamer(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showInviteStreamer, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.showInviteStreamer(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showInviteStreamer, analyticsDataSet.context.streamersStream)
    })

    test('Show streamer invited', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showStreamerInvited(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showStreamerInvited, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.showStreamerInvited(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showStreamerInvited, analyticsDataSet.context.streamersStream)
    })

    test('Click invite streamer answer', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickInviteStreamerAnswer(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickInviteStreamerAnswer, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.clickInviteStreamerAnswer(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickInviteStreamerAnswer, analyticsDataSet.context.streamersStream)
    })

    test('Show invite streamer request', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showInviteStreamerRequest(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showInviteStreamerRequest, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.showInviteStreamerRequest(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showInviteStreamerRequest, analyticsDataSet.context.streamersStream)
    })

    test('Show invite streamer accepted', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showInviteStreamerAccepted(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showInviteStreamerAccepted, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.showInviteStreamerAccepted(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showInviteStreamerAccepted, analyticsDataSet.context.streamersStream)
    })

    test('Show invite streamer rejected', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showInviteStreamerRejected(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showInviteStreamerRejected, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.showInviteStreamerRejected(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showInviteStreamerRejected, analyticsDataSet.context.streamersStream)
    })

    test('Show battle results', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showBattleResults(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showBattleResults, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.showBattleResults(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showBattleResults, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.showBattleResults(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.showBattleResults, analyticsDataSet.context.streamersStream)
    })

    test('Swipe tutorial', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.swipeTutorial(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.swipeTutorial, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.swipeTutorial(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.swipeTutorial, analyticsDataSet.context.watchersStream)
    })

    test('Swipe ui', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.swipeUi(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.swipeUi, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.swipeUi(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.swipeUi, analyticsDataSet.context.watchersStream)
    })

    test('Stream swipe', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.streamSwipe(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.streamSwipe, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.streamSwipe(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.streamSwipe, analyticsDataSet.context.watchersStream)
    })

    test('Show stream paused', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showStreamPaused(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showStreamPaused, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.showStreamPaused(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showStreamPaused, analyticsDataSet.context.watchersStream)
    })

    test('Show popup follow', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showPopupFollow(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showPopupFollow, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.showPopupFollow(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showPopupFollow, analyticsDataSet.context.watchersStream)
    })

    test('Click message', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickMessage(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickMessage, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.clickMessage(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickMessage, analyticsDataSet.context.watchersStream)
    })

    test('Click share', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickShare(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickShare, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.clickShare(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickShare, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.clickShare(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickShare, analyticsDataSet.context.watchersStream)
    })

    test('Show profile preview', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showProfilePreview(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showProfilePreview, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.showProfilePreview(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showProfilePreview, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.showProfilePreview(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.showProfilePreview, analyticsDataSet.context.watchersStream)
    })

    test('Click block', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickBlock(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickBlock, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.clickBlock(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickBlock, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.clickBlock(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickBlock, analyticsDataSet.context.watchersStream)
    })

    test('User blocked', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.userBlocked(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.userBlocked, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.userBlocked(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.userBlocked, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.userBlocked(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.userBlocked, analyticsDataSet.context.watchersStream)
    })

    test('Click report', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickReport(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickReport, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.clickReport(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickReport, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.clickReport(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickReport, analyticsDataSet.context.watchersStream)
    })

    test('Report send', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.reportSend(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.reportSend, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.reportSend(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.reportSend, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.reportSend(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.reportSend, analyticsDataSet.context.watchersStream)
    })

    test('Show push invite to premium', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showPushInviteToPremium(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showPushInviteToPremium, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.showPushInviteToPremium(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showPushInviteToPremium, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.showPushInviteToPremium(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.showPushInviteToPremium, analyticsDataSet.context.watchersStream)
    })

    test('Show push invite to room', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.showPushInviteToRoom(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.showPushInviteToRoom, analyticsDataSet.context.push)
        await analytics.uaPage.showPushInviteToRoom(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.showPushInviteToRoom, analyticsDataSet.context.push)
        await analytics.uaPage.showPushInviteToRoom(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.showPushInviteToRoom, analyticsDataSet.context.push)
    })

    test('Click translate', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickTranslate(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickTranslate, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.clickTranslate(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickTranslate, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.clickTranslate(apiUrl.qaEnvUrl, user.userToken, user.id, "Web", analyticsDataSet.events.clickTranslate, analyticsDataSet.context.watchersStream)
    })

    test('Gift shop swipe', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.giftShopSwipe(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.giftShopSwipe, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.giftShopSwipe(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.giftShopSwipe, analyticsDataSet.context.watchersStream)
    })

    test('Click chat messages', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.clickChatMessages(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.clickChatMessages, analyticsDataSet.context.streamersStream)
        await analytics.uaPage.clickChatMessages(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.clickChatMessages, analyticsDataSet.context.streamersStream)
    })

    test('Pageview stream ended', async () => {
        const apiContext = await request.newContext()
        const analytics = new Analytics(apiContext)
        await analytics.uaPage.pageviewStreamEnded(apiUrl.qaEnvUrl, user.userToken, user.id, "Android", analyticsDataSet.events.pageviewStreamEnded, analyticsDataSet.context.watchersStream)
        await analytics.uaPage.pageviewStreamEnded(apiUrl.qaEnvUrl, user.userToken, user.id, "iOS", analyticsDataSet.events.pageviewStreamEnded, analyticsDataSet.context.watchersStream)
    })
})

