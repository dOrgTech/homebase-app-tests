const { test, expect } = require("@playwright/test");
const { changeNetwork } = require("../CommonFile/Action");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");

test("Test Case 2: Token Creation with Various Input Values", async ({ page, }) => {

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
  await page.fill(pageLocators.TokenCreation.TokenDescription, TezosTestData.TokenCreation.TC01_02TokenDescription); 

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

  //Get error the text 
  const textMessage = page.getByText(pageLocators.TokenCreation.ErrorText);  

  //Verify The Text Present on The Web
  await expect(textMessage).toBeVisible();

  console.log(textMessage);
  console.log("Create Token with input values failed  because description test box does not accept empty string");

});
