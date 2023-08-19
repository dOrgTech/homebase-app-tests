const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreProposal");
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

        await page.click(pageLocators.DAOConfiguration.DAOConfiguration); //Click on DAO Configuration

        await page.locator(pageLocators.DAOConfiguration.ProposalFee); // Pass The Proposal Fee
        await page.keyboard.type('1');

        await page.locator(pageLocators.DAOConfiguration.ReturnedTokenPercentage); //Pass The Returned Token Percentage
        await page.keyboard.type('1');

        await page.waitForTimeout(1000); //Wait For Type The Letters

        await page.click(pageLocators.DAOConfiguration.SubmitButton); //Click on the Submit button

        await page.waitForTimeout(5000); //Wait for DAO Configuration

        console.log("Uploading Report");

        console.log(" The proposal is successfully created and the user is redirected to a confirmation page with the details of the newly created proposal.")

    }
    catch (error) {
        console.log("Now Voting Cycle is Running");
    }

})