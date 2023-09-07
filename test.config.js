const { fixtures } = require('@playwright/test');


fixtures.defineTestFixture('tokenAddress', async ({}, runTest) => {

  const tokenAddress = await getTokenAddress(); // Implement this function to get the address
  
  await runTest(tokenAddress);
});
