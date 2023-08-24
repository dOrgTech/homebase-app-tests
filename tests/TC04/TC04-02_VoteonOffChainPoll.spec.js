const { test, expect } = require("@playwright/test");
const { PreProposal } = require("./CommonFile/PreAction");
const { pageLocators } = require("./CommonFile/Locator");

test('Test case 09: Vote On Off Chain Proposal ', async ({ page }) => {

    test.setTimeout(600000);  //To Extend the time of test Execution

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    await page.click(pageLocators.VoteOnOffChainPoll.ProposalName); //Click on the Proposal Name 

    await page.click(pageLocators.VoteOnOffChainPoll.Option1); //Click On Option 1

    await page.click(pageLocators.VoteOnOffChainPoll.CastYourVote); //Submit Your Votes

    console.log("The vote is successfully recorded and the user is redirected to a confirmation page with the details of the vote.");

})