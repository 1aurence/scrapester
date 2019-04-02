const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

var browser;
async function loadBrowser() {
  browser = await puppeteer.launch();
  return browser;
}
async function closeBrowser() {
  await browser.close();
}
class Requests {
  static async loadPage(url) {
    const browser = await loadBrowser();
    const page = await browser.newPage();
    await page.goto(url);
    return page;
  }

  static async getElementsText(url, element) {
    let page = await this.loadPage(url);
    let content = await page.content();
    let $ = cheerio.load(content, {
      withDomLvl1: true,
      normalizeWhitespace: true,
      xmlMode: true,
      decodeEntities: true
    });
    let data = [];
    const pageQuery = await $(element).each(function() {
      data.push($(this).text());
    });
    await closeBrowser();
    return data;
  }

  static async screenshotPage(url, filename) {
    let page = await this.loadPage(url);
    let screenshot = await page.screenshot({
      path: __dirname + `/screenshots/${filename}.jpeg`
    });
    await closeBrowser();
    return screenshot;
  }
}
module.exports = Requests;
