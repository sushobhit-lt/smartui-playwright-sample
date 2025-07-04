import json
import math
import os

# Read the JSON file
with open('url.json', 'r') as file:
    data = json.load(file)

# Configuration
URL_LIMIT = 20
output_dir = "sdk"
os.makedirs(output_dir, exist_ok=True)

# Split URLs into chunks of 20
url_chunks = [data[i:i + URL_LIMIT] for i in range(0, len(data), URL_LIMIT)]

# Template for Playwright script
script_template_start = """const { chromium } = require("playwright");
const smartuiSnapshot = require("@lambdatest/playwright-driver");

(async () => {
  // Launch a local browser instance
  const browser = await chromium.launch({
    headless: false, // Set to false to see the browser UI
  });

  const page = await browser.newPage();

  // Navigate and take snapshots for each URL
"""

script_template_end = """  // Close the browser
  await browser.close();
})();
"""

# Generate a file for each chunk
for chunk_index, chunk in enumerate(url_chunks, 1):
    script_content = script_template_start
    for entry in chunk:
        name = entry['name']
        url = entry['url']
        snapshot_name = f"Snapshot-{name}"
        script_content += f'  await page.goto("{url}");\n'
        script_content += f'  await smartuiSnapshot.smartuiSnapshot(page, "{snapshot_name}");\n'
        script_content += '\n'
    script_content += script_template_end

    # Write to a .js file
    output_file = os.path.join(output_dir, f'playwright_script_{chunk_index}.js')
    with open(output_file, 'w') as f:
        f.write(script_content)