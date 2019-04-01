const Request = require("../models/request");
module.exports = {
  async savedRequests(req, res) {
    const getSavedRequests = await Request.find({ user: req.params.id }).select('-user').select('-_id');
    res.send(getSavedRequests);
  }
};
