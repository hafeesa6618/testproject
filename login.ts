import puppeteer from "https://deno.land/x/puppeteer@9.0.1/mod.ts";

const browser = await puppeteer.launch({
    headless: false,
        args: ["--start-maximized"],
        slowMo: 250,
  });
const loginPage = ({
    email : 'input[id="email"]',
    password: 'input[id="pass"]',
    loginButton:'button[id="loginbutton"]'

});

const page = await browser.newPage();
await page.goto("https://www.facebook.com/login");
//await page.waitFor(loginPage.email);
await page.type(loginPage.email, "hafeesa6@gmail.com");
await page.type(loginPage.password, "hadia6618");
await page.click(loginPage.loginButton);
//await page.screenshot({ path: "example.png" });

//await browser.close();
