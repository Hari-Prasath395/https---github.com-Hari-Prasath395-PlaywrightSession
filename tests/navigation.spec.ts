import { test, expect } from "@playwright/test";

test("Google search test", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.waitForTimeout(2000);

  await page.goto(
    "https://opencart.nltechtrainings.com/en-gb?route=account/login",
  );
  await page.waitForTimeout(2000);
  await page.goBack();

  await page.waitForTimeout(2000);
  await page.goForward();

  await page.waitForTimeout(2000);
  await page.reload();
});
