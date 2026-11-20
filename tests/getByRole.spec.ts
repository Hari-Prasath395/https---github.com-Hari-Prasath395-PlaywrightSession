import { Browser, chromium, Page } from "@playwright/test";

(async () => {
  // Launch the Chrome browser in headed mode (visible browser).
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });

  // Create a new browser page (tab).
  let page: Page = await browser.newPage();

  // Navigate to the OpenCart login page.
  await page.goto(
    "https://opencart.nltechtrainings.com/en-gb?route=account/login",
  );

  await page
    .getByRole("textbox", { name: "E-Mail address" })
    .fill("tom@gmail.com");
  await page.getByRole("textbox", { name: "Password" }).fill("H@ri7395");
})();
