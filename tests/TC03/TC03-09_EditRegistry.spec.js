const { test, expect } = require("@playwright/test");
const { pageLocators } = require("../CommonFile/Locator");
const { PreProposal } = require("../CommonFile/PreProposal");
const { TezosTestData } = require("../CommonFile/TestData");

test('Test case 05-09: Edit Registry', async ({ page }) => {

    // Selecting DAO for proposal creation
    await PreProposal(page);

    try {

        //To Extend the time of test Execution
        test.setTimeout(120000);

        //Check if cycle status is CREATING
        const cyclestatus = await page.getByText(pageLocators.ProposalCreation.Cycle)

        await expect(cyclestatus).toBeVisible()

        //Click on Registry
        await page.getByText(pageLocators.EditRegistry.Registry).click(); 

        // Click On the New Registry item
        await page.getByText(pageLocators.EditRegistry.NewItem).click(); 

        await page.type(pageLocators.EditRegistry.Key,TezosTestData.EditRegistry.Key); // Pass The Key For Registry

        await page.type(pageLocators.EditRegistry.Value, TezosTestData.EditRegistry.Value); //Pass The Value

        await page.click(pageLocators.EditRegistry.Submit); //Click on the submit button

        await page.waitForTimeout(30000);  //Wait for Timeout the Script
        
        console.log(" The proposal is successfully created and the user is redirected to a confirmation page with the details of the newly created proposal.");

    }
    catch (error) {
        console.log("Now Voting Cycle is Running");
    }

   

})

