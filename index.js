const express = require("express");
const app = express();
const cors = require("cors");
require("./db");
const bodyParser = require("body-parser");
const generalRoutes = require("./routes/general");
const authRoutes = require("./routes/auth");

app.use(cors());
app.use(bodyParser.json());
require("./requests/sampleRequest");

app.use("/api", generalRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

