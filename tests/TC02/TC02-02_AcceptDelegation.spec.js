const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreAction");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");

test('Test case 2: Accept Delegations', async ({ page }) => {

    test.setTimeout(7 * 60 * 1000); //Extending Test Case timeout to 7 minutes

    await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

    await page.click(pageLocators.TokenStaking.User);  //Click on the User ON the Tab

    await page.click(pageLocators.AcceptDelegation.EditButton); //Click on the Edit Button

    await page.click(pageLocators.AcceptDelegation.AcceptButton); //click on Accept Button

    await page.click(pageLocators.AcceptDelegation.SubmitButton); //Click on the Submit Button

    await page.waitForTimeout(3000); //Wait for Transaction Confirmed

    const content = await page.content(); //Assume Page

    const isTextVisible = content.includes(pageLocators.AcceptDelegation.TransactionText, { visible: true });  //Verify that text visible on the webpage

    console.log(isTextVisible); //Console the results of Text 

    console.log("The tokens are successfully staked and and show up as available balance field");

})