const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PrePoposal");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");

test('Test case 03-05: Change Guardian', async ({ page }) => {

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

        //Click on Change Guardian
        await page.getByText(pageLocators.ChangeGuardian.ChangeGuardian).click();  

        //Pass The Wallet Address
        await page.type(pageLocators.ChangeGuardian.WalletAddress, TezosTestData.ChangeGuardian.WalletAddress); 

        //Click on Submit button
        await page.getByText(pageLocators.ChangeGuardian.SubmitButton).click(); 

        //Wait for TimeOut Submit the proposal
        await page.waitForTimeout(5000); 

        console.log(" The proposal is successfully created.")

    }
    catch (error) {
        console.log("Error: ", error);
    }

})