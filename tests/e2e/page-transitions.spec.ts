import { test, expect } from "@playwright/test";

interface CustomWindow extends Window {
  __canvasPauseDispatched?: boolean;
  __canvasResumeDispatched?: boolean;
  __transition?: {
    canvasPaused?: boolean;
    navigationClickedTime?: number;
    navigationExecutedTime?: number;
  };
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

  test("should dispatch 'canvas-pause' and set window.__canvasPaused immediately upon clicking navigation link from /about to /skills", async ({ page }) => {
    await page.goto("/about");

    // Wait for the skills navigation link to be visible in the header
    const skillsLink = page.locator("header nav a[href='/skills']").first();
    await expect(skillsLink).toBeVisible();

    // Attach custom listener on the window object to track if 'canvas-pause' is dispatched
    await page.evaluate(() => {
      const customWindow = window as unknown as CustomWindow;
      customWindow.__canvasPauseDispatched = false;
      window.addEventListener("canvas-pause", () => {
        customWindow.__canvasPauseDispatched = true;
      });
    });

    // Trigger click without awaiting the full navigation
    await skillsLink.click();

    // IMMEDIATELY verify that 'canvas-pause' is dispatched and window.__canvasPaused is true
    const pauseDispatched = await page.evaluate(() => {
      const customWindow = window as unknown as CustomWindow;
      return customWindow.__canvasPauseDispatched;
    });
    const canvasPausedState = await page.evaluate(() => {
      const customWindow = window as unknown as CustomWindow;
      return customWindow.__transition?.canvasPaused;
    });

    expect(pauseDispatched).toBe(true);
    expect(canvasPausedState).toBe(true);
  });

  test("should enforce a delayed navigation (>= 300ms) after clicking navigation link from /about to /skills", async ({ page }) => {
    await page.goto("/about");

    const skillsLink = page.locator("header nav a[href='/skills']").first();
    await expect(skillsLink).toBeVisible();

    const targetHref = "/skills";
    const initialUrl = page.url();

    // Attach timing tracker
    await page.evaluate(() => {
      const customWindow = window as unknown as CustomWindow;
      customWindow.__transition = customWindow.__transition || {};
      customWindow.__transition.navigationClickedTime = 0;
      customWindow.__transition.navigationExecutedTime = 0;
    });

    // Record time and click
    const clickTime = Date.now();
    await skillsLink.click();

    // Wait 50ms (or whatever real-time the CPU schedules this thread back)
    await page.waitForTimeout(50);
    const midUrl = page.url();

    if (midUrl !== initialUrl) {
      // If CPU scheduling lag caused the sleep to take >300ms, verify via browser-side timestamps
      const browserTiming = await page.evaluate(() => {
        const customWindow = window as unknown as CustomWindow;
        return {
          clicked: customWindow.__transition?.navigationClickedTime,
          executed: customWindow.__transition?.navigationExecutedTime
        };
      });
      if (browserTiming.clicked && browserTiming.executed) {
        expect(browserTiming.executed - browserTiming.clicked).toBeGreaterThanOrEqual(300);
      } else {
        // Fallback to transition duration check if timestamps weren't captured
        const transitionDuration = Date.now() - clickTime;
        expect(transitionDuration).toBeGreaterThanOrEqual(300);
      }
    } else {
      // Verify that at 50ms (when no lag occurred), the URL had NOT changed yet
      expect(midUrl).toBe(initialUrl);

      // Wait for Next.js to navigate to the target page
      await page.waitForURL(new RegExp(targetHref));
      const transitionDuration = Date.now() - clickTime;

      // Verify the transition takes >= 300ms
      expect(transitionDuration).toBeGreaterThanOrEqual(300);
    }
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
      return customWindow.__transition?.canvasPaused;
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

    await page.goto("/about");

    const skillsLink = page.locator("header nav a[href='/skills']").first();
    await expect(skillsLink).toBeVisible();

    const targetHref = "/skills";

    // Reset the resume flag before click to ensure we don't clear the event fired by the transition itself
    await page.evaluate(() => {
      const customWindow = window as unknown as CustomWindow;
      customWindow.__canvasResumeDispatched = false;
    });

    // Click to start transition
    await skillsLink.click();

    // Verify immediate pause
    const pauseDispatched = await page.evaluate(() => {
      const customWindow = window as unknown as CustomWindow;
      return customWindow.__canvasPauseDispatched;
    });
    const canvasPausedState = await page.evaluate(() => {
      const customWindow = window as unknown as CustomWindow;
      return customWindow.__transition?.canvasPaused;
    });
    expect(pauseDispatched).toBe(true);
    expect(canvasPausedState).toBe(true);

    // Wait for route change
    await page.waitForURL(new RegExp(targetHref));
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
      return customWindow.__transition?.canvasPaused;
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
