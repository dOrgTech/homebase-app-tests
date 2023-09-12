const { test } = require("@playwright/test");
const { pageLocators } = require ("./Locator");
const { changeNetwork } = require("./Action");

async function PreProposal(page){

    test.setTimeout(5 * 60 * 1000); //Extending Test Case timeout to 5 minutes
    
    await changeNetwork(page);   //PreConditions Open URL and Selecting the Ghost-net

    await page.click(pageLocators.OffChainPoll.DAO); //Click on Mask DAO

    await page.click(pageLocators.OffChainPoll.Proposal); //Click on Proposal
    
}


module.exports= {
    PreProposal
}