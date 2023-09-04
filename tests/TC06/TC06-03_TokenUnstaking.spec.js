const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreProposal");
const { pageLocators } = require("../CommonFile/Locator");

test('Test case 06-03: Successful Token UnStaking', async ({ page }) => {

    try {

        //To Extend the time of test Execution
        test.setTimeout(160000);

        // Selecting DAO for proposal creation
        await PreProposal(page);

        await page.waitForTimeout(10000);

        // Click on Drop Expire
        await page.getByText(pageLocators.TokenUnstaking.Drop).click();

        await page.waitForTimeout(30000);

        // go to Users tab
        await page.getByText(pageLocators.TokenUnstaking.User).click();

        await page.waitForTimeout(5000);

        //Click on UnStake Votes 
        page.getByText(pageLocators.TokenUnstaking.Unstake).click();

        await page.waitForTimeout(12000);

        // Verify PopUp text
        const validateText2 = await page.getByText(pageLocators.TokenUnstaking.verifyText);
        await expect(validateText2).toBeVisible();

        console.log("The tokens are successfully Unstaked.");

    }
    catch (error) {
        console.log("Error: ", error);
    }
})