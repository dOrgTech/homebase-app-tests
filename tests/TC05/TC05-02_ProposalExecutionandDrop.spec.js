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

        await page.waitForTimeout(5000);

        // To check if proposal is in Passed-Executable state
        const passed = await page.getByText(pageLocators.ProposalExecutionandDrop.PassedExecutable);
        const isexecuteable = await expect(passed).toBeEnabled();
        console.log(isexecuteable);

        await page.waitForTimeout(5000)
        // Click on the Passed - Executeable 
        if (isexecuteable) { 
            console.log("pass1")

            const executeBtn = await page.getByText(pageLocators.ProposalExecutionandDrop.Execute);
            const isclickable = await expect(executeBtn).toBeEnabled();

            //Validate That Button is clickable or not
            if (isclickable) {  
                console.log("pass2") 
                //Click on Execute Button
                await page.executeBtn.click();  
            }
        } else {        
            console.log("failll")
            //Click on drop Expired Proposal
            await page.getByText(pageLocators.ProposalExecutionandDrop.DropExpired).click();   
        }

    }
    catch (error) {
        console.log("Error:", error);
    }

})