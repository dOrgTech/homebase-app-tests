const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreAction");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");


test('Test case 3: Drop the Active proposal', async ({ page }) => {

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    try {

        test.setTimeout(7 * 60 * 1000); //Extending Test Case timeout to 7 minutes

        const activeButton = await page.waitForSelector(pageLocators.VoteOnProposal.Active, { click: true });  // Wait for the Active button to become clickable

        if (!activeButton) { const noQuorumButton = await page.waitForSelector(pageLocators.VoteOnProposal.NoQuorum, { click: true }); // If the Active button is not clickable, click on the No Quorum button

        if (noQuorumButton) {
                console.log("Clicked on No Quorum button.");
            } else {
                console.log("No Quorum button clickable.");
            }
        } else {
            console.log("Clicked on Active button.");
        }

        await page.waitForSelector(pageLocators.VoteOnProposal.Expired, { click: true}); 

        await page.waitForSelector(pageLocators.VoteOnProposal.Rejected, { click:true});
        
        await page.click(pageLocators.ProposalDrop.ProposalDrop); //Click on the Drop Proposal

        await page.waitForTimeout(30000); //wait for the transaction

        const content = await page.content(); //Assume Page

        const isTextVisible = content.includes(pageLocators.ProposalDrop.TransactionText, { visible: true });  //Verify that text visible on the webpage

        console.log(isTextVisible); //Prints True or false for is Text Visible

    }
    catch (error) {
        console.log("Error: ");
    }

})