const { test } = require("@playwright/test");
const { pageLocators } = require ("./Locator");
const { changeNetwork } = require("./Action");

async function PreProposal(page){

    await changeNetwork(page);   //PreConditions Open URL and Selecting the Ghost-net

    await page.click(pageLocators.OffChainPoll.ExampleDAO); //Click on Mask DAO

    await page.click(pageLocators.OffChainPoll.Proposal); //Click on Proposal
    
}


module.exports= {
    PreProposal
}