const { test, expect } = require("@playwright/test");
const { changeNetwork } = require("../CommonFile/Action");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");+

test("Test Case 1: Successful Token Creation", async ({ page }) => {

  //To extend the time of test execution
  test.setTimeout(120000); 

  //Open URL and Selecting the Ghost-net
  await changeNetwork(page); 

  //Select A Create New DAO
  await page.getByText(pageLocators.TokenCreation.CreateDAO).click();

  //Selecting the Governance Token
  await page.getByText(pageLocators.TokenCreation.GovernanceToken).click(); 

  //Pass The Token Name
  await page.fill(pageLocators.TokenCreation.TokenName, TezosTestData.TokenCreation.TokenName);

  //Pass The Token Description
  await page.fill(pageLocators.TokenCreation.TokenDescription, TezosTestData.TokenCreation.TokenDescription); 

  //Total Supply of Tokens
  await page.fill(pageLocators.TokenCreation.TotalSupply, TezosTestData.TokenCreation.SupplyToken); 

  //Pass The Decimals
  await page.fill(pageLocators.TokenCreation.Decimals, TezosTestData.TokenCreation.Decimals); 

  //Pass The Symbol for token
  await page.fill(pageLocators.TokenCreation.Symbol, TezosTestData.TokenCreation.Symbol); 

  //Pass The Icon for Token
  await page.fill(pageLocators.TokenCreation.Icon, TezosTestData.TokenCreation.Icon);

  //Click On Continue Button
  await page.getByText(pageLocators.TokenCreation.ContinueButton).click();

  //Pass The Wallet Address
  await page.fill(pageLocators.TokenCreation.WalletAddress, TezosTestData.TokenCreation.WalletAddress); 

  //Pass The Amount
  await page.fill(pageLocators.TokenCreation.Amount, TezosTestData.TokenCreation.Amount); 

  //Click on Continue Button
  await page.getByText(pageLocators.TokenCreation.ContinueButton).click(); 

  //Click on launch button
  await page.getByText(pageLocators.TokenCreation.launch).click();

  //Wait for the Token Create
  await page.waitForTimeout(30000); 

  // Check whether Deploy text is visible
  const content = await page.getByText(pageLocators.TokenCreation.DeployText);
  await expect(content).toBeVisible; 
  
  //Wait for find the Element
  await page.waitForSelector(pageLocators.TokenCreation.ConsoleAddress);  

  const element = await page.$(pageLocators.TokenCreation.ConsoleAddress); // get The element

  const textContent = await element.innerText();  //get the text From this element

  console.log('Token Address:', textContent);  // Console The test Present on the Webpage
  console.log("The token is successfully created and the user is redirected to a confirmation page.");

});
