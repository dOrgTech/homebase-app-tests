const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreAction");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");

test('Test case 1: Successful Token Withdrawal', async ({ page }) => {

    test.setTimeout(10 * 60 * 1000); //Extending Test Case timeout to 10 minutes

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    await page.click(pageLocators.TokenStaking.User); //Click On the User tab s

    await page.click(pageLocators.TokenWithdrawal.Withdraw); //Click On withdrawal Button

    // await page.type(pageLocators.TokenWithdrawal.Amount, TezosTestData.TokenWithdrawal.Amount); //Click On the WithDraw Amount

    await page.click(pageLocators.TokenWithdrawal.UseMax); //Click on the Use Max

    await page.click(pageLocators.TokenWithdrawal.Submit); //Click On the Submit Button

    await page.waitForTimeout(30000); //Wait for Transaction Confirmed

    const element = await page.$(pageLocators.TokenStaking.Balance); //Get The element

    await page.waitForTimeout(2000); //Wait for get the votes

    const isTextVisible = content.includes(pageLocators.TokenWithdrawal.TransactionText, { visible: true });  //Verify that text visible on the webpage

    console.log(isTextVisible); // console The Pass And Fail Result

})