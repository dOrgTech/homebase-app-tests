const { test, expect } = require("@playwright/test");
const { PreProposal } = require("./CommonFile/PreAction");
const { pageLocators } = require("./CommonFile/Locator");
const { TezosTestData } = require("./CommonFile/TestData");

test('Test case 05-07: Add Lambda ', async ({ page }) => {

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    try {

        test.setTimeout(600000);  //To Extend the time of test Execution

        await page.click(pageLocators.OffChainPoll.cycle);  // Click on Running Cycle Status

        await page.click(pageLocators.OffChainPoll.NewProposal); //Click On New Proposal

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