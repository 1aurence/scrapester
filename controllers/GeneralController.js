const Requests = require("../requests/sampleRequest");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const Request = require("../models/request");
const mongoose = require("mongoose");

module.exports = {
  async title(req, res) {
    const url = req.headers["url"];
    const element = req.headers["element"];
    try {
      let verifyToken = await jwt.verify(req.token, keys.JWT_SECRET);
      if (verifyToken) {
        let request = await Requests.getElementsText(url, element);
        if (req.params.id) {
          // If user provides optional user id to save, then create new request and save it
          let newRequest = new Request({
            request: {
              url,
              query: element,
              result: request
            },
            user: req.params.id
          });
          const savedRequest = await newRequest.save();
          // Send saved request
          res.json(savedRequest);
        } else {
          // Send request without saving
          res.json(request);
        }
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  //TODO: Save to s3 and reference s3 bucket img url in mongo
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
