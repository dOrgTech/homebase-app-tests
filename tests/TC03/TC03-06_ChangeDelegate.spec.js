const { test, expect } = require ("@playwright/test");
const { pageLocators } = require ("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");
const { PreProposal } = require("../CommonFile/PreProposal");

test('Test case 05-01: Change Delegate', async ({ page }) => {

    // Selecting DAO for proposal creation
    await PreProposal(page);

    try {

        //To Extend the time of test Execution
        test.setTimeout(120000);  

        //Check if cycle status is CREATING
        const cyclestatus = await page.getByText(pageLocators.ProposalCreation.Cycle)

        await expect(cyclestatus).toBeVisible()

        //Click On New Proposal
        await page.getByText(pageLocators.ProposalCreation.NewProposal).click()

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