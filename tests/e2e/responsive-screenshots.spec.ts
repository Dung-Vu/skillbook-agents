import { test } from "@playwright/test";
import * as path from "path";
import * as fs from "fs";

const routes = [
  { name: "home", path: "/" },
  { name: "catalog", path: "/skills" },
  { name: "detail", path: "/skills/alphafold-database" },
  { name: "about", path: "/about" },
  { name: "changelog", path: "/changelog" }
];

const viewports = [
  { width: 375, height: 812, name: "mobile" },
  { width: 768, height: 1024, name: "tablet" }
];

test("generate responsive screenshots", async ({ page }) => {
  test.setTimeout(120000); // Set a higher timeout for capturing 10 screenshots
  const artifactsDir = path.join(__dirname, "../../artifacts");
  if (!fs.existsSync(artifactsDir)) {
    fs.mkdirSync(artifactsDir, { recursive: true });
  }

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    
    for (const route of routes) {
      console.log(`Capturing ${route.name} at ${vp.name} (${vp.width}x${vp.height})...`);
      
      // Go to page
      await page.goto(route.path, { waitUntil: "domcontentloaded" });
      
      // Additional wait to let animations settle
      await page.waitForTimeout(1500);
      
      // Take screenshot
      const filename = `${route.name}_${vp.name}.png`;
      const screenshotPath = path.join(artifactsDir, filename);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`Saved screenshot to ${screenshotPath}`);
    }
  }
});
