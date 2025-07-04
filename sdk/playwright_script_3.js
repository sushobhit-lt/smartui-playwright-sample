const { chromium } = require("playwright");
const smartuiSnapshot = require("@lambdatest/playwright-driver");

(async () => {
  // Launch a local browser instance
  const browser = await chromium.launch({
    headless: false, // Set to false to see the browser UI
  });

  const page = await browser.newPage();

  // Navigate and take snapshots for each URL
  await page.goto("https://www.xilinx.com/applications/ai-inference.html");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-41");

  await page.goto("https://www.qualcomm.com/products/artificial-intelligence");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-42");

  await page.goto("https://www.arm.com/solutions/artificial-intelligence");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-43");

  await page.goto("https://www.graphcore.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-44");

  await page.goto("https://www.cerebras.net");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-45");

  await page.goto("https://www.sambanova.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-46");

  await page.goto("https://www.grok.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-47");

  await page.goto("https://www.neuralink.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-48");

  await page.goto("https://www.openml.org");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-49");

  await page.goto("https://www.ai.google/discover/our-research/");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-50");

  await page.goto("https://www.copy.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-51");

  await page.goto("https://www.jasper.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-52");

  await page.goto("https://www.igenius.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-53");

  await page.goto("https://www.evolution.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-54");

  await page.goto("https://www.v7labs.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-55");

  await page.goto("https://www.soundhound.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-56");

  await page.goto("https://www.affectiva.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-57");

  await page.goto("https://www.drone.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-58");

  await page.goto("https://www.tractable.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-59");

  await page.goto("https://www.onfido.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-60");

  // Close the browser
  await browser.close();
})();
