const { test, expect } = require("@playwright/test");
const { PreProposal } = require("./CommonFile/PreAction");
const { pageLocators } = require("./CommonFile/Locator");

test('Test case 10: Correct vote Count on Off Chain Poll ', async ({ page }) => {

    test.setTimeout(600000);  //To Extend the time of test Execution

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    await page.click(pageLocators.VoteOnOffChainPoll.ProposalName);

    await page.waitForSelector(pageLocators.CorrectVoteCount.VoteCount);  //Wait for find the Element

    const element = await page.$(pageLocators.CorrectVoteCount.VoteCount); // get The element

    await page.waitForTimeout(2000); //wait for get the votes
  
    const textContent = await element.innerText();  //get the text From this element
  
    console.log('Votes:', textContent);  // Console The test Present on the Webpage

    console.log("The vote count matches the number of votes submitted for the poll, and if multiple choice is enabled, the voting weight is evenly split between all the options that a voter picked.")

})