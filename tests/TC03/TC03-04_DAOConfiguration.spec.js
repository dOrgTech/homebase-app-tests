const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PrePoposal");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");

test('Test case 05-04: DAO Configuration', async ({ page }) => {

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

        //Click on DAO Configuration
        await page.getByText(pageLocators.DAOConfiguration.DAOConfiguration).click(); 

        // Pass The Proposal Fee
        await page.fill(pageLocators.DAOConfiguration.ProposalFee, TezosTestData.DAOConfiguration.ProposalFee)
        
        //Pass The Returned Token Percentage
        await page.fill(pageLocators.DAOConfiguration.ReturnedTokenPercentage, TezosTestData.DAOConfiguration.ReturnedTokenPercentage);

        //Wait For Type The Letters
        await page.waitForTimeout(1000); 

        //Click on the Submit button
        await page.getByText(pageLocators.DAOConfiguration.SubmitButton).click(); 

        //Wait for DAO Configuration
        await page.waitForTimeout(10000); 

        const validateText = await page.getByText('proposal transaction');
        await expect(validateText).toBeVisible();

        console.log(" The proposal is successfully created.")

    }
    catch (error) {
        // console.log("Now Voting Cycle is Running");
        console.log(error);
    }

})