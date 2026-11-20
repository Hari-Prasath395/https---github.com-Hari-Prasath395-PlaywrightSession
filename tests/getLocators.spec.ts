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

  // --------------------------------------------------
  // 1. getByText() - Locate an element using visible text
  // --------------------------------------------------

  // Locate the element containing the text "New Customer".
  // textContent() retrieves the text content from the DOM.
  // It returns string or null.
  let text: string | null = await page.getByText("New Customer").textContent();

  console.log("New Customer text is: " + text);

  // --------------------------------------------------
  // 2. getByText() with exact: true
  // --------------------------------------------------

  // exact: true means Playwright looks for an exact text match.
  // This avoids matching elements containing additional text.
  let text1: string | null = await page
    .getByText("Returning Customer", { exact: true })
    .textContent();

  console.log("Returning Customer text is: " + text1);

  // --------------------------------------------------
  // 3. locator() - Locate an element using CSS selector
  // --------------------------------------------------

  // Locate an anchor (<a>) element containing the text "Brands".
  // hasText filters the matching elements based on their text.
  // innerText() returns the visible text of the element.
  let brandText: string = await page
    .locator("a", { hasText: "Brands" })
    .innerText();

  console.log("The brand text is: " + brandText);

  // --------------------------------------------------
  // 4. getByLabel() - Locate an input using its label
  // --------------------------------------------------

  // Locate the Email Address input using its associated label.
  // fill() enters the email value into the input field.
  await page
    .getByLabel("E-Mail Address", { exact: true })
    .fill("Tom@gmail.com");

  // --------------------------------------------------
  // 5. getByTitle() - Locate an element using title attribute
  // --------------------------------------------------

  // Locate the element whose title attribute matches the text.
  // click() performs a click action on the located element.
  await page.getByTitle("NLTECH Trainings Hub").click();

  // Close the browser after execution.
  await browser.close();
})();
