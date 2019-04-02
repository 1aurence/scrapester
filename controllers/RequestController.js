const RequestTypes = require("../requests/generalRequests");
const Request = require("../models/request");
const mongoose = require("mongoose");
const { upload } = require("../image-config/index");
const queryString = require("query-string");

module.exports = {
  async getText(req, res) {
    // Grab request info from queryString
    let url = queryString.parse(req.url).url;
    let element = queryString.parse(req.url).element;
    let userId = queryString.parse(req.url).userId;
    try {
      let request = await RequestTypes.getElementsText(url, element);
      if (userId) {
        // If user provides optional user id, then create new request and save it
        let newRequest = new Request({
          request: {
            url,
            query: element,
            result: request
          },
          user: userId
        });
        const savedRequest = await newRequest.save();
        // Send saved request
        res.json(savedRequest);
      } else {
        // Send request without saving
        res.json(request);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  //TODO: Save to s3 and reference s3 bucket img url in mongo
  async screenshot(req, res) {
    let url = queryString.parse(req.url).url;
    let filename = queryString.parse(req.url).filename;
    try {
      await RequestTypes.screenshotPage(url, filename);
      res.send("Screenshot has been saved");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  async savedRequests(req, res) {
    let savedRequests = await Request.find({ user: req.params.id }).select('-_id');
    res.send(savedRequests);
  }
};
