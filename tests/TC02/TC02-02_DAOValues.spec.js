const { test, expect } = require('@playwright/test');
const { changeNetwork } = require("../CommonFile/Action");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");

test('Test Case 4 : Create DAO with various input values', async ({ page }) => {

    //To extend the time of test execution
    test.setTimeout(120000); 

    //Open URL and Selecting the Ghost-net
    await changeNetwork(page); 

    //Click on Create DAO
    await page.getByText(pageLocators.DAOCreation.CreateDAO).click(); 

    //Selecting Yes, I Have one
    await page.getByText(pageLocators.DAOCreation.GovernanceToken).click();  

    //Click on FullDAO
    await page.getByText(pageLocators.DAOCreation.FullDAO).click();  

    //Click On Continue
    await page.getByText(pageLocators.DAOCreation.ContinueButton).click(); 

    //Fill DAO Name
    await page.fill(pageLocators.DAOCreation.DAOName, TezosTestData.DAOCreation.DAOName);  

    //Fill Token Address
    await page.fill(pageLocators.DAOCreation.TokenAddress, TezosTestData.DAOCreation.TokenAddress); 

    //Fill Token ID
    await page.fill(pageLocators.DAOCreation.TokenID, TezosTestData.DAOCreation.TokenID);  

    //Fill The Wallet Address
    await page.fill(pageLocators.DAOCreation.GuardianAddress, TezosTestData.DAOCreation.GuardianAddress);

    //Fill The Description
    await page.fill(pageLocators.DAOCreation.Description, TezosTestData.DAOCreation.TC02_02DAODescription); 

    //Click on Continue
    await page.getByText(pageLocators.DAOCreation.ContinueButton).click();

    //Get error message 
    const errorMessage = page.getByText(pageLocators.DAOCreation.ErrorText); 
    await expect(errorMessage).toBeVisible();

    console.log(errorMessage) //Show The Result
    console.log("The system handles the input appropriately, either creating the DAO or displaying an error message.");

})