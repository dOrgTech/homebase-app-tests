const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreProposal");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");

test('Test case 05-08: Transfer NFT ', async ({ page }) => {

    // Selecting DAO for proposal creation
    await PreProposal(page);

    try {

        //To Extend the time of test Execution
        test.setTimeout(120000);

        //Check if cycle status is CREATING
        const cyclestatus = await page.getByText(pageLocators.ProposalCreation.Cycle)

        await expect(cyclestatus).toBeVisible()

        //Click on Treasury
        await page.getByText(pageLocators.TransferToken.Treasury).click();  

        //Click on NFTs
        await page.getByText(pageLocators.TransferNFT.NFTs).click();

        //Click on New Transfer
        await page.getByText(pageLocators.TransferToken.NewTransfer).click(); 

        //Enter Recipient Address
        await page.type(pageLocators.TransferToken.Recipient, TezosTestData.TransferToken.RecipientAddress); 
        
        
        //Enter The Agora Post ID
        await page.locator(pageLocators.TransferToken.AgoraPostID).click();
        await page.keyboard.press('Backspace');
        await page.keyboard.type(TezosTestData.TransferToken.AgoraPostID);

        await page.waitForTimeout(3000); 

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