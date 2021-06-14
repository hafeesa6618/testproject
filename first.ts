import puppeteer from "https://deno.land/x/puppeteer@9.0.1/mod.ts";

const browser = await puppeteer.launch({
    headless: false,
    args: ["--start-maximized"],
  });

const page = await browser.newPage();
await page.goto("https://google.com");
await page.screenshot({ path: "example.png" });

await browser.close();
