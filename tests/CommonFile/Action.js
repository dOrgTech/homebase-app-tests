const { test } = require("@playwright/test");
const { pageLocators } = require ("./Locator");
const AppConfig = require("../../config");

async function changeNetwork(page){

    console.log("WebApp URL for Testing:", AppConfig.TestURL)
    await page.goto(AppConfig.TestURL);

    await page.click(pageLocators.TokenCreator.EnterApp)
  
    await page.click(pageLocators.TokenCreator.MainNet);
  
    await page.waitForSelector(pageLocators.TokenCreator.frame);
  
    await page.click(pageLocators.TokenCreator.GhostNet);
     
}




module.exports= {
    changeNetwork
}