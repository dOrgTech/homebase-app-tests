const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreAction");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");

async function PreTokenStaking(page){

    test.setTimeout(10 * 60 * 1000); //Extending Test Case timeout to 10 minutes

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    await page.click(pageLocators.TokenStaking.User); //Click on the User Tab

    await page.click(pageLocators.TokenWithdrawal.Withdraw); //Click On withdrawal Button

    // await page.type(pageLocators.TokenWithdrawal.Amount, TezosTestData.TokenWithdrawal.Amount); //Click On the WithDraw Amount

    await page.click(pageLocators.TokenWithdrawal.UseMax); //Click on the Use Max

    await page.click(pageLocators.TokenWithdrawal.Submit); //Click On the Submit Button

    await page.waitForTimeout(30000); //Wait for Transaction Confirmed

}

module.exports= {
    PreTokenStaking
}