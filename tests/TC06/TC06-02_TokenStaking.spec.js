const { test, expect } = require("@playwright/test");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");
const { PreProposal } = require("../CommonFile/PrePoposal");

test('Test case 06-02: Successful Token Staking', async ({ page }) => {

    //To Extend the time of test Execution
    test.setTimeout(160000);

    // Selecting DAO for proposal creation
    await PreProposal(page);

    //Click on the User Tab
    await page.getByText(pageLocators.TokenDeposit.User).click();  

    //Click on the Deposit Button
    await page.getByText(pageLocators.TokenDeposit.Deposit).click();  

    //Pass The Amount
    await page.type(pageLocators.TokenDeposit.Amount, TezosTestData.TokenDeposit.Amount); 

    //Click on the Submit Button
    await page.getByText(pageLocators.TokenDeposit.Submit).click(); 

    await page.waitForTimeout(30000); 

    // Verify the PopUp text
    const validateText = await page.getByText(pageLocators.TokenDeposit.verifyText);
    await expect(validateText).toBeVisible;

    console.log(" The tokens are successfully staked and are visible in Pending Balance field.");

})