import { getBrowser } from "./start-browser.ts";
import { Browser, Page } from "../deps-test.ts";

interface OpenBrowser {
  browser: Browser;
  page: Page;
}

async function openBrowser(
  site = "https://devl.medigy.com/",
): Promise<OpenBrowser> {
  const browser = await getBrowser();
  const page=await browser.page();
}
//await page.Click
