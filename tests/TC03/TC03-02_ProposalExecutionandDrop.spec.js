const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreAction");
const { pageLocators } = require("../CommonFile/Locator");

test('Test case 2: On-Chain Proposal Execution & Drop', async ({ page }) => {

    test.setTimeout(30 * 60 * 1000); //Extending Test Case timeout to 10 minutes

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal   

    try {

        await page.click(pageLocators.OffChainPoll.cycle);  // Click on Running Cycle Status

        if (await page.waitForLoadState(pageLocators.ProposalExecutionAndDrop.PassedExecutable)) {  //Click on the Passed - Execute able 

            if (await page.waitForSelector(pageLocators.ProposalExecutionAndDrop.Execute, { click: true })) {     //Validate That Button is clickable or not

                await page.click(pageLocators.ProposalExecutionAndDrop.Execute);  //Click on Execute Button
            }
        } else {        
            await page.click(pageLocators.ProposalExecutionAndDrop.DropExpired);   //Click on drop Expired Proposal
        }

    }
    catch (error) {
        console.log("Error");
    }

})