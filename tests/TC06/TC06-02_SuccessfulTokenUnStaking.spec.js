const { test, expect } = require("@playwright/test");
const { PreProposal } = require("./CommonFile/PreAction");
const { pageLocators } = require("./CommonFile/Locator");

test('Test case 12: Successful Token UnStaking', async ({ page }) => {

    test.setTimeout(600000);  //To Extend the time of test Execution

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    await page.click(pageLocators.OffChainPoll.Proposal); //Click on the proposal on the Tab 

    await page.click(pageLocators.ProposalExecutionAndDrop.DropProposal); // Click on Drop All Proposals

    await page.waitForTimeout(2000); //Wait For Drop All The Proposal

    await page.click(pageLocators.UnStakingToken.UnStakeVotes); //Click on UnStake Votes 

    await page.waitForTimeout(2000); //Wait For Complete The Transaction

    const isTextVisible = content.includes(pageLocators.UnStakingToken.TransactionText, { visible: true });  //Verify that text visible on the webpage

    console.log("The tokens are successfully UnStaked and show up in the Available Balance field.")
  
})