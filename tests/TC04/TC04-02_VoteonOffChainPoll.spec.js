const { test, expect } = require("@playwright/test");
const { pageLocators } = require("../CommonFile/Locator");
const { PreProposal } = require("../CommonFile/PrePoposal");

test('Test case 04-02: Vote On Off Chain Proposal ', async ({ page }) => {

    //To extend the time of test execution
    test.setTimeout(120000);

    // Selecting DAO for proposal creation
    await PreProposal(page);

    try {
        //Click on the Proposal Name  
        await page.getByRole('heading', { name: pageLocators.VoteOnOffChainPoll.ProposalName }).first().click();

        //Click On Option 1
        await page.getByText(pageLocators.VoteOnOffChainPoll.Option1).first().click();

        // to check if Cast your vote button is enabled
        const isbutton = await page.getByText(pageLocators.VoteOnOffChainPoll.CastYourVote);
        await expect(isbutton).toBeVisible();
        
        //Submit Your Votes
        await isbutton.click();

        await page.waitForTimeout(3000);

        const validateText = await page.getByText(pageLocators.VoteOnOffChainPoll.VoteVerify);
        await expect(validateText).toBeVisible;

        console.log("The vote is successfully casted.");
    }
    catch(error){
        console.log("Error: ", error);
    }
    
    

})