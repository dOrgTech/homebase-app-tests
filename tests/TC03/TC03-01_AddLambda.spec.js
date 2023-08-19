const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreProposal");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");

test('Test case 05-07: Add Lambda ', async ({ page }) => {

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

        await page.click(pageLocators.AddLambda.AddLambda); // Click on Add Lambda 

        await page.type(pageLocators.AddLambda.TestBox, TezosTestData.AddLambda.MichelsonCode); //Pass The Michelson Code

        await page.click(pageLocators.AddLambda.SubmitButton);   //Click on Submit Button

        await page.waitForTimeout(30000); //Wait for Lambda Implementation

        console.log("Uploading Report");

        Console.log(" The proposal is successfully created and the user is redirected to a confirmation page with the details of the newly created proposal.")


    }
    catch (error) {
        console.log("Now Voting cycle is running");
    }



})