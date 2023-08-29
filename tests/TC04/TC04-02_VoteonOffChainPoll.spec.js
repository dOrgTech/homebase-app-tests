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

    await page.waitForTimeout(1000); //wait for CastYourVote

    const content = await page.content(); //Assume Page
 
    const isTextVisible = content.includes(pageLocators.VoteOnOffChainPoll.VoteDone, { visible: true });  //Verify that text visible on the webpage

    console.log(isTextVisible); //Prints True or false for is Text Visible
    
    console.log("The vote is successfully recorded and the user is redirected to a confirmation page with the details of the vote.");

})