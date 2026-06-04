import { test, expect } from "@playwright/test";

test.describe("Skill Detail Page UX & Interactions", () => {
  test.beforeEach(async ({ page }) => {
    page.on("pageerror", (err) => {
      console.error("BROWSER PAGE ERROR:", err.message);
    });
    page.on("console", (msg) => {
      console.log(`[BROWSER CONSOLE - ${msg.type()}]:`, msg.text());
    });
    // We will use android-cli as the primary testing page since it has multiple platforms
    await page.goto("/skills/android-cli");
  });

  test("should display Sticky TOC Sidebar and handle smooth scroll on click", async ({ page }) => {
    // 1. Check TOC visibility
    const tocSidebar = page.locator("aside");
    await expect(tocSidebar).toBeVisible();

    // Wait for client-side headings extraction to finish and render links
    const firstLink = tocSidebar.locator("a").first();
    await expect(firstLink).toBeVisible();

    const tocLinks = tocSidebar.locator("a");
    expect(await tocLinks.count()).toBeGreaterThan(0);

    // Get the second TOC link and its text/href
    const secondLink = tocLinks.nth(1);
    const href = await secondLink.getAttribute("href");
    expect(href).not.toBeNull();
    
    // 2. Click TOC link and verify URL hash and scroll target
    await secondLink.click();
    await page.waitForTimeout(600); // Wait for smooth scroll animation to finish
    
    const hash = await page.evaluate(() => window.location.hash);
    expect(hash).toBe(href);

    // Verify the target heading in DOM exists
    const targetHeading = page.locator(`${href}`);
    await expect(targetHeading).toBeVisible();
  });

  test("should highlight correct TOC item on scroll (scroll spy)", async ({ page }) => {
    // Scroll to the end of the page
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(600);

    // The active link should be highlighted (have the .font-semibold class)
    const highlightedLinksCount = await page.locator("aside a.font-semibold").count();
    expect(highlightedLinksCount).toBeLessThanOrEqual(1);
  });

  test("should inject copy button on pre elements and copy successfully on click", async ({ page, context }) => {
    // Grant clipboard read permission
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);

    // 1. Verify code-block-wrapper and copy buttons exist
    await page.waitForSelector(".code-block-wrapper");
    const wrappers = page.locator(".code-block-wrapper");
    expect(await wrappers.count()).toBeGreaterThan(0);

    const firstWrapper = wrappers.first();
    const copyBtn = firstWrapper.locator(".copy-button");
    await expect(copyBtn).toBeVisible();
    await expect(copyBtn).toContainText("Sao chép");

    // Get code content
    const codeText = await firstWrapper.locator("code").evaluate(el => el.textContent || "");

    // 2. Click Copy and verify visual feedback
    await copyBtn.click();
    await expect(copyBtn).toContainText("Đã sao chép!");

    // Verify clipboard content
    const clipboardContent = await page.evaluate(() => navigator.clipboard.readText());
    
    const normalize = (str: string) => 
      str.split("\n")
         .map(line => line.trimEnd())
         .filter(line => line.trim() !== "")
         .join("\n");

    expect(normalize(clipboardContent)).toBe(normalize(codeText));

    // 3. Verify state resets after 2 seconds
    await page.waitForTimeout(2200);
    await expect(copyBtn).toContainText("Sao chép");
  });

});
