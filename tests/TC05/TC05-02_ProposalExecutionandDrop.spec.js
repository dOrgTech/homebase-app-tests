const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreProposal");
const { pageLocators } = require("../CommonFile/Locator");

test('Test case 05-02: Proposal Execution & Drop', async ({ page }) => {

    //To Extend the time of test Execution
    test.setTimeout(120000);

    // Selecting DAO for proposal creation
    await PreProposal(page);

    try {

        //Check if cycle status is CREATING
        const cyclestatus = await page.getByText(pageLocators.ProposalCreation.Cycle)

        await expect(cyclestatus).not.toBeVisible();

        // To check if proposal is in Passed-Executable state
        const passed = await page.getByText(pageLocators.ProposalExecutionandDrop.PassedExecutable).textContent();
        const isexecuteable = await expect(passed).toBe("Passed - Executable");
        console.log(isexecuteable);

        await page.waitForTimeout(5000)
        // Click on the Passed - Executeable 
        if (isexecuteable) { 

            const execute = await page.getByText(pageLocators.ProposalExecutionandDrop.Execute);

            //Validate That Button is clickable or not
            if (await page.getByText(pageLocators.ProposalExecutionandDrop.Execute, { click: true })) {   
                //Click on Execute Button
                await page.getByText(pageLocators.ProposalExecutionandDrop.Execute).click();  
            }
        } else {        
            //Click on drop Expired Proposal
            await page.getByText(pageLocators.ProposalExecutionandDrop.DropExpired).click();   
        }

    }
    catch (error) {
        console.log("Error:", error);
    }

})