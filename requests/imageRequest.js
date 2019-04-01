const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const url = "https://www.reddit.com";

async function getTitle() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);


  await browser.close();
  return title;
}

module.exports = getTitle;
