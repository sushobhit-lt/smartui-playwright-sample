const { chromium } = require("playwright");
const smartuiSnapshot = require("@lambdatest/playwright-driver");

(async () => {
  // Launch a local browser instance
  const browser = await chromium.launch({
    headless: false, // Set to false to see the browser UI
  });

  const page = await browser.newPage();

  // Navigate and take snapshots for each URL
  await page.goto("https://openai.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-1");

  await page.goto("https://www.deepmind.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-2");

  await page.goto("https://www.anthropic.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-3");

  await page.goto("https://x.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-4");

  await page.goto("https://www.nvidia.com/en-us/ai/");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-5");

  await page.goto("https://www.microsoft.com/en-us/ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-6");

  await page.goto("https://ai.google");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-7");

  await page.goto("https://www.ibm.com/artificial-intelligence");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-8");

  await page.goto("https://huggingface.co");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-9");

  await page.goto("https://www.tensorflow.org");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-10");

  await page.goto("https://pytorch.org");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-11");

  await page.goto("https://www.cohere.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-12");

  await page.goto("https://stability.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-13");

  await page.goto("https://www.databricks.com/solutions/artificial-intelligence");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-14");

  await page.goto("https://www.synthesia.io");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-15");

  await page.goto("https://www.runwayml.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-16");

  await page.goto("https://www.scale.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-17");

  await page.goto("https://www.ai21.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-18");

  await page.goto("https://www.perplexity.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-19");

  await page.goto("https://mistral.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-20");

  // Close the browser
  await browser.close();
})();
