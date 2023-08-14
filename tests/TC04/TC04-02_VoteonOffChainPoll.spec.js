const { test, expect } = require("@playwright/test");
const { pageLocators } = require("../CommonFile/Locator");
const { PreVoteOnOffChainPoll } = require("../CommonFile/PreVoteOnOffChainPoll");

test('Test case 2: Vote On Off Chain Proposal ', async ({ page }) => {

    test.setTimeout(10 * 60 * 1000); //Extending Test Case timeout to 10 minutes

    await PreVoteOnOffChainPoll(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    await page.click(pageLocators.VoteOnOffChainPoll.ProposalName); //Click on the Proposal Name 

    await page.click(pageLocators.VoteOnOffChainPoll.Option1); //Click On Option 1

    await page.click(pageLocators.VoteOnOffChainPoll.CastYourVote); //Submit Your Votes

    console.log("The vote is successfully recorded and the user is redirected to a confirmation page with the details of the vote.");

})