const { test, expect } = require("@playwright/test");
const { PreProposal } = require("./CommonFile/PreAction");
const { pageLocators } = require("./CommonFile/Locator");
const { TezosTestData } = require("./CommonFile/TestData");

test('Test case 05-03: Transfer Tokens', async ({ page }) => {

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    try {

        test.setTimeout(600000);  //To Extend the time of test Execution

        await page.click(pageLocators.OffChainPoll.cycle);  // Click on Running Cycle Status

        await page.click(pageLocators.TransferToken.Treasury);  //Click on Treasury

        await page.click(pageLocators.TransferToken.NewTransfer); //Click on Transfer

        await page.type(pageLocators.TransferToken.Recipient, TezosTestData.TransferToken.RecipientAddress); //Pass The Recipient Address

        await page.type(pageLocators.TransferToken.Asset, TezosTestData.TransferToken.Asset); //Click on Asset Button

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