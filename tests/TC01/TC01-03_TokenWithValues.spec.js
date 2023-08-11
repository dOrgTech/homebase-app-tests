const {test, expect} = require('@playwright/test');
const { changeNetwork } = require('../CommonFile/Action');
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");


test('Test3: Amount Less than Supply Token',async ({page})=>{

    test.setTimeout(120000);

    // set Network to Ghostnet
    await changeNetwork(page);

    //Click Create DAO button
    await page.click(pageLocators.TokenCreator.CreateDAO);

    //click "No, I need one"
    await page.click(pageLocators.TokenCreator.GovernanceToken);

    //Enter token name
    await page.fill(pageLocators.TokenCreator.TokenName, TezosTestData.TokenCreator.TokenName);

    //Enter token description
    await page.fill(pageLocators.TokenCreator.TokenDescription, TezosTestData.TokenCreator.TokenDescription)
    //Enter Supply
    await page.fill(pageLocators.TokenCreator.TotalSupply, TezosTestData.TokenCreator.SupplyToken)
    //Enter Decimals
    await page.fill(pageLocators.TokenCreator.Decimals, TezosTestData.TokenCreator.Decimals)
    //Enter Icon
    await page.fill(pageLocators.TokenCreator.Icon, TezosTestData.TokenCreator.Icon)
    //Enter Symbol
    await page.fill(pageLocators.TokenCreator.Symbol, TezosTestData.TokenCreator.Symbol)

    // Click Continue
    await page.click(pageLocators.TokenCreator.ContinueButton1);

    await page.waitForTimeout(2000);


    //Enter Wallet Address
    await page.fill(pageLocators.TokenCreator.WalletAddress, TezosTestData.TokenCreator.WalletAddress); 

    //Enter The Amount
    await page.fill(pageLocators.TokenCreator.Amount, TezosTestData.TokenCreator.TC02Amount); 

    //Click on Continue Button
    await page.click(pageLocators.TokenCreator.ContinueButton2); 

    const errorText = await page.getByText(TezosTestData.TokenCreator.ErrorText2);
    await expect(errorText).toBeVisible()
    console.log("message shown: ",TezosTestData.TokenCreator.ErrorText2);
    console.log("Token cannot be created if Amount is less than Supply Token");

    await page.waitForTimeout(5000);


})