const Puppeteer = require('puppeteer-extra').PuppeteerExtra;
const pptr = require('puppeteer');
const puppeteer = new Puppeteer(pptr);
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const userAgent = require('user-agents');

puppeteer.use(StealthPlugin());

async function browse() {
  let browser = await puppeteer.launch({ headless: false });
  try {
    let page = await browser.newPage();
    await page.setUserAgent(userAgent.random().toString());

    await page.goto('https://myvisit.com/#!/home/provider/158 ');

    await page.setViewport({ width: 1600, height: 717 });
    // YOUR CODE GOES here
   
  } catch (error) {
    console.log(error);
  } finally {
    const pages = await browser.pages();
    for (const page of pages) await page.close();
    await browser.close();
  }
}
browse()
