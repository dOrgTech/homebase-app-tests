const { test } = require("@playwright/test");
const { pageLocators } = require ("./Locator");
const { changeNetwork } = require("./Action");

async function PreProposal(page){

    console.log('Extending Test Case timeout to 10 minutes');
  
    test.setTimeout(10 * 60* 1000); //To extend the time of test execution
    
    await changeNetwork(page);   //PreConditions Open URL and Selecting the Ghost-net

    await page.click(pageLocators.OffChainPoll.ExampleDAO); //Click on Mask DAO

    await page.click(pageLocators.OffChainPoll.Proposal); //Click on Proposal
    
}


module.exports= {
    PreProposal
}