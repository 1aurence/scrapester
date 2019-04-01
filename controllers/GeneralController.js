const Requests = require("../requests/sampleRequest");

module.exports = {
  async title(req, res) {
    let request = await Requests.getTitle();
    res.send(request);
  },
  async screenshot(req, res) {
    await Requests.screenshotPage();
    res.send("Screenshot has been saved!");
  }
};
