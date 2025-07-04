const { chromium } = require("playwright");
const smartuiSnapshot = require("@lambdatest/playwright-driver");

(async () => {
  // Launch a local browser instance
  const browser = await chromium.launch({
    headless: false, // Set to false to see the browser UI
  });

  const page = await browser.newPage();

  // Navigate and take snapshots for each URL
  await page.goto("https://www.abacus.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-101");

  await page.goto("https://www.adesa.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-102");

  await page.goto("https://www.airobotics.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-103");

  await page.goto("https://www.aiscout.net");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-104");

  await page.goto("https://www.aktana.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-105");

  await page.goto("https://www.allganize.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-106");

  await page.goto("https://www.ambiq.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-107");

  await page.goto("https://www.anyscale.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-108");

  await page.goto("https://www.aperio.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-109");

  await page.goto("https://www.assembly.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-110");

  await page.goto("https://www.attention.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-111");

  await page.goto("https://www.bearflagrobotics.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-112");

  await page.goto("https://www.bons.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-113");

  await page.goto("https://www.botpress.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-114");

  await page.goto("https://www.braincorp.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-115");

  await page.goto("https://www.casetext.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-116");

  await page.goto("https://www.celonis.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-117");

  await page.goto("https://www.cleareye.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-118");

  await page.goto("https://www.cognitivescale.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-119");

  await page.goto("https://www.cohere.io");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-120");

  // Close the browser
  await browser.close();
})();
