const { test, expect } = require('@playwright/test');
const { PreProposal } = require("../CommonFile/PreProposal");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");

test('Test case 08: Off Chain Poll Proposal Creation', async ({ page }) => {

    // Selecting DAO for proposal creation
    await PreProposal(page);

    try {
        //To extend the time of test execution
        test.setTimeout(120000); 

        //Click on new Proposal
        await page.getByText(pageLocators.OffChainPoll.NewProposal).click(); 

        //Click on Off Chain Poll
        await page.getByText(pageLocators.OffChainPoll.OffChainPoll).click();  

        //Pass the Proposal Title
        await page.type(pageLocators.OffChainPoll.ProposalTitle, TezosTestData.OffChainPoll.ProposalTitle);  

        //Pass the Short Description    
        await page.type(pageLocators.OffChainPoll.Description, TezosTestData.OffChainPoll.Description); 

        //Pass the External Link
        await page.type(pageLocators.OffChainPoll.ExternalLink, TezosTestData.OffChainPoll.ExternalLink);  

        // Click on Multiple Choice
        await page.click(pageLocators.OffChainPoll.multipleChoice); 

        //Pass the Choice 1 Data
        await page.type(pageLocators.OffChainPoll.Choice1, TezosTestData.OffChainPoll.Choice1); 

        //Click on Add Choice
        await page.click(pageLocators.OffChainPoll.AddChoice); 

        //Pass The Choice 2 Data 
        await page.type(pageLocators.OffChainPoll.Choice2, TezosTestData.OffChainPoll.Choice2); 

        //Pass The Date 
        await page.type(pageLocators.OffChainPoll.DD, TezosTestData.OffChainPoll.DD); 

        //Pass The Hours
        await page.type(pageLocators.OffChainPoll.HH, TezosTestData.OffChainPoll.HH);

        //Pass The Minute
        await page.type(pageLocators.OffChainPoll.MM, TezosTestData.OffChainPoll.MM); 

        //Click on the Create Proposal Button
        await page.getByText(pageLocators.OffChainPoll.CreateProposalButton).click(); 

        //Wait for Text Visible on Webpage
        const validateText = await page.getByText(pageLocators.OffChainPoll.CreateText)
        await expect (validateText).toBeVisible

        console.log("The poll is successfully created.")

    }  catch (error) {
        console.error('Error:', error);
    }

   
})