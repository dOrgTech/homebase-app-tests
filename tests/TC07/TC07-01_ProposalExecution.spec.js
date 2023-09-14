const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreAction");
const { pageLocators } = require("../CommonFile/Locator");

test('Test case 1: On-Chain Proposal Execution', async ({ page }) => {

    test.setTimeout(20 * 60 * 1000); //Extending Test Case timeout to 20 minutes

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal   

    try {

        await page.click(pageLocators.OffChainPoll.cycle);  // Click on Running Cycle Status

        const timeout = 300000; // 5 minutes in milliseconds

        await page.waitForSelector(pageLocators.ProposalExecution.Execute, { click: true, timeout: 300000 });

        await page.click(pageLocators.ProposalExecution.Execute);  //Click on Execute Button

        const content = await page.content(); //Assume Page

        const isTextVisible = content.includes(pageLocators.ProposalExecution.TransactionText, { visible: true });  //Verify that text visible on the webpage

        console.log(isTextVisible); //Prints True or false for is Text Visible

    }
    catch (error) {
        console.log("Error: No Passed- Executable Proposals");
    }

})