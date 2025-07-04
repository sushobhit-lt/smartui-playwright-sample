const { chromium } = require("playwright");
const smartuiSnapshot = require("@lambdatest/playwright-driver");

(async () => {
  // Launch a local browser instance
  const browser = await chromium.launch({
    headless: false, // Set to false to see the browser UI
  });

  const page = await browser.newPage();

  // Navigate and take snapshots for each URL
  await page.goto("https://www.elementai.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-21");

  await page.goto("https://www.arxiv.org/list/cs.AI/recent");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-22");

  await page.goto("https://www.salesforce.com/products/einstein/overview/");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-23");

  await page.goto("https://www.oracle.com/artificial-intelligence/");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-24");

  await page.goto("https://www.amazon.com/b?node=21289116011");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-25");

  await page.goto("https://www.palantir.com/solutions/ai/");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-26");

  await page.goto("https://www.c3.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-27");

  await page.goto("https://www.vectara.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-28");

  await page.goto("https://www.grok.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-29");

  await page.goto("https://www.clarifai.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-30");

  await page.goto("https://www.datarobot.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-31");

  await page.goto("https://www.h2o.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-32");

  await page.goto("https://www.sas.com/en_us/solutions/ai.html");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-33");

  await page.goto("https://www.mathworks.com/solutions/artificial-intelligence.html");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-34");

  await page.goto("https://www.rapidminer.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-35");

  await page.goto("https://www.knime.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-36");

  await page.goto("https://www.tibco.com/solutions/artificial-intelligence");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-37");

  await page.goto("https://www.alteryx.com/solutions/ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-38");

  await page.goto("https://www.lumen.com/en-us/solutions/artificial-intelligence.html");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-39");

  await page.goto("https://www.intel.com/content/www/us/en/artificial-intelligence/overview.html");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-40");

  // Close the browser
  await browser.close();
})();
