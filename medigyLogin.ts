import { getBrowser } from "./start-browser.ts";
import { Browser, Page } from "./deps-test.ts";
const browser = await getBrowser();
const page = await browser.newPage();
const loginPage = ({
        loginButton:'a[id="userlogin"]',
        username : 'input[id="usernameLoginPage"]',
    password : 'input[id="passwordLoginPage"]',
    loginPageButton: 'input[id="loginPageButton"]'
   
});
await page.goto("https://www.medigy.com/login/");
await page.setViewport({ width: 1270, height: 1080 });
await page.click(loginPage.loginButton);
await page.waitForTimeout(3000);
await page.type(loginPage.username,"hafeesa6@gmail.com");
await page.type(loginPage.password,"hadia6618");
await page.click("#loginPageButton");
await page.waitForTimeout(3000);
//await page.waitForSelector("#header-profile-name");
await page.waitForTimeout(15000);
await browser.close();
