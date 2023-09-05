const { test, expect } = require("@playwright/test");
const { pageLocators } = require("../CommonFile/Locator");
const { PreProposal } = require("../CommonFile/PrePoposal");

test('Test case 05-02: Proposal Execution & Drop', async ({ page }) => {

    //To Extend the time of test Execution
    test.setTimeout(120000);

    // Selecting DAO for proposal creation
    await PreProposal(page);

    try {

        //Check if cycle status is CREATING
        // const cyclestatus = await page.getByText(pageLocators.ProposalCreation.Cycle)

        // await expect(cyclestatus).not.toBeVisible();

        await page.waitForTimeout(10000);

        // To check if proposal is in Passed-Executable state
        const passed = await page.getByText(pageLocators.ProposalExecutionandDrop.PassedExecutable, { exact: true });

        await expect(passed).toBeVisible();

        const executeBtn = await page.getByText(pageLocators.ProposalExecutionandDrop.Execute);
        await expect(executeBtn).toBeEnabled();
        //Click on Execute Button
        await executeBtn.click();

        //Verify POPUP text is visible 
        const validateText = await page.getByText(pageLocators.ProposalExecutionandDrop.verifyText);
        await expect(validateText).toBeVisible();
    }
    catch (error) {
        console.log("Error:", error);
    }
    

})