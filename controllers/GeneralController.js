const Requests = require("../requests/sampleRequest");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
module.exports = {
  async title(req, res) {
    const url = req.headers["url"];
    try {
      let verifyToken = await jwt.verify(req.token, keys.JWT_SECRET);
      if (verifyToken) {
        let request = await Requests.getTitle(url);
        res.send(request);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async screenshot(req, res) {
    const url = req.headers["url"];
    try {
      let verifyToken = await jwt.verify(req.token, keys.JWT_SECRET);
      if (verifyToken) {
        await Requests.screenshotPage(url);
        res.send("Screenshot has been saved!");
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
