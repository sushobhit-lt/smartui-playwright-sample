const { chromium } = require("playwright");
const smartuiSnapshot = require("@lambdatest/playwright-driver");

(async () => {
  // Launch a local browser instance
  const browser = await chromium.launch({
    headless: false, // Set to false to see the browser UI
  });

  const page = await browser.newPage();

  // Navigate and take snapshots for each URL
  await page.goto("https://www.darktrace.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-61");

  await page.goto("https://www.sentient.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-62");

  await page.goto("https://www.tempus.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-63");

  await page.goto("https://www.butterfly.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-64");

  await page.goto("https://www.dataroot.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-65");

  await page.goto("https://www.prowler.io");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-66");

  await page.goto("https://www.blueprism.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-67");

  await page.goto("https://www.uipath.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-68");

  await page.goto("https://www.automationanywhere.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-69");

  await page.goto("https://www.appen.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-70");

  await page.goto("https://www.crowdai.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-71");

  await page.goto("https://www.lionbridge.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-72");

  await page.goto("https://www.zoox.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-73");

  await page.goto("https://www.aurora.tech");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-74");

  await page.goto("https://www.nuro.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-75");

  await page.goto("https://www.pony.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-76");

  await page.goto("https://www.woven.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-77");

  await page.goto("https://www.mayfield.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-78");

  await page.goto("https://www.greylock.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-79");

  await page.goto("https://www.sequoiacap.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-80");

  // Close the browser
  await browser.close();
})();
