const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreProposal");
const { pageLocators } = require("../CommonFile/Locator");

test('Test case 07: Proposal Execution & Drop', async ({ page }) => {

    //To Extend the time of test Execution
    test.setTimeout(120000);

    // Selecting DAO for proposal creation
    await PreProposal(page);   

    try {

        //Check if cycle status is Creating.
        await page.click(pageLocators.ProposalCreation.Cycle);  

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