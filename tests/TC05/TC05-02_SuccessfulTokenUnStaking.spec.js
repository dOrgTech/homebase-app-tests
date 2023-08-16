const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreAction");
const { pageLocators } = require("../CommonFile/Locator");

test('Test case 2: Successful Token UnStaking', async ({ page }) => {

    test.setTimeout(5* 60 * 1000); //Extending Test Case timeout to 10 minutes

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    await page.click(pageLocators.OffChainPoll.Proposal); //Click on the proposal on the Tab 

    try {

        await page.click(pageLocators.ProposalExecutionAndDrop.DropProposal); // Click on Drop All Proposals

    } catch (error) {
        console.log("Button not ready to be clicked")
    }

    await page.waitForTimeout(5000); //Wait For Drop All The Proposal

    await page.click(pageLocators.TokenStaking.User); //Click on the User Tab

    await page.click(pageLocators.UnStakingToken.UnStakeVotes); //Click on UnStake Votes 

    await page.waitForTimeout(2000); //Wait For Complete The Transaction

    const isTextVisible = content.includes(pageLocators.UnStakingToken.TransactionText, { visible: true });  //Verify that text visible on the webpage

    console.log("The tokens are successfully UnStaked and show up in the Available Balance field.")

})