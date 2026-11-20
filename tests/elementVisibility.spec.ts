import { Browser, chromium, Page } from "@playwright/test";

(async () => {
  // Launch Chrome browser in headed mode (visible browser).
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });

  // Create a new browser page (tab).
  let page: Page = await browser.newPage();

  // Navigate to the FreeCRM registration page.
  await page.goto("https://classic.freecrm.com/register/");

  // Wait for 3 seconds (used here for learning purposes).
  await page.waitForTimeout(3000);

  // --------------------------------------------------
  // 1. isVisible() - Check whether an element is visible
  // --------------------------------------------------

  // Returns true if the Submit button is visible on the page.
  // Returns false if the element is hidden.
  let visibilityCheck: boolean = await page
    .locator("#submitButton")
    .isVisible();

  console.log("Submit button visibility: " + visibilityCheck);

  // --------------------------------------------------
  // 2. isEnabled() - Check whether an element is enabled
  // --------------------------------------------------

  // Returns true if the Submit button is enabled and can be interacted with.
  // Returns false if the button is disabled.
  let enableCheck: boolean = await page.locator("#submitButton").isEnabled();

  console.log("Submit button enabled status: " + enableCheck);

  // --------------------------------------------------
  // 3. isDisabled() - Check whether an element is disabled
  // --------------------------------------------------

  // Returns true if the Submit button is disabled.
  // Returns false if the Submit button is enabled.
  let disableCheck: boolean = await page.locator("#submitButton").isDisabled();

  console.log("Submit button disabled status: " + disableCheck);

  // --------------------------------------------------
  // 4. Click the checkbox
  // --------------------------------------------------

  // Locate the checkbox using its accessible role and click it.
  await page.getByRole("checkbox").click();

  // --------------------------------------------------
  // 5. Check the button enabled status after clicking checkbox
  // --------------------------------------------------

  // Check whether the Submit button is enabled after checkbox interaction.
  let enableCheck1: boolean = await page.locator("#submitButton").isEnabled();

  console.log("Submit button enabled after checkbox click: " + enableCheck1);

  // Close the browser after execution.
  await browser.close();
})();
