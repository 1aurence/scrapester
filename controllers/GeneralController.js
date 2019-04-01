const getTitle = require("../requests/sampleRequest");

module.exports = {
  async title(req, res) {
    let request = await getTitle();
    res.send(request);
  }
};
