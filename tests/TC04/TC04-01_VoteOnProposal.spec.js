const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreAction");
const { pageLocators } = require("../CommonFile/Locator");
const path = require('path');

test('Test case 06: Vote On Proposal ', async ({ page }) => {

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    try {

        test.setTimeout(600000);  //To Extend the time of test Execution

        await page.click(pageLocators.VoteOnProposal.VotingCycle);  // Click on Running Cycle Status
        
        await page.click(pageLocators.VoteOnProposal.Active); //Click on the Active Button

        await page.click(pageLocators.VoteOnProposal.VoteFor); //Click on the Vote For Support

        await page.click(pageLocators.VoteOnProposal.UseMax); //Click on Use Max

        await page.click(pageLocators.VoteOnProposal.Submit); //Click on the Submit

        await page.waitForTimeout(2000); //Wait for Submit the Proposal

        await page.click(pageLocators.VoteOnProposal.View); //Click on the View Button

        await page.waitForTimeout(1000);

        const elementHandle0 = await page.$(pageLocators.VoteOnProposal.Support); // Find the element 

        const textContent0 = await elementHandle0.textContent();  //get the text from element
        
        console.log(textContent0); //Print the test

        const elementHandle1 = await page.$(pageLocators.VoteOnProposal.Oppose); // Find the element 

        const textContent1 = await elementHandle1.textContent();  //get the text from element
        
        console.log(textContent1); //Print the test

    }
    catch (error) {
        console.log("Now Creating Cycle is running");
    }

  

})