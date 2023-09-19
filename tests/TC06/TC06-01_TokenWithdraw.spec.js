const { test, expect } = require("@playwright/test");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");
const { PreProposal } = require("../CommonFile/PrePoposal");

test('Test case 06-01: Successful Token Withdrawal', async ({ page }) => {

    //To Extend the time of test Execution
    test.setTimeout(160000);

    // Selecting DAO for proposal creation
    await PreProposal(page);

    //Click on the User Tab
    await page.getByText(pageLocators.TokenWithdrawal.User).click();

    //Click on Withdraw Button
    await page.getByText(pageLocators.TokenWithdrawal.Withdraw).click(); 

    //Enter amount to withdraw
    await page.type(pageLocators.TokenWithdrawal.Amount, TezosTestData.TokenWithdrawal.Amount);

    //Click on Submit Button
    await page.getByText(pageLocators.TokenWithdrawal.Submit).click();

    await page.waitForTimeout(30000);

    //Verify the PopUp text.
    const validateText = await page.getByText(pageLocators.TokenWithdrawal.verifyText); 
    await expect(validateText).toBeVisible();

    console.log("The tokens were successfully withdrawed and the remaining tokens are visible in Available Balance. ")

})