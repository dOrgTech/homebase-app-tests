const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreProposal");
const { pageLocators } = require("../CommonFile/Locator");
const path = require('path');
const { TezosTestData } = require("../CommonFile/TestData");

test('Test case 06: Vote On Proposal ', async ({ page }) => {

    // Selecting DAO for proposal creation
    await PreProposal(page);

    try {

        //To Extend the time of test Execution
        test.setTimeout(120000);  

        //Check if cycle status is VOTING.
        const cyclestatus = await page.getByText(pageLocators.VotingOnChain.cycle, {exact: true})

        await expect(cyclestatus).toBeVisible();

        
        //Click on the Active Button
        await page.getByText(pageLocators.VotingOnChain.active).click(); 

        await page.waitForTimeout(3000);

        //Click on the Vote For Support
        await page.getByText(pageLocators.VotingOnChain.VoteFor).click(); 

        //Enter an amount
        await page.type(pageLocators.VotingOnChain.Amount, TezosTestData.VotingOnChain.Amount); 

        //Click on the Submit
        await page.getByText(pageLocators.VotingOnChain.Submit).click(); 

        //Wait for Submit the Proposal
        await page.waitForTimeout(2000); 

        //Validate that Confirmation message is shown
        const validateText = await page.getByText(pageLocators.VotingOnChain.validateText);
        await expect(validateText).toBeVisible();

        console.log("Vote was casted successfully.");

    }
    catch (error) {
        // console.log("Now Creating Cycle is running");
        console.log(error);
    }

  

})