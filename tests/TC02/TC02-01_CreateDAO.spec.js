const { test, expect } = require('@playwright/test');
const { changeNetwork } = require("../CommonFile/Action");
const { pageLocators } = require("../CommonFile/Locator");
const { TezosTestData } = require("../CommonFile/TestData");

test('Test Case 3 : Create DAO Successfully', async ({ page }) => {

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
    await page.fill(pageLocators.DAOCreation.Description, TezosTestData.DAOCreation.Description); 

    //Click on Continue
    await page.getByText(pageLocators.DAOCreation.ContinueButton).click();   

    //Pass The Voting Cycle Days Duration
    await page.fill(pageLocators.DAOCreation.VotingDays, TezosTestData.DAOCreation.VotingDays);  

    //Pass The Voting Cycle Hours Duration
    await page.fill(pageLocators.DAOCreation.VotingHours, TezosTestData.DAOCreation.VotingHours); 

    //Pass The Voting Minutes Duration
    await page.fill(pageLocators.DAOCreation.VotingMinutes, TezosTestData.DAOCreation.VotingMinutes); 

    //Pass The Proposal Execution Days Duration
    await page.fill(pageLocators.DAOCreation.ExecutionDays, TezosTestData.DAOCreation.ExecutionDays); 

    //Pass The Proposal Execution Hours Duration
    await page.fill(pageLocators.DAOCreation.ExecutionHours, TezosTestData.DAOCreation.ExecutionHours); 

    //Pass The Proposal Execution Minutes Duration
    await page.fill(pageLocators.DAOCreation.ExecutionMinutes, TezosTestData.DAOCreation.ExecutionMinutes); 

    //Pass The Proposal Expiry Threshold Days Duration
    await page.fill(pageLocators.DAOCreation.ThresholdExpiryDays, TezosTestData.DAOCreation.ThresholdExpiryDays); 

    //Pass The Proposal Expiry Threshold Hours Duration
    await page.fill(pageLocators.DAOCreation.ThresholdExpiryHours, TezosTestData.DAOCreation.ThresholdExpiryHours); 

    //Pass The Proposal Expiry Threshold Minutes Duration
    await page.fill(pageLocators.DAOCreation.ThresholdExpiryMinutes, TezosTestData.DAOCreation.ThresholdExpiryMinutes); 

    //Fill Required Stake
    await page.fill(pageLocators.DAOCreation.RequireStake, TezosTestData.DAOCreation.RequiredStake); 

    //Locate The Slider
    const slider = page.locator(pageLocators.DAOCreation.Slider); 

    // Get Target position.
    const targetPosition = { x: 50, y: 0 }; 

    // Ensure the slider is in view
    await slider.scrollIntoViewIfNeeded(); 

    // Get the bounding box of the slider for dragging
    const sliderBox = await slider.boundingBox();  

    // Calculate the target position based on the slider's bounding box
    const targetX = sliderBox.x + targetPosition.x;
    const targetY = sliderBox.y + targetPosition.y;

    // Create a mouse action context and perform the drag and drop
    await page.mouse.move(sliderBox.x, sliderBox.y);  
    await page.mouse.down();

    // You can adjust the number of steps for smoother animation
    // await page.mouse.move(targetX, targetY, { steps: 50 }); 

    // await page.mouse.up();

    //Pass Min Transfer Amount
    await page.fill(pageLocators.DAOCreation.MinAmount, TezosTestData.DAOCreation.MinAmount); 

    //Pass Max Transfer Amount
    await page.fill(pageLocators.DAOCreation.MaxAmount, TezosTestData.DAOCreation.MaxAmount); 

    //Click On Continue
    await page.getByText(pageLocators.DAOCreation.ContinueButton).click();  

    //Pass The Initial Quorum Threshold
    await page.fill(pageLocators.DAOCreation.QuorumThreshold, TezosTestData.DAOCreation.QuorumThreshold); 

    //Pass The Initial Quorum Change
    await page.fill(pageLocators.DAOCreation.QuorumChange, TezosTestData.DAOCreation.QuorumChange); 

    //Pass The Min. Quorum Threshold
    await page.fill(pageLocators.DAOCreation.MinQuorumAmount, TezosTestData.DAOCreation.MinQuorumAmount); 

    //Pass The Max. Quorum Change
    await page.fill(pageLocators.DAOCreation.QuorumMaxChange, TezosTestData.DAOCreation.QuorumChange); 

    //Pass The Max. Quorum Threshold
    await page.fill(pageLocators.DAOCreation.MaxQuorumAmount, TezosTestData.DAOCreation.MaxQuorumAmount); 

    //Wait for the Page Load
    await page.waitForTimeout(1000); 

    //Click On Continue
    await page.getByText(pageLocators.DAOCreation.ContinueButton).click();  

    //Wait For The Page Load
    await page.waitForTimeout(1000); 

    //Click On Continue
    await page.getByText(pageLocators.DAOCreation.ContinueButton).click();  

    //Click On Self Deployed
    await page.getByText(pageLocators.DAOCreation.SelfDeployed).click();  

    //Click On Launch
    await page.getByText(pageLocators.DAOCreation.DeployDAO).click(); 

    //Wait for Deploy the DAO
    await page.waitForTimeout(60000); 

    //Verify that text visible on the webpage
    const content = await page.getByText(pageLocators.DAOCreation.DAOText); 
    await expect(content).toBeVisible; 

    console.log("The DAO is successfully created and the user is redirected to a confirmation page");

})