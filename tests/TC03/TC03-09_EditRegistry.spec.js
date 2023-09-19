const { test, expect } = require("@playwright/test");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");
const { PreProposal } = require("../CommonFile/PrePoposal");

test('Test case 03-09: Edit Registry', async ({ page }) => {

    // Selecting DAO for proposal creation
    await PreProposal(page);

    try {

        //To Extend the time of test Execution
        test.setTimeout(120000);

        //Check if cycle status is CREATING
        const cyclestatus = await page.getByText(pageLocators.ProposalCreation.Cycle)

        await expect(cyclestatus).toBeVisible();

        //Click on Registry
        await page.getByText(pageLocators.EditRegistry.Registry).click(); 

        // Click On the New Registry item
        await page.getByText(pageLocators.EditRegistry.NewItem).click(); 

        // Enter The Key For Registry
        await page.type(pageLocators.EditRegistry.Key,TezosTestData.EditRegistry.Key); 

        //Enter The Value
        await page.type(pageLocators.EditRegistry.Value, TezosTestData.EditRegistry.Value); 

        //Pass The Agora Post ID
        await page.locator(pageLocators.TransferToken.AgoraPostID).click();
        await page.keyboard.press('Backspace');
        await page.keyboard.type(TezosTestData.TransferToken.AgoraPostID);
        
        await page.waitForTimeout(5000);

        //Click On Submit Button
        await page.getByText(pageLocators.TransferToken.SubmitButton).click();

        await page.waitForTimeout(30000);  

        //Verify POPUP text is visible 
        const validateText = await page.getByText(pageLocators.EditRegistry.verifyText);
        await expect(validateText).toBeVisible();
        
        console.log(" The proposal is successfully created and the user is redirected to a confirmation page with the details of the newly created proposal.");

    }
    catch (error) {
        console.log("Error: ", error);
    }

   

})

