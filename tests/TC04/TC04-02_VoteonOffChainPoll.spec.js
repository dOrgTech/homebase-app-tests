const { test, expect } = require("@playwright/test");
const { pageLocators } = require("../CommonFile/Locator");
const { PreVoteOnOffChainPoll } = require("../CommonFile/PreVoteOnOffChainPoll");
const { TezosTestData } = require("../CommonFile/TestData");

test('Test case 2: Vote On Off Chain Proposal ', async ({ page }) => {

    await PreVoteOnOffChainPoll(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    await page.waitForTimeout(2000); //Wait for page Load

    await page.click(pageLocators.VoteOnOffChainPoll.ProposalTitle); //Click on the Proposal Name 

    await page.click(pageLocators.VoteOnOffChainPoll.Choice1); //Click On Option 1

    await page.click(pageLocators.VoteOnOffChainPoll.CastYourVote); //Submit Your Votes

    const content = await page.content(); //Assume Page

    await page.waitForSelector(pageLocators.VoteOnOffChainPoll.VoteDone, { visible: true }); //Wait for Text Visible on Webpage

    console.log("The vote is successfully recorded and the user is redirected to a confirmation page with the details of the vote.");

})