const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreAction");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");


test('Test case 2: Drop the Active proposal',    async ({ page, browserName }) => {
    if (browserName !== 'chromium') {
      return;
    }

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    try {

        test.setTimeout( 20* 60 * 1000); //Extending Test Case timeout to 10 minutes

        await page.click(pageLocators.VoteOnProposal.VotingCycle);  // Click on Running Cycle Status
        
        await page.click(pageLocators.VoteOnProposal.Active); //Click on the Active Button

        await page.click(pageLocators.ProposalDrop.ProposalDrop); //Click on the Drop Proposal

        await page.waitForTimeout(30000); //wait for the transaction

        const content = await page.content(); //Assume Page

        const isTextVisible = content.includes(pageLocators.ProposalDrop.TransactionText, { visible: true });  //Verify that text visible on the webpage

        console.log(isTextVisible); //Prints True or false for is Text Visible
        
    }
    catch (error) {
        console.log("Now Creating Cycle is running");
    }

})