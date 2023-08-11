const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreAction");
const { pageLocators } = require("../CommonFile/Locator");

test('Test case 07: Proposal Execution & Drop', async ({ page }) => {

    test.setTimeout(600000);  //To Extend the time of test Execution

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal   

    try {

        await page.click(pageLocators.OffChainPoll.cycle);  // Click on Running Cycle Status

        if (await page.waitForLoadState(pageLocators.ProposalExecutionandDrop.PassedExecutable)) {  //Click on the Passed - Executeable 

            if (await page.waitForSelector(pageLocators.ProposalExecutionandDrop.Execute, { click: true })) {     //Validate That Button is clickable or not

                await page.click(pageLocators.ProposalExecutionandDrop.Execute);  //Click on Execute Button
            }
        } else {        
            await page.click(pageLocators.ProposalExecutionandDrop.DropExpired);   //Click on drop Expired Proposal
        }

    }
    catch (error) {
        console.log("Error");
    }

})