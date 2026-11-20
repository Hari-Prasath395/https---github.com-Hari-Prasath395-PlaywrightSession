import { Browser, chromium, Page } from "@playwright/test";

(async () => {
  // Launch Chrome browser in headed mode (browser will be visible).
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

  // Wait for 5 seconds (used here for learning purposes).
  await page.waitForTimeout(5000);

  // --------------------------------------------------
  // 1. highlight() - Highlight an element on the webpage
  // --------------------------------------------------

  // Locate the Email textbox using its accessible role and name.
  // highlight() visually highlights the element for debugging.
  await page.getByRole("textbox", { name: "E-Mail address" }).highlight();

  // --------------------------------------------------
  // 2. fill() - Enter text into an input field
  // --------------------------------------------------

  // Locate the Email textbox and enter the email address.
  await page
    .getByRole("textbox", { name: "E-Mail address" })
    .fill("tom@gmail.com");

  // Locate the Password textbox and enter the password.
  await page.getByRole("textbox", { name: "Password" }).fill("H@ri7395");

  // --------------------------------------------------
  // 3. getAttribute() - Retrieve an element's attribute value
  // --------------------------------------------------

  // Retrieve the "type" attribute from the Password textbox.
  // For a password input, the expected attribute value is "password".
  // getAttribute() returns string or null if the attribute is not found.
  let dataValue: string | null = await page
    .getByRole("textbox", { name: "Password" })
    .getAttribute("class");

  console.log("Attribute value is: " + dataValue);

  //inputValue()
  let input: string = await page
    .getByRole("textbox", { name: "E-Mail address" })
    .inputValue();

  console.log("The input field value is :" + input);

  // Close the browser after execution.
  await browser.close();
})();
