const { test } = require("@playwright/test");
const { pageLocators } = require("./Locator");
const { changeNetwork } = require("./Action");

async function PreProposal(page) {

    test.setTimeout(5 * 60 * 1000); //Extending Test Case timeout to 5 minutes

    await changeNetwork(page);   //PreConditions Open URL and Selecting the Ghost-net

    const DAOName = await page.evaluate(() => {   // Retrieve DAOName from Local Storage
        return localStorage.getItem('DAOName');
    });

    const daoElement = await page.locator(pageLocators.OffChainPoll.DAO.replace('${DAOName}', DAOName)).first();   // Use DAOName to locate elements on the page

    await daoElement.click();   // Perform actions with the located element

    await page.click(pageLocators.OffChainPoll.Proposal); //Click on Proposal

}


module.exports = {
    PreProposal
}