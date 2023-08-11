const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreAction");
const { pageLocators } = require("../CommonFile/Locator");

test('Test case 2: Vote On Off Chain Proposal ', async ({ page }) => {

    console.log('Extending Test Case timeout to 10 minutes');

    test.setTimeout(10 * 60 * 1000); //To extend the time of test execution

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    await page.click(pageLocators.VoteOnOffChainPoll.ProposalName); //Click on the Proposal Name 

    await page.click(pageLocators.VoteOnOffChainPoll.Option1); //Click On Option 1

    await page.click(pageLocators.VoteOnOffChainPoll.CastYourVote); //Submit Your Votes

    console.log("The vote is successfully recorded and the user is redirected to a confirmation page with the details of the vote.");

})