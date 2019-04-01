const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const generalEndpoints = require("./routes/general");
app.use(cors());
app.use(bodyParser.json());
require("./requests/sampleRequest");

app.use("/api", generalEndpoints);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
