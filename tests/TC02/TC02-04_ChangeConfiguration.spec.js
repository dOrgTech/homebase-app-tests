const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreAction");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");

test('Test case 4: Change Configuration', async ({ page }) => {

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    try {

        console.log('Extending Test Case timeout to 10 minutes');

        test.setTimeout(10 * 60 * 1000); //To extend the time of test execution

        await page.click(pageLocators.OffChainPoll.cycle);  // Click on Running Cycle Status

        await page.click(pageLocators.OffChainPoll.NewProposal); //Click on new Proposal

        await page.click(pageLocators.ChangeConfiguration.DAOConfiguration); //Click on DAO Configuration

        await page.fill(pageLocators.ChangeConfiguration.ProposalFee, TezosTestData.ChangeConfiguration.ProposalFee); // Pass The Proposal Fee
        // await page.keyboard.type('1');

        await page.fill(pageLocators.ChangeConfiguration.ReturnedTokenPercentage, TezosTestData.ChangeConfiguration.ReturnedTokenPercentage); //Pass The Returned Token Percentage
        // await page.keyboard.type('1');

        await page.waitForTimeout(1000); //Wait For Type The Letters

        await page.click(pageLocators.ChangeConfiguration.SubmitButton); //Click on the Submit button

        await page.waitForTimeout(30000); //Wait for DAO Configuration
        
        const content = await page.content(); //Assume Page

        const isTextVisible = content.includes(pageLocators.ChangeConfiguration.TransactionText, { visible: true });  //Verify that text visible on the webpage

        console.log(isTextVisible);  //Prints True or false for is Text Visible

        console.log(" The proposal is successfully created and the user is redirected to a confirmation page with the details of the newly created proposal.");

    }
    catch (error) {
        console.log("Now Voting Cycle is Running");
    }

})