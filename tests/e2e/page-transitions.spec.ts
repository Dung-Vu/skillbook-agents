import { test, expect } from "@playwright/test";

interface CustomWindow extends Window {
  __canvasPauseDispatched?: boolean;
  __canvasResumeDispatched?: boolean;
  __canvasPaused?: boolean;
}

test.describe("Skills Page Transitions & Canvas Optimization Spec", () => {
  test.beforeEach(async ({ page }) => {
    page.on("pageerror", (err) => {
      console.error("BROWSER PAGE ERROR:", err.message);
    });
    page.on("console", (msg) => {
      console.log(`[BROWSER CONSOLE - ${msg.type()}]:`, msg.text());
    });
  });

  test("should verify that the canvas element exists on /skills and is visible", async ({ page }) => {
    await page.goto("/skills");
    const canvas = page.locator("canvas");
    await expect(canvas).toBeVisible();
  });

  test("should dispatch 'canvas-pause' and set window.__canvasPaused immediately upon clicking skill card", async ({ page }) => {
    await page.goto("/skills");

    // Wait for the skills container and card to be visible
    const firstSkillCard = page.locator(".skills-table-container .skill-card, .skill-card").first();
    await expect(firstSkillCard).toBeVisible();

    // Attach custom listener on the window object to track if 'canvas-pause' is dispatched
    await page.evaluate(() => {
      const customWindow = window as unknown as CustomWindow;
      customWindow.__canvasPauseDispatched = false;
      window.addEventListener("canvas-pause", () => {
        customWindow.__canvasPauseDispatched = true;
      });
    });

    // Trigger click without awaiting the full navigation
    await firstSkillCard.click();

    // IMMEDIATELY verify that 'canvas-pause' is dispatched and window.__canvasPaused is true
    const pauseDispatched = await page.evaluate(() => {
      const customWindow = window as unknown as CustomWindow;
      return customWindow.__canvasPauseDispatched;
    });
    const canvasPausedState = await page.evaluate(() => {
      const customWindow = window as unknown as CustomWindow;
      return customWindow.__canvasPaused;
    });

    expect(pauseDispatched).toBe(true);
    expect(canvasPausedState).toBe(true);
  });

  test("should enforce a delayed navigation (>= 300ms) after clicking a skill card", async ({ page }) => {
    await page.goto("/skills");

    const firstSkillCard = page.locator(".skills-table-container .skill-card, .skill-card").first();
    await expect(firstSkillCard).toBeVisible();

    const targetHref = await firstSkillCard.getAttribute("href");
    expect(targetHref).not.toBeNull();

    const initialUrl = page.url();

    // Record time and click
    const clickTime = Date.now();
    await firstSkillCard.click();

    // Verify that at 150ms, the URL has NOT changed yet (enforcing the delay)
    await page.waitForTimeout(150);
    const midUrl = page.url();
    expect(midUrl).toBe(initialUrl);

    // Wait for Next.js to navigate to the target slug page
    await page.waitForURL(new RegExp(targetHref!));
    const transitionDuration = Date.now() - clickTime;

    // Verify the transition takes >= 300ms
    expect(transitionDuration).toBeGreaterThanOrEqual(300);
  });

  test("should verify canvas eventually resumes and window.__canvasPaused is false on detail page", async ({ page }) => {
    // Attach listener for canvas-resume before page script execution to prevent race conditions
    await page.addInitScript(() => {
      const customWindow = window as unknown as CustomWindow;
      customWindow.__canvasResumeDispatched = false;
      window.addEventListener("canvas-resume", () => {
        customWindow.__canvasResumeDispatched = true;
      });
    });

    // Navigate directly to a skill detail page
    await page.goto("/skills/android-cli");
    await page.waitForLoadState("domcontentloaded");

    // Verify eventual resume event and that state is false/falsy
    await expect.poll(async () => {
      return await page.evaluate(() => {
        const customWindow = window as unknown as CustomWindow;
        return customWindow.__canvasResumeDispatched;
      });
    }).toBe(true);

    const canvasPausedState = await page.evaluate(() => {
      const customWindow = window as unknown as CustomWindow;
      return customWindow.__canvasPaused;
    });
    expect(canvasPausedState).toBeFalsy();
  });

  test("should coordinate full canvas pause and resume lifecycle during transition", async ({ page }) => {
    // Attach listeners before page load to persist across navigation/reloads
    await page.addInitScript(() => {
      const customWindow = window as unknown as CustomWindow;
      customWindow.__canvasPauseDispatched = false;
      customWindow.__canvasResumeDispatched = false;
      window.addEventListener("canvas-pause", () => {
        customWindow.__canvasPauseDispatched = true;
      });
      window.addEventListener("canvas-resume", () => {
        customWindow.__canvasResumeDispatched = true;
      });
    });

    await page.goto("/skills");

    const firstSkillCard = page.locator(".skills-table-container .skill-card, .skill-card").first();
    await expect(firstSkillCard).toBeVisible();

    const targetHref = await firstSkillCard.getAttribute("href");
    expect(targetHref).not.toBeNull();

    // Click to start transition
    await firstSkillCard.click();

    // Verify immediate pause
    const pauseDispatched = await page.evaluate(() => {
      const customWindow = window as unknown as CustomWindow;
      return customWindow.__canvasPauseDispatched;
    });
    const canvasPausedState = await page.evaluate(() => {
      const customWindow = window as unknown as CustomWindow;
      return customWindow.__canvasPaused;
    });
    expect(pauseDispatched).toBe(true);
    expect(canvasPausedState).toBe(true);

    // Reset the resume flag for the transition check
    await page.evaluate(() => {
      const customWindow = window as unknown as CustomWindow;
      customWindow.__canvasResumeDispatched = false;
    });

    // Wait for route change
    await page.waitForURL(new RegExp(targetHref!));
    await page.waitForLoadState("domcontentloaded");

    // Verify eventually resumes
    await expect.poll(async () => {
      return await page.evaluate(() => {
        const customWindow = window as unknown as CustomWindow;
        return customWindow.__canvasResumeDispatched;
      });
    }).toBe(true);

    const canvasPausedAfterResume = await page.evaluate(() => {
      const customWindow = window as unknown as CustomWindow;
      return customWindow.__canvasPaused;
    });
    expect(canvasPausedAfterResume).toBeFalsy();
  });

  test("should check presence of hardware-acceleration CSS styles on main transition wrappers", async ({ page }) => {
    await page.goto("/skills/android-cli");
    await page.waitForLoadState("domcontentloaded");

    // Check main transition containers for hardware-acceleration markers
    // e.g. will-change properties, GPU-accelerated transforms, or hardware-accelerated wrapper classes
    const elementsWithWillChange = page.locator("[class*='will-change'], [style*='will-change'], .hardware-accelerated");
    const count = await elementsWithWillChange.count();
    
    // We expect at least one wrapper to have hardware-acceleration styles enabled
    expect(count).toBeGreaterThan(0);

    const firstAccelerated = elementsWithWillChange.first();
    const style = await firstAccelerated.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        willChange: computed.willChange,
        transform: computed.transform
      };
    });

    expect(style.willChange).toMatch(/transform|opacity/);
  });
});
