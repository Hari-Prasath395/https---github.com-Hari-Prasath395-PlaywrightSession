import { Browser, chromium, Page } from "@playwright/test";

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });

  let page: Page = await browser.newPage();

  await page.goto(
    "https://opencart.nltechtrainings.com/en-gb?route=account/login",
  );

  //approach 1

  //   await page
  //     .locator("input[id='input-email']")
  //     .fill("hariiprasathh395@gmail.com");
  //   await page.locator("input[id='input-password']").fill("H@ri7395");

  //approach 2

  let email = page.locator("input[id='input-email']");
  let password = page.locator("input[id='input-password']");
  let loginBtn = page.locator("button[class='btn btn-primary']");

  await email.fill("hariiprasathh395@gmail.com");
  await password.fill("H@ri7395");
  await loginBtn.click();

  let text = await page.locator("//*[@id='content']/h1").textContent();
  console.log("Header text content " + " " + text);

  await page
    .getByPlaceholder("E-Mail Address")
    .fill("hariiprasathh395@gmail.com");
})();
