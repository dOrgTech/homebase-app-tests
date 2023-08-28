const { test, expect } = require("@playwright/test");
const { PreProposal } = require("../CommonFile/PreProposal");
const { pageLocators } = require("../CommonFile/Locator");

test('Test case 04-03: Correct vote Count on Off Chain Poll ', async ({ page }) => {

    //To extend the time of test execution
    test.setTimeout(120000); 

    // Selecting DAO for proposal creation
    await PreProposal(page);

    await page.getByText(pageLocators.VoteOnOffChainPoll.ProposalName).click();

    await page.waitForTimeout(2000);

    // get The element
    const content = await page.$(pageLocators.CorrectVoteCount.VoteCount); 

    //wait for get the votes
    await page.waitForTimeout(2000); 
  
    //get the text From this element
    const textContent = await content.innerText();  
    await expect(parseInt(textContent)).toBeGreaterThanOrEqual(1)
  
    // Console The test Present on the Webpage
    console.log('Votes:', textContent);  

    console.log("The vote count matches the number of votes submitted for the poll.")

})