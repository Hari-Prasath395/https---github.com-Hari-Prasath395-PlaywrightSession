import { Browser, chromium, Page } from "@playwright/test";

(async () => {
  // Launch the Chromium browser in headed mode (visible browser).
  let browser: Browser = await chromium.launch({
    headless: false,
  });

  try {
    // Create a new browser page (tab).
    let page: Page = await browser.newPage();

    // Navigate to the OpenCart login page.
    await page.goto(
      "https://opencart.nltechtrainings.com/en-gb?route=account/login",
    );

    await page.waitForTimeout(5000);

    // Locate all anchor elements inside the List Group container.
    // allInnerTexts() retrieves the inner text of all matching elements.
    // It returns an array of strings.
    let items: string[] = await page
      .locator("//div[@class='list-group mb-3']/a")
      .allInnerTexts();

    // Print the total number of elements retrieved.
    console.log("The size of the items: " + items.length);

    await page.waitForTimeout(5000);

    // Iterate through the array and print each item individually.
    for (let item of items) {
      console.log(item.trim());
      if (item.includes("Forgotten Password")) {
        await page.locator(item).click();
      }
    }
  } finally {
    // Close the browser after execution, even if an error occurs.
    // await browser.close();
  }
})();
