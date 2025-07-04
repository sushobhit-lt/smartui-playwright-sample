const { chromium } = require("playwright");
const smartuiSnapshot = require("@lambdatest/playwright-driver");

(async () => {
  // Launch a local browser instance
  const browser = await chromium.launch({
    headless: false, // Set to false to see the browser UI
  });

  const page = await browser.newPage();

  // Navigate and take snapshots for each URL
  await page.goto("https://www.comma.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-121");

  await page.goto("https://www.cruise.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-122");

  await page.goto("https://www.cue.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-123");

  await page.goto("https://www.cycleworks.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-124");

  await page.goto("https://www.daedalean.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-125");

  await page.goto("https://www.dataiku.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-126");

  await page.goto("https://www.dataminr.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-127");

  await page.goto("https://www.dialpad.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-128");

  await page.goto("https://www.dustyrobotics.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-129");

  await page.goto("https://www.embark.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-130");

  await page.goto("https://www.exscientia.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-131");

  await page.goto("https://www.fairmatic.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-132");

  await page.goto("https://www.figure.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-133");

  await page.goto("https://www.flock.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-134");

  await page.goto("https://www.flyt.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-135");

  await page.goto("https://www.freenome.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-136");

  await page.goto("https://www.gretel.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-137");

  await page.goto("https://www.hailo.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-138");

  await page.goto("https://www.heartflow.com");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-139");

  await page.goto("https://www.huma.ai");
  await smartuiSnapshot.smartuiSnapshot(page, "Snapshot-140");

  // Close the browser
  await browser.close();
})();
