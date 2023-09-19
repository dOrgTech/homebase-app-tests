const { test } = require("@playwright/test");
const { pageLocators } = require ("./Locator");
const AppConfig = require("../../config");

async function changeNetwork(page){

    console.log("WebApp URL for Testing:", AppConfig.TestURL)
    await page.goto(AppConfig.TestURL);

    await page.click(pageLocators.TokenCreation.EnterApp)
  
    await page.getByText(pageLocators.TokenCreation.MainNet).click()
  
    await page.waitForSelector(pageLocators.TokenCreation.frame);
  
    await page.getByText(pageLocators.TokenCreation.GhostNet).click();
     
}




module.exports= {
    changeNetwork
}