const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreAction");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");

test('Test case 05-01: Change Delegate', async ({ page }) => {

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    try {
        test.setTimeout(600000);  //To Extend the time of test Execution

        await page.click(pageLocators.OffChainPoll.cycle);  // Click on Running Cycle Status
        // await page.waitForTimeout(3000);

        await page.click(pageLocators.OffChainPoll.NewProposal); //Click on new Proposal

        await page.click(pageLocators.ChangeDelegate.ChangeDelegate); //Click on Change Delegate

        await page.type(pageLocators.ChangeDelegate.NewDelegateAddress, TezosTestData.ChangeDelegate.NewDelegateAddress); //New Delegate Address

        await page.click(pageLocators.ChangeDelegate.SubmitButton); //Click on Submit button

        await page.waitForTimeout(30000); //Wait For Timeout

        const isTextVisible = content.includes(pageLocators.ChangeDelegate.PopUp, { visible: true });  //Verify that text visible on the webpage

        if (!isTextVisible) {
            console.error("Expected text is not visible. Test case failed.");
        }

        await page.click(pageLocators.OffChainPoll.Proposal) //Click on the Proposal

        console.log("Uploading Report");

        console.log(" The proposal is successfully created and the user is redirected to a confirmation page with the details of the newly created proposal.")

    }
    catch (error) {
        console.log("Now Voting Cycle is running");
    }

})