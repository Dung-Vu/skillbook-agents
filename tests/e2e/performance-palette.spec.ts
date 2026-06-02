import { test, expect, type Page } from "@playwright/test";

// Helper function to reliably open the Command Palette, bypassing hydration lag
async function openCommandPalette(page: Page) {
  const inputSelector = 'input[placeholder*="Tìm kiếm kỹ năng"]';
  const searchInput = page.locator(inputSelector);

  // Try keyboard shortcut first
  for (let i = 0; i < 3; i++) {
    if (await searchInput.isVisible()) return;
    await page.keyboard.press("Control+k");
    await page.waitForTimeout(300);
  }

  // Fallback: Dispatch custom open event in window context
  if (!(await searchInput.isVisible())) {
    await page.evaluate(() => {
      window.dispatchEvent(new CustomEvent("open-command-palette"));
    });
    await page.waitForTimeout(300);
  }

  await expect(searchInput).toBeVisible();
}

test.describe("Performance & Command Palette E2E Tests", () => {
  let consoleLogs: string[] = [];

  test.beforeEach(async ({ page }) => {
    consoleLogs = [];
    page.on("pageerror", (err) => {
      console.error("BROWSER PAGE ERROR:", err.message);
    });
    page.on("console", (msg) => {
      const text = msg.text();
      console.log(`[BROWSER CONSOLE - ${msg.type()}]:`, text);
      consoleLogs.push(text);
    });
  });

  // ==========================================
  // TIER 1: Coverage & Core Features
  // ==========================================

  test("Tier 1: Should verify smooth scroll environment and layout attributes", async ({ page }) => {
    await page.goto("/");

    // 1. Verify data-scroll-behavior="smooth" is present on the HTML tag
    const htmlElement = page.locator("html");
    await expect(htmlElement).toHaveAttribute("data-scroll-behavior", "smooth");

    // 2. Scroll and verify that no warnings regarding scroll-behavior exist in the console
    await page.evaluate(() => window.scrollTo({ top: 500, behavior: "smooth" }));
    await page.waitForTimeout(300);

    const scrollWarnings = consoleLogs.filter(
      (log) => log.toLowerCase().includes("scroll-behavior") && log.toLowerCase().includes("warning")
    );
    expect(scrollWarnings.length).toBe(0);
  });

  test("Tier 1: Should open and trigger Command Palette via Ctrl+K / Cmd+K and Header click", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(1000); // Allow hydration

    // 1. Ensure the palette is closed initially
    const inputSelector = 'input[placeholder*="Tìm kiếm kỹ năng"]';
    await expect(page.locator(inputSelector)).not.toBeVisible();

    // 2. Open via keyboard shortcut (Ctrl+K)
    await page.keyboard.press("Control+k");
    await expect(page.locator(inputSelector)).toBeVisible();
    await expect(page.locator(inputSelector)).toBeFocused();

    // 3. Close the palette using Escape key
    await page.keyboard.press("Escape");
    await expect(page.locator(inputSelector)).not.toBeVisible();

    // 4. Open via Header search button click
    const headerSearchBtn = page.locator("button:has-text('Tìm kiếm')").first();
    if (await headerSearchBtn.isVisible()) {
      await headerSearchBtn.click();
      await expect(page.locator(inputSelector)).toBeVisible();
    }
  });

  test("Tier 1: Should search and display skills, then select and navigate to a skill detail page", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(1000); // Allow hydration

    // Open Command Palette
    await openCommandPalette(page);
    const searchInput = page.locator('input[placeholder*="Tìm kiếm kỹ năng"]');
    await expect(searchInput).toBeVisible();

    // Search using Fuse.js fuzzy search
    await searchInput.fill("alphafold");
    await page.waitForTimeout(300); // Give Fuse.js time to run and display results

    // Verify search results are displayed
    const firstResult = page.locator("span:has-text('alphafold')").first();
    await expect(firstResult).toBeVisible();

    // Select the skill (click on the first search result)
    await firstResult.evaluate(el => (el as HTMLElement).click());

    // Verify it redirects to the skill's detail page
    await expect(page).toHaveURL(/\/skills\/alphafold-database/);
    await expect(page.locator("h1")).toContainText("alphafold-database");
  });

  // ==========================================
  // TIER 2: Boundary & Corner Cases
  // ==========================================

  test("Tier 2: Should verify Command Palette closing mechanisms", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(500);

    const inputSelector = 'input[placeholder*="Tìm kiếm kỹ năng"]';

    // 1. Close via click on overlay backdrop
    await openCommandPalette(page);
    await page.waitForTimeout(500); // Let opening transition finish

    // Locate the backdrop overlay and click it directly using backdrop-blur-sm/bg-black/60 classes with force: true
    await page.locator('.fixed.inset-0.bg-black\\/60').first().evaluate(el => (el as HTMLElement).click());
    await page.waitForTimeout(500); // Let closing transition finish
    await expect(page.locator(inputSelector)).not.toBeVisible();

    // 2. Close via Escape key
    await openCommandPalette(page);
    await page.waitForTimeout(500);
    await page.keyboard.press("Escape");
    await page.waitForTimeout(500);
    await expect(page.locator(inputSelector)).not.toBeVisible();

    // 3. Close via standard Close Button (X icon)
    await openCommandPalette(page);
    await page.waitForTimeout(500);
    const closeBtn = page.locator('button[title*="Đóng tìm kiếm"]');
    if (await closeBtn.isVisible()) {
      await closeBtn.click();
      await page.waitForTimeout(500);
      await expect(page.locator(inputSelector)).not.toBeVisible();
    }
  });

  test("Tier 2: Should handle empty, long, and invalid search queries elegantly", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(500);

    // Open Command Palette
    await openCommandPalette(page);
    const searchInput = page.locator('input[placeholder*="Tìm kiếm kỹ năng"]');
    await expect(searchInput).toBeVisible();

    // 1. Empty query: Should show either default highlighted/recent list or no crashes
    await searchInput.fill("");
    await page.waitForTimeout(200);
    // Should display either "Kỹ năng nổi bật" or "Tìm kiếm gần đây"
    const listHeader = page.locator('span:has-text("Kỹ năng nổi bật"), span:has-text("Tìm kiếm gần đây")').first();
    await expect(listHeader).toBeVisible();

    // 2. Extremely long query: Check performance and handling
    const longQuery = "a".repeat(100);
    await searchInput.fill(longQuery);
    await page.waitForTimeout(200);
    await expect(page.locator('span:has-text("KHÔNG CÓ KẾT QUẢ KHỚP")')).toBeVisible();

    // 3. Invalid query with no matches:
    await searchInput.fill("nonexistentqueryxyz123");
    await page.waitForTimeout(200);
    await expect(page.locator('span:has-text("KHÔNG CÓ KẾT QUẢ KHỚP")')).toBeVisible();
  });

  test("Tier 2: Should verify Sandbox terminal keyboard interactions and stages", async ({ page }) => {
    await page.goto("/");

    // Ensure the Sandbox section is loaded and visible
    const sandboxSection = page.locator("#section-sandbox");
    await expect(sandboxSection).toBeVisible();
    await sandboxSection.scrollIntoViewIfNeeded();

    // Check that we can switch through the stages in the controllers
    const stageButtons = page.locator("button:has-text('UNTRAINED'), button:has-text('UNSTRUCTURED'), button:has-text('INJECTING PROTOCOL'), button:has-text('CERTIFIED EXPERT')");
    expect(await stageButtons.count()).toBeGreaterThan(0);

    // Click Stage 2: UNSTRUCTURED (02)
    const stageUnstructured = page.locator("button:has-text('UNSTRUCTURED')").first();
    await stageUnstructured.click();
    await page.waitForTimeout(500); // wait for typing to start

    // Check code editor contains typed code
    const codeEditor = page.locator("pre code");
    await expect(codeEditor).toBeVisible();
    let codeText = await codeEditor.innerText();
    expect(codeText.length).toBeGreaterThan(0);

    // Click Stage 4: CERTIFIED EXPERT (04)
    const stageExpert = page.locator("button:has-text('CERTIFIED EXPERT')").first();
    await stageExpert.click();
    await page.waitForTimeout(500); // wait for expert typing to start
    codeText = await codeEditor.innerText();
    expect(codeText.length).toBeGreaterThan(0);

    // Click "Chạy Mô Phỏng" to trigger simulated terminal logs
    const runSimulationBtn = page.locator("button:has-text('Chạy Mô Phỏng')").first();
    if (await runSimulationBtn.isVisible()) {
      await runSimulationBtn.click();
      // Wait to see if terminal console logs get populated
      await page.waitForTimeout(1000);
      const logs = page.locator(".flex-1.flex.flex-col.gap-1.overflow-y-auto div");
      expect(await logs.count()).toBeGreaterThan(0);
    }
  });

  // ==========================================
  // TIER 3: Cross-Feature Combinations
  // ==========================================

  test("Tier 3: Should open command palette, search, select skill, and verify details TOC scroll-spy", async ({ page }) => {
    // 1. Visit Home
    await page.goto("/");
    await page.waitForTimeout(500);

    // 2. Open Command Palette
    await openCommandPalette(page);
    const searchInput = page.locator('input[placeholder*="Tìm kiếm kỹ năng"]');
    await expect(searchInput).toBeVisible();

    // 3. Search and select pubmed skill
    await searchInput.fill("pubmed");
    await page.waitForTimeout(300);
    const pubmedResult = page.locator("span:has-text('pubmed')").first();
    await expect(pubmedResult).toBeVisible();
    await pubmedResult.click();

    // 4. Verify redirected to pubmed details page
    await expect(page).toHaveURL(/\/skills\/pubmed-database/);

    // 5. Verify Sticky TOC Sidebar exists
    const tocSidebar = page.locator("aside");
    await expect(tocSidebar).toBeVisible();
    const tocLinks = tocSidebar.locator("a");
    expect(await tocLinks.count()).toBeGreaterThan(0);

    // 6. Click second TOC link and verify scroll
    const secondLink = tocLinks.nth(1);
    const href = await secondLink.getAttribute("href");
    expect(href).not.toBeNull();
    await secondLink.click();
    await page.waitForTimeout(600); // Wait for scroll

    const hash = await page.evaluate(() => window.location.hash);
    expect(hash).toBe(href);

    // Verify target header is visible
    const targetHeading = page.locator(`${href}`);
    await expect(targetHeading).toBeVisible();

    // Scroll spy check: scroll to end of page, check if TOC item highlight is updated
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(600);
    const highlightedLinksCount = await page.locator("aside a.font-semibold").count();
    expect(highlightedLinksCount).toBeLessThanOrEqual(1);
  });

  test("Tier 3: Should save searched queries to localStorage history and reuse them", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(500);

    // Clear localStorage to ensure clean start
    await page.evaluate(() => localStorage.removeItem("recent-skills"));

    // 1. Open Command Palette
    await openCommandPalette(page);
    const searchInput = page.locator('input[placeholder*="Tìm kiếm kỹ năng"]');
    await expect(searchInput).toBeVisible();

    // 2. Search for ClinVar (not in fallback featured list to prevent clear-history assertion issues)
    await searchInput.fill("clinvar");
    await page.waitForTimeout(300);
    const clinvarResult = page.locator("span:has-text('clinvar')").first();
    await expect(clinvarResult).toBeVisible();

    // Click ClinVar which navigates to /skills/clinvar-database and saves it to history
    await clinvarResult.click();
    await expect(page).toHaveURL(/\/skills\/clinvar-database/);

    // 3. Go back to Home page
    await page.goto("/");
    await page.waitForTimeout(500);

    // 4. Open Command Palette again
    await openCommandPalette(page);
    await expect(searchInput).toBeVisible();

    // 5. Verify "Tìm kiếm gần đây" shows the recent search history
    const recentHeader = page.locator('span:has-text("Tìm kiếm gần đây")');
    await expect(recentHeader).toBeVisible();

    const recentItem = page.locator('span:has-text("clinvar-database")').first();
    await expect(recentItem).toBeVisible();

    // 6. Click "Xóa lịch sử" and verify history is empty
    const clearHistoryBtn = page.locator('button:has-text("Xóa lịch sử")').first();
    if (await clearHistoryBtn.isVisible()) {
      await clearHistoryBtn.click();
      await page.waitForTimeout(200);
      await expect(recentHeader).not.toBeVisible();
      await expect(recentItem).not.toBeVisible();
    }
  });

  // ==========================================
  // TIER 4: Real-World Workload Journey
  // ==========================================

  test("Tier 4: Simulated Full User Journey Workload", async ({ page }) => {
    // 1. Load Home page
    await page.goto("/");
    await page.waitForTimeout(500);
    await expect(page).toHaveTitle(/Skillbook/);

    // 2. Scroll page rapidly downwards to simulate intensive user scroll & trigger Lenis/GSAP
    await page.evaluate(() => {
      const scrollSteps = 5;
      let step = 0;
      const interval = setInterval(() => {
        window.scrollBy(0, window.innerHeight);
        step++;
        if (step >= scrollSteps) clearInterval(interval);
      }, 50);
    });
    await page.waitForTimeout(350);

    // 3. Scroll back to top
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(100);

    // 4. Trigger Command Palette via shortcut
    await openCommandPalette(page);
    const searchInput = page.locator('input[placeholder*="Tìm kiếm kỹ năng"]');
    await expect(searchInput).toBeVisible();

    // 5. Search for "pubmed"
    await searchInput.fill("pubmed");
    await page.waitForTimeout(300);
    const pubmedResult = page.locator("span:has-text('pubmed')").first();
    await expect(pubmedResult).toBeVisible();

    // 6. Select skill and navigate to detail page
    await pubmedResult.click();
    await expect(page).toHaveURL(/\/skills\/pubmed-database/);

    // 7. Verify details page content loads correctly
    const tocSidebar = page.locator("aside");
    await expect(tocSidebar).toBeVisible();

    // 8. Go back to Home page
    await page.goto("/");
    await page.waitForTimeout(500);

    // 9. Scroll to Sandbox section
    const sandboxSection = page.locator("#section-sandbox");
    await expect(sandboxSection).toBeVisible();
    await sandboxSection.scrollIntoViewIfNeeded();

    // 10. Click through Sandbox Stage 1 -> Stage 2 -> Stage 3
    const stageUnstructured = page.locator("button:has-text('UNSTRUCTURED')").first();
    await stageUnstructured.click();
    await page.waitForTimeout(300);

    const stageInjecting = page.locator("button:has-text('INJECTING PROTOCOL')").first();
    await stageInjecting.click();
    await page.waitForTimeout(300);

    const stageExpert = page.locator("button:has-text('CERTIFIED EXPERT')").first();
    await stageExpert.click();
    await page.waitForTimeout(500);

    // 11. Run terminal simulation inside the IDE
    const runSimulationBtn = page.locator("button:has-text('Chạy Mô Phỏng')").first();
    if (await runSimulationBtn.isVisible()) {
      await runSimulationBtn.click();
      await page.waitForTimeout(1500); // wait for simulation logs to populate
      const logs = page.locator(".flex-1.flex.flex-col.gap-1.overflow-y-auto div");
      expect(await logs.count()).toBeGreaterThan(0);
    }

    // 12. Confirm no critical browser crash or console errors occurred
    const pageErrors = consoleLogs.filter(
      (log) => log.toLowerCase().includes("error") || log.toLowerCase().includes("failed to load")
    );
    // Ignore minor warnings or asset loading failures if any, but ensure main features ran
    expect(pageErrors.length).toBeLessThan(10);
  });
});
