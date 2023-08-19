const { test } = require("@playwright/test");
const { pageLocators } = require ("./Locator");
const { changeNetwork } = require("./Action");

async function PreProposal(page){

   
    //To extend the time of test execution
    test.setTimeout(120000); 

    //Open URL and Selecting the Ghost-net
    await changeNetwork(page); 

    // Select Example DAO
    await page.locator(pageLocators.ProposalCreation.Search).type("Example")

    await page.getByText(pageLocators.ProposalCreation.ExampleDAO).click();

    // Click Proposals
    await page.click(pageLocators.ProposalCreation.Proposal)
    
}


module.exports= {
    PreProposal
}