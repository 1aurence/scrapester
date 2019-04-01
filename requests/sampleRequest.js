const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const url = "https://www.reddit.com";

async function getTitle() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  let content = await page.content();
  let $ = cheerio.load(content);

  await page.screenshot({ path: __dirname + "/screenshots/test.png" });

  const title = await $("title").text();

  await browser.close();
  return title;
}

module.exports = getTitle;
