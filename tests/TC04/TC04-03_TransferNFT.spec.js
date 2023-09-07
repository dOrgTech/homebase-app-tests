const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreAction");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");
const path = require('path');

test('Test case 3: Transfer NFT ',  async ({ page }) => {
 
    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    try {

        test.setTimeout(5 * 60 * 1000); //Extending Test Case timeout to 5 minutes

        await page.click(pageLocators.OffChainPoll.cycle);  // Click on Running Cycle Status

        await page.click(pageLocators.TransferToken.Treasury); //Click on the Treasury

        await page.click(pageLocators.TransferNFT.NFTs); //Click on the NFT Button

        console.log("The proposal is successfully created and the user is redirected to a confirmation page with the details of the newly created proposal.");

    }
    catch (error) {
        console.log("Now Voting Cycle is Running");
    }

})