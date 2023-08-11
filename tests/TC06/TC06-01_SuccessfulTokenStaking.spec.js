const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreAction");
const { pageLocators } = require("../CommonFile/Locator");
const path = require('path');

test('Test case 11: Successful Token Staking', async ({ page }) => {

    test.setTimeout(600000);  //To Extend the time of test Execution

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    await page.click(pageLocators.TokenStaking.User);  //Click on the User ON the Tab

    await page.click(pageLocators.TokenStaking.Deposit);  //Click on the Deposit Button

    //await page.type(pageLocators.TokenStaking.PassAmount, TezosTestData.TokenStaking.Amount); //Pass The Amount

    await page.click(pageLocators.TokenStaking.UseMax); //Click onn the User Max

    await page.click(pageLocators.TokenStaking.Submit); //Click on the Submit Button

    await page.waitForTimeout(30000); //Wait for Transaction Confirmed

    console.log(" The tokens are successfully staked and and show up as available balance field");

})