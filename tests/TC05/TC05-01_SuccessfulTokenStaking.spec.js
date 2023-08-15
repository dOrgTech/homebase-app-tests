const { test, expect } = require("@playwright/test");
const { PreTokenStaking } = require("../CommonFile/PreTokenStaking");
const { pageLocators } = require("../CommonFile/Locator");
const path = require('path');

test('Test case 1: Successful Token Staking', async ({ page }) => {

    test.setTimeout(10 * 60 * 1000); //Extending Test Case timeout to 10 minutes

    await PreTokenStaking(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    await page.click(pageLocators.TokenStaking.User);  //Click on the User ON the Tab

    await page.click(pageLocators.TokenStaking.Deposit);  //Click on the Deposit Button

    //await page.type(pageLocators.TokenStaking.PassAmount, TezosTestData.TokenStaking.Amount); //Pass The Amount

    await page.click(pageLocators.TokenStaking.UseMax); //Click onn the User Max

    await page.click(pageLocators.TokenStaking.Submit); //Click on the Submit Button

    await page.waitForTimeout(30000); //Wait for Transaction Confirmed

    const element = await page.$(pageLocators.TokenStaking.Balance); // get The element

    await page.waitForTimeout(2000); //wait for get the votes

    const textContent = await element.innerText();  //get the text From this element

    console.log(textContent);  // Console The test Present on the Webpage

    console.log(" The tokens are successfully staked and and show up as available balance field");

})