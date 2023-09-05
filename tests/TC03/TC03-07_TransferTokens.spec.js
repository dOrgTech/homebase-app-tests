const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreProposal");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");

test('Test case 05-07: Transfer Tokens', async ({ page }) => {

    // Selecting DAO for proposal creation
    await PreProposal(page);

    try {

        //To Extend the time of test Execution
        test.setTimeout(120000); 

        //Check if cycle status is CREATING
        const cyclestatus = await page.getByText(pageLocators.ProposalCreation.Cycle)

        await expect(cyclestatus).toBeVisible();

        //Click on Treasury
        await page.getByText(pageLocators.TransferToken.Treasury).click();  

        //Click on New Transfer
        await page.getByText(pageLocators.TransferToken.NewTransfer).click(); 

        //Enter Recipient Address
        await page.type(pageLocators.TransferToken.Recipient, TezosTestData.TransferToken.RecipientAddress); 

        //Click on Asset Button
        await page.locator(pageLocators.TransferToken.Asset).click(); 

        //Wait For Locate The Token
        await page.waitForTimeout(2000);

        await page.getByRole('option', { name: pageLocators.TransferToken.TST }).click();

        //Click on DownArrow Button
        // await page.keyboard.press('ArrowDown'); 
        // await page.keyboard.press('Enter'); 

        //Pass The Amount Wants to Transfer
        await page.locator(pageLocators.TransferToken.Amount).click(); 
        await page.keyboard.press('Backspace');
        await page.keyboard.type(TezosTestData.TransferToken.Amount);

        //Pass The Agora Post ID
        await page.locator(pageLocators.TransferToken.AgoraPostID).click();
        await page.keyboard.press('Backspace');
        await page.keyboard.type(TezosTestData.TransferToken.AgoraPostID);

        await page.waitForTimeout(5000); 

        //Click On Submit Button
        await page.getByText(pageLocators.TransferToken.SubmitButton).click();

        await page.waitForTimeout(30000); 

        //Verify POPUP text is visible 
        const validateText = await page.getByText(pageLocators.TransferToken.verifyText);
        await expect(validateText).toBeVisible();

        console.log(" The proposal is successfully created and the user is redirected to a confirmation page with the details of the newly created proposal.")

    }
    catch (error) {
        console.log("Error: ", error);
    }

})