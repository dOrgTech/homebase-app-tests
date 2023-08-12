const {test, expect} = require('@playwright/test');
const { changeNetwork } = require('../CommonFile/Action');
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");


test('Test3: Amount Less than Supply Token',async ({page})=>{

    //To extend the time of test execution
    test.setTimeout(120000); 

    //Open URL and Selecting the Ghost-net
    await changeNetwork(page); 

    //Click Create DAO button
    await page.getByText(pageLocators.TokenCreation.CreateDAO).click();

    //click "No, I need one"
    await page.getByText(pageLocators.TokenCreation.GovernanceToken).click();

    //Enter token name
    await page.fill(pageLocators.TokenCreation.TokenName, TezosTestData.TokenCreation.TokenName);

    //Enter token description
    await page.fill(pageLocators.TokenCreation.TokenDescription, TezosTestData.TokenCreation.TokenDescription)
    //Enter Supply
    await page.fill(pageLocators.TokenCreation.TotalSupply, TezosTestData.TokenCreation.SupplyToken)
    //Enter Decimals
    await page.fill(pageLocators.TokenCreation.Decimals, TezosTestData.TokenCreation.Decimals)
    //Enter Icon
    await page.fill(pageLocators.TokenCreation.Icon, TezosTestData.TokenCreation.Icon)
    //Enter Symbol
    await page.fill(pageLocators.TokenCreation.Symbol, TezosTestData.TokenCreation.Symbol)

    // Click Continue
    await page.getByText(pageLocators.TokenCreation.ContinueButton).click();

    //Enter Wallet Address
    await page.fill(pageLocators.TokenCreation.WalletAddress, TezosTestData.TokenCreation.WalletAddress); 

    //Enter The Amount
    await page.fill(pageLocators.TokenCreation.Amount, TezosTestData.TokenCreation.TC01_03Amount); 

    //Click on Continue Button
    await page.getByText(pageLocators.TokenCreation.ContinueButton).click(); 

    //Get error message
    const errorText = await page.getByText(pageLocators.TokenCreation.ErrorText2);
    await expect(errorText).toBeVisible();

    console.log("message shown: ",TezosTestData.TokenCreation.ErrorText2);
    console.log("Create Token with input values failed because amount cannot be less than or greater than supply.");

    await page.waitForTimeout(5000);


})