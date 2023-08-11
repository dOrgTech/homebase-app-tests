const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreAction");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");

test('Test case 08: Off Chain Poll Proposal Creation', async ({ page }) => {

    test.setTimeout(600000);  //To Extend the time of test Execution

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    try {

        await page.click(pageLocators.OffChainPoll.cycle);  // Click on Running Cycle Status

        await page.click(pageLocators.OffChainPoll.NewProposal); //Click on new Proposal

        await page.click(pageLocators.OffChainPoll.OffChainPoll);  //Click on Off Chain Poll

        await page.type(pageLocators.OffChainPoll.ProposalTitle, TezosTestData.OffChainPoll.ProposalTitle);  //Pass the Proposal Title

        await page.type(pageLocators.OffChainPoll.ShortDescription, TezosTestData.OffChainPoll.ShortDescription); //Pass the Short Description

        await page.type(pageLocators.OffChainPoll.ExternalLink, TezosTestData.OffChainPoll.ExternalLink);  //Pass the External Link

        await page.click(pageLocators.OffChainPoll.multipleChoice); // Click on Multiple Choice

        await page.type(pageLocators.OffChainPoll.Choice1, TezosTestData.OffChainPoll.Choice1); //Pass the Choice 1 Data

        await page.click(pageLocators.OffChainPoll.AddChoice); //Click on Add Choice

        await page.type(pageLocators.OffChainPoll.Choice2, TezosTestData.OffChainPoll.Choice2); //Pass The Choice 2 Data 

        await page.type(pageLocators.OffChainPoll.DD, TezosTestData.OffChainPoll.DD); //Pass The Date 

        await page.type(pageLocators.OffChainPoll.HH, TezosTestData.OffChainPoll.HH); //Pass The Hours

        await page.type(pageLocators.OffChainPoll.MM, TezosTestData.OffChainPoll.MM); //Pass The Minute

        await page.click(pageLocators.OffChainPoll.CreateProposalButton); //Click on the Create Proposal Button

        await page.waitForSelector(pageLocators.OffChainPoll.CreateText, { visible: true}); //Wait for Text Visible on Webpage

        console.log("The poll is successfully created and the user is redirected to a confirmation page with the details of the newly created poll.")

    }  catch (error) {
        console.error('Error:', error);
    }

   
})