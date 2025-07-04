const { chromium } = require("playwright");
const smartuiSnapshot = require("@lambdatest/playwright-driver");

(async () => {
  // Launch a local browser instance
  const browser = await chromium.launch({
    headless: false, // Set to false to see the browser UI
  });

  const page = await browser.newPage();

  // Navigate and take snapshots for each URL
  await page.goto("https://www.inworld.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-141");

  await page.goto("https://www.kensho.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-142");

  await page.goto("https://www.kodakalaris.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-143");

  await page.goto("https://www.lilt.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-144");

  await page.goto("https://www.luminoso.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-145");

  await page.goto("https://www.machinetools.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-146");

  await page.goto("https://www.mighty.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-147");

  await page.goto("https://www.mixpanel.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-148");

  await page.goto("https://www.moveworks.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-149");

  await page.goto("https://www.mythic.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-150");

  // Close the browser
  await browser.close();
})();
