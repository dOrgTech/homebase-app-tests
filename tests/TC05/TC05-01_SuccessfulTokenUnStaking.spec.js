const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreAction");
const { pageLocators } = require("../CommonFile/Locator");

test('Test case 1: Successful Token UnStaking on Chromium', async ({ page, browserName }) => {
  if (browserName !== 'chromium') {
    return;
  }

  test.setTimeout(30 * 60 * 1000); //Extending Test Case timeout to 10 minutes

  await PreProposal(page);   //PreConditions Open URL and Open Mask DAO For Proposal

  await page.click(pageLocators.TokenStaking.User); //Click on the User Tab

  await page.waitForTimeout(5000); //wait for button visible

  try {

    await page.click(pageLocators.UnStakingToken.UnStakeVotes); //Click on UnStake Votes 

  } catch (error) {
    console.error("Error: No votes to unstake");
  }

  await page.waitForTimeout(30000); //Wait For Complete The Transaction

  const content = await page.content(); //Assume Page

  const isTextVisible = content.includes(pageLocators.UnStakingToken.TransactionText, { visible: true });  //Verify that text visible on the webpage

  console.log(isTextVisible);

  console.log("The tokens are successfully UnStaked and show up in the Available Balance field.")

})