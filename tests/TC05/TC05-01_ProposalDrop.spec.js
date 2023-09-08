const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreAction");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");

test('Test case 1: Drop the Active proposal', async ({ page }) => {

    test.setTimeout(10 * 60 * 1000); //Extending Test Case timeout to 10 minutes

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    try {

        const waitForVisible = async () => {
            const element = await page.$(pageLocators.VoteOnProposal.VotingCycle);
            if (!element) {
                console.log("Voting cycle element not found. Retrying in 30 seconds.");
                await page.waitForTimeout(30000); // Wait for 30 seconds
                await waitForVisible(); // Retry
            }
            await element.click(); // Click on Running Cycle Status
        };

        await page.waitForSelector(pageLocators.VoteOnProposal.Active, { click: true });

        await page.click(pageLocators.ProposalDrop.ProposalDrop); //Click on the Drop Proposal

        await page.waitForTimeout(30000); //wait for the transaction

        const content = await page.content(); //Assume Page

        const isTextVisible = content.includes(pageLocators.ProposalDrop.TransactionText, { visible: true });  //Verify that text visible on the webpage

        console.log(isTextVisible); //Prints True or false for is Text Visible

    }
    catch (error) {
        console.log("Error: No Proposal to drop");
    }

})