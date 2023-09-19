const { test, expect } = require("@playwright/test");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");
const { PreProposal } = require("../CommonFile/PrePoposal");

test('Test case 05-01: Vote On Proposal ', async ({ page }) => {

    // Selecting DAO for proposal creation
    await PreProposal(page);

    try {

        //To Extend the time of test Execution
        test.setTimeout(160000);

        //Check if cycle status is CREATING
        const cyclestatus = await page.getByText(pageLocators.ProposalCreation.Cycle)

        await expect(cyclestatus).not.toBeVisible();

        //Click on the Active Button
        const activebtn = await page.getByText(pageLocators.VotingOnChain.active, { exact: true });
        const isactive = await expect(activebtn).toBeVisible();
        await activebtn.click();
        await page.waitForTimeout(3000);

        //Click on the Vote For Support
        await page.getByText(pageLocators.VotingOnChain.VoteFor).click();

        //Enter an amount
        await page.type(pageLocators.VotingOnChain.Amount, TezosTestData.VotingOnChain.Amount);

        await page.waitForTimeout(5000)

        //Click on the Submit
        await page.getByText(pageLocators.VotingOnChain.Submit).click();

        //Wait for Submit the Proposal
        await page.waitForTimeout(12000);

        //Validate that Confirmation message is shown
        const validateText = await page.getByText(pageLocators.VotingOnChain.validateText);
        await expect(validateText).toBeVisible();

        console.log("Vote was casted successfully.");

    }
    catch (error) {
        console.log("Error: ", error);
    }



})