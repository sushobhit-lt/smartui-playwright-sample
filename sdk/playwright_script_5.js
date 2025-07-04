const { chromium } = require("playwright");
const smartuiSnapshot = require("@lambdatest/playwright-driver");

(async () => {
  // Launch a local browser instance
  const browser = await chromium.launch({
    headless: false, // Set to false to see the browser UI
  });

  const page = await browser.newPage();

  // Navigate and take snapshots for each URL
  await page.goto("https://www.khoslaventures.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-81");

  await page.goto("https://www.accel.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-82");

  await page.goto("https://www.a16z.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-83");

  await page.goto("https://www.lightspeed.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-84");

  await page.goto("https://www.benchmark.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-85");

  await page.goto("https://www.foundersfund.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-86");

  await page.goto("https://www.8vc.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-87");

  await page.goto("https://www.sparkcapital.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-88");

  await page.goto("https://www.gv.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-89");

  await page.goto("https://www.bessemer.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-90");

  await page.goto("https://www.insightpartners.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-91");

  await page.goto("https://www.tigerglobal.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-92");

  await page.goto("https://www.neural.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-93");

  await page.goto("https://www.cognitive.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-94");

  await page.goto("https://www.brightmachines.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-95");

  await page.goto("https://www.vicarious.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-96");

  await page.goto("https://www.rekognition.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-97");

  await page.goto("https://www.aisera.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-98");

  await page.goto("https://www.drift.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-99");

  await page.goto("https://www.zest.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-100");

  // Close the browser
  await browser.close();
})();
