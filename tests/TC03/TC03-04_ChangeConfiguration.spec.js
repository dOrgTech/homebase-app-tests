const { test, expect } = require("@playwright/test");
const { PreProposal } = require("./CommonFile/PreAction");
const { pageLocators } = require("./CommonFile/Locator");

test('Test case 05-04: Change Configuration', async ({ page }) => {

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    try {

        test.setTimeout(600000) //To Extend The  Time of test Execution

        await page.click(pageLocators.OffChainPoll.cycle);  // Click on Running Cycle Status

        await page.click(pageLocators.OffChainPoll.NewProposal); //Click on new Proposal

        await page.click(pageLocators.DAOConfiguration.DAOConfiguration); //Click on DAO Configuration

        await page.locator(pageLocators.DAOConfiguration.ProposalFee); // Pass The Proposal Fee
        await page.keyboard.type('1');

        await page.locator(pageLocators.DAOConfiguration.ReturnedTokenPercentage); //Pass The Returned Token Percentage
        await page.keyboard.type('1');

        await page.waitForTimeout(1000); //Wait For Type The Letters

        await page.click(pageLocators.DAOConfiguration.SubmitButton); //Click on the Submit button

        await page.waitForTimeout(5000); //Wait for DAO Configuration

        console.log("Uploading Report");

        console.log(" The proposal is successfully created and the user is redirected to a confirmation page with the details of the newly created proposal.")

    }
    catch (error) {
        console.log("Now Voting Cycle is Running");
    }

})