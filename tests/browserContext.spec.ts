import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

(async () => {
  let browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });

  let browser1: BrowserContext = await browser.newContext();
  let browser2: BrowserContext = await browser.newContext();

  let page1: Page = await browser1.newPage();
  let page2: Page = await browser2.newPage();

  await page1.goto(
    "https://opencart.nltechtrainings.com/en-gb?route=account/login",
  );
  await page1.getByRole("textbox", { name: "E-Mail Address" }).click();
  await page1
    .getByRole("textbox", { name: "E-Mail Address" })
    .fill("hariiprasathh395@gmail.com");
  await page1.getByRole("textbox", { name: "Password" }).click();
  await page1.getByRole("textbox", { name: "Password" }).fill("H@ri7395");
  await page1.getByRole("button", { name: "Login" }).click();
  await browser1.close();

  await page2.goto(
    "https://opencart.nltechtrainings.com/en-gb?route=account/login",
  );
  await page2.getByRole("textbox", { name: "E-Mail Address" }).click();
  await page2
    .getByRole("textbox", { name: "E-Mail Address" })
    .fill("hariiprasathh395@gmail.com");
  await page2.getByRole("textbox", { name: "Password" }).click();
  await page2.getByRole("textbox", { name: "Password" }).fill("H@ri7395");
  await page2.getByRole("button", { name: "Login" }).click();
  await browser2.close();

  //   let page: Page = await browser.newPage();
  //   await page.goto("https://www.google.com/");
  //   let title: string = await page.title();
  //   console.log("Page title is :" + " " + title);
  //   await browser.close();
})();
