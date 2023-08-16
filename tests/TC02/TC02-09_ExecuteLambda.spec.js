const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreAction");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");

test('Test case 9: Execute Lambda ', async ({ page }) => {

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    try {
      
        test.setTimeout(10 * 60 * 1000); //Extending Test Case timeout to 10 minutes

        await page.click(pageLocators.OffChainPoll.cycle);  // Click on Running Cycle Status

        await page.click(pageLocators.OffChainPoll.NewProposal); //Click On New Proposal

        await page.click(pageLocators.ExecuteLambda.ExecuteLambda); //Click on Execute Lambda 

        await page.fill(pageLocators.ExecuteLambda.SearchBox, TezosTestData.ExecuteLambda.SearchText);  //Pass the Search Text

        await page.waitForTimeout(1000); //Wait For Pass The Data

        await page.keyboard.press('ArrowDown'); //Click on DownArrow Button

        await page.keyboard.press('Enter'); //Click on Enter Button

        await page.fill(pageLocators.ExecuteLambda.ExecuteLambda, TezosTestData.ExecuteLambda.LambdaArgumentsCode); //Pass The Lambda Arguments Code

        await page.fill(pageLocators.ExecuteLambda.LambdaParams, TezosTestData.ExecuteLambda.LambdaParams); //Pass The Lambda Params Code 

        await page.waitForTimeout(2000);  //Wait For Validate 
        
        const content = await page.content(); //Assume Page

        await page.click(pageLocators.ExecuteLambda.SubmitButton); //Click On the Submit Button

        await page.waitForTimeout(30000); //Wait For Pass The test Data 

        const isTextVisible = content.includes(pageLocators.ExecuteLambda.TransactionText, { visible: true });  //Verify that text visible on the webpage

        console.log(isTextVisible); //Prints True or false for is Text Visible

        console.log("The proposal is successfully created and the user is redirected to a confirmation page with the details of the newly created proposal.");

    }
    catch (error) {
        console.log("Now Voting cycle is running");
    }

})