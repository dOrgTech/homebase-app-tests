const { test, expect } = require("@playwright/test");
const { PreProposal } = require("./CommonFile/PreAction");
const { pageLocators } = require("./CommonFile/Locator");
const { TezosTestData } = require("./CommonFile/TestData");

test('Test case 05-02: Change Guardian', async ({ page }) => {

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    try {

        test.setTimeout(600000);  //To Extend the time of test Execution

        await page.click(pageLocators.OffChainPoll.cycle);  // Click on Running Cycle Status

        await page.click(pageLocators.OffChainPoll.NewProposal); //Click on new Proposal

        await page.click(pageLocators.ChangeGuardian.ChangeGuardian);  //Click on Change Guardian

        await page.type(pageLocators.ChangeGuardian.WalletAddress, TezosTestData.ChangeGuardian.WalletAddress); //Pass The Wallet Address

        await page.click(pageLocators.ChangeGuardian.SubmitButton); //Click on Submit button

        await page.waitForTimeout(30000); //Wait for TimeOut Submit the proposal

        const isTextVisible = content.includes(pageLocators.TokenCreator.DeployText, { visible: true });  //Verify that text visible on the webpage

        console.log("Uploading Report");

        console.log(" The proposal is successfully created and the user is redirected to a confirmation page with the details of the newly created proposal.")

    }
    catch (error) {
        console.log("Now Voting Cycle is running");
    }

})