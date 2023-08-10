const { test, expect } = require("@playwright/test");
const { PreProposal } = require("./CommonFile/PreAction");
const { pageLocators } = require("./CommonFile/Locator");
const { TezosTestData } = require("./CommonFile/TestData");

test('Test case 13: Successful Token Withdrawal', async ({ page }) => {

    test.setTimeout(600000);  //To Extend the time of test Execution

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    await page.click(pageLocators.TokenWithdrawal.Withdraw); //Click On withdrawal Button

    await page.type(pageLocators.TokenWithdrawal.Amount, TezosTestData.TokenWithdrawal.Amount); //Click On the WithDraw Amount

    await page.click(pageLocators.TokenWithdrawal.UseMax); //Click on the Use Max

    await page.click(pageLocators.TokenWithdrawal.Submit); //Click On the Submit Button

    const isTextVisible = content.includes(pageLocators.TokenWithdrawal.TransactionText, { visible: true });  //Verify that text visible on the webpage

    console.log(isTextVisible); // console The Pass And Fail Result

})