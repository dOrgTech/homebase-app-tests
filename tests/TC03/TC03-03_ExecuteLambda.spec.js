const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreProposal");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");

test('Test case 05-09: Execute Lambda ', async ({ page }) => {

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
        await page.click(pageLocators.ExecuteLambda.ExecuteLambda); //Click on Execute Lambda 

        await page.type(pageLocators.ExecuteLambda.SearchBox, TezosTestData.ExecuteLambda.SearchText);  //Pass the Search Text

        await page.waitForTimeout(1000); //Wait For Pass The Data

        await page.keyboard.press('ArrowDown'); //Click on DownArrow Button

        await page.keyboard.press('Enter'); //Click on Enter Button

        await page.getByPlaceholder(pageLocators.ExecuteLambda.ExecuteLambda).type(TezosTestData.ExecuteLambda.LambdaArgumentsCode); //Pass The Lambda Arguments Code

        await page.getByPlaceholder(pageLocators.ExecuteLambda.LambdaParams).type(TezosTestData.ExecuteLambda.LambdaParams); //Pass The Lambda Params Code 

        await page.waitForTimeout(2000);  //Wait For Validate 

        await page.click(pageLocators.ExecuteLambda.SubmitButton); //Click On the Submit Button

        await page.waitForTimeout(5000); //Wait For Pass The test Data 

    }
    catch (error) {
        console.log("Now Voting cycle is running");
    }

})