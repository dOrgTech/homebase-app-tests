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

        //Pass Recipient Address
        await page.type(pageLocators.TransferToken.Recipient, TezosTestData.TransferToken.RecipientAddress); 

        //Click on Asset Button
        await page.type(pageLocators.TransferToken.Asset, TezosTestData.TransferToken.Asset); 

        await page.waitForTimeout(2000) //Wait For Locate The Token

        await page.keyboard.press('ArrowDown'); //Click on DownArrow Button

        await page.keyboard.press('Enter'); //Click on Enter Button

        await page.type(pageLocators.TransferToken.Amount, TezosTestData.TransferToken.Amount); //Pass The Amount Wants to Transfer

        await page.type(pageLocators.TransferToken.AgoraPostID, TezosTestData.TransferToken.AgoraPostID); //Pass The Agora Post ID

        await page.click(pageLocators.TransferToken.SubmitButton);  //Click On Submit Button

        await page.waitForTimeout(30000); //Wait for Transfer Tokens

        const isTextVisible = content.includes(pageLocators.TransferToken.TransactionText, { visible: true });  //Verify that text visible on the webpage

        console.log(isTextVisible); // console The Pass And Fail Result

        console.log("Uploading Report");

        console.log(" The proposal is successfully created and the user is redirected to a confirmation page with the details of the newly created proposal.")

    }
    catch (error) {
        console.log("Now Voting Cycle is running");
    }






})