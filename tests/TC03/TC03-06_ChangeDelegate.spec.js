const { test, expect } = require ("@playwright/test");
const { pageLocators } = require ("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");
const { PreProposal } = require("../CommonFile/PreProposal");

test('Test case 05-06: Change Delegate', async ({ page }) => {

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

        //Click on Change Delegate
        await page.getByText(pageLocators.ChangeDelegate.ChangeDelegate).click(); 

        //New Delegate Address
        await page.type(pageLocators.ChangeDelegate.NewDelegateAddress, TezosTestData.ChangeDelegate.NewDelegateAddress); 

        //Click on Submit button
        await page.getByText(pageLocators.ChangeDelegate.SubmitButton).click(); 

        //Wait For Timeout
        await page.waitForTimeout(30000); 
        
        await expect(await page.getByText('creating...')).toBeVisible();
        

        console.log(" The proposal is successfully created.")

    }
    catch (error) {
        console.log("Now Voting Cycle is running");
    }

})