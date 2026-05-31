import { test, expect } from "@playwright/test";

test.describe("About Page E2E Spec", () => {
  test.beforeEach(async ({ page }) => {
    // Attach error and console logs for easier debugging if needed
    page.on("pageerror", (err) => {
      console.error("BROWSER PAGE ERROR:", err.message);
    });
  });

  test("should load the About page and display the Luminous Theme styling", async ({ page }) => {
    await page.goto("/about");
    await page.waitForLoadState("domcontentloaded");

    // Verify sitemap and title header
    const missionBadge = page.locator("span", { hasText: "MISSION BRIEFING / WHITEPAPER" });
    await expect(missionBadge).toBeVisible();

    const title = page.locator("h1", { hasText: "Tri thức Bản địa dành cho" });
    await expect(title).toBeVisible();

    // Verify main background is rendered
    const mainWrapper = page.locator("main");
    await expect(mainWrapper).toHaveClass(/bg-\[#f4f6fc\]/);

    // Verify interactive mesh grid canvas is present
    const canvas = page.locator("canvas");
    await expect(canvas).toBeVisible();
  });

  test("should interact with the Interactive Agent Paradigm Graph properly", async ({ page }) => {
    await page.goto("/about");
    await page.waitForLoadState("domcontentloaded");

    // Verify Agent Paradigm header
    const header = page.locator("h2", { hasText: "INTERACTIVE AGENT PARADIGM" });
    await expect(header).toBeVisible();

    // The default active block is "skills"
    const activeHeader = page.locator("h3", { hasText: "Skills & Rules (Tri thức & Phương pháp)" });
    await expect(activeHeader).toBeVisible();

    // Find interactive buttons
    const llmButton = page.locator("button", { hasText: "LLM Core" });
    const toolsButton = page.locator("button", { hasText: "Tools & MCP" });
    const skillsButton = page.locator("button", { hasText: "Tri thức & Quyết sách" });

    await expect(llmButton).toBeVisible();
    await expect(toolsButton).toBeVisible();
    await expect(skillsButton).toBeVisible();

    // Click on LLM Core block and verify detail panel updates
    await llmButton.click();
    const llmDetailHeader = page.locator("h3", { hasText: "LLM Core (Động cơ trí tuệ)" });
    await expect(llmDetailHeader).toBeVisible();

    // Click on Tools & MCP block and verify detail panel updates
    await toolsButton.click();
    const toolsDetailHeader = page.locator("h3", { hasText: "Tools & MCP Connectors (Khả năng hành động)" });
    await expect(toolsDetailHeader).toBeVisible();

    // Click on Skills & Rules block and verify detail panel updates
    await skillsButton.click();
    const skillsDetailHeader = page.locator("h3", { hasText: "Skills & Rules (Tri thức & Phương pháp)" });
    await expect(skillsDetailHeader).toBeVisible();
  });

  test("should interact with the Auditing Lifecycle Timeline steps properly", async ({ page }) => {
    await page.goto("/about");
    await page.waitForLoadState("domcontentloaded");

    // Verify Auditing Lifecycle header
    const header = page.locator("h2", { hasText: "CURATION & AUDITING LIFECYCLE" });
    await expect(header).toBeVisible();

    // The default step is 0 (Curation & Localization)
    const defaultDesc = page.locator("p", { hasText: "Chúng tôi tuyển chọn các tri thức lập trình" });
    await expect(defaultDesc).toBeVisible();

    // Find timeline step buttons
    const step2Button = page.locator("button", { hasText: "2. Refinement & Format Optimization" });
    const step3Button = page.locator("button", { hasText: "3. E2E Audit & Playwright Verification" });

    await expect(step2Button).toBeVisible();
    await expect(step3Button).toBeVisible();

    // Click step 2 and verify details
    await step2Button.click();
    const step2Desc = page.locator("p", { hasText: "Tri thức thô được tinh chỉnh và đóng gói vào cấu trúc" });
    await expect(step2Desc).toBeVisible();

    // Click step 3 and verify details
    await step3Button.click();
    const step3Desc = page.locator("p", { hasText: "Mỗi chỉ dẫn phải vượt qua quy trình kiểm thử tự động nghiêm ngặt" });
    await expect(step3Desc).toBeVisible();
  });

  test("should verify philosophy sections and CTA are properly rendered", async ({ page }) => {
    await page.goto("/about");
    await page.waitForLoadState("domcontentloaded");

    // Philosophy items
    const curatingTitle = page.locator("h3", { hasText: "Curate, Not Create" });
    const qualityTitle = page.locator("h3", { hasText: "Quality Over Quantity" });
    await expect(curatingTitle).toBeVisible();
    await expect(qualityTitle).toBeVisible();

    // Call to Action
    const ctaTitle = page.locator("h3", { hasText: "Sẵn sàng trải nghiệm AI đỉnh cao?" });
    const ctaButton = page.locator("a", { hasText: "Tra cứu bách khoa toàn thư" });
    await expect(ctaTitle).toBeVisible();
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toHaveAttribute("href", "/skills");
  });
});
