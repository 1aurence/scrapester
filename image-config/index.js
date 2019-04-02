const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const keys = require("../config/keys");

aws.config.update({
  secretAccessKey: keys.AWS_SECRET_KEY,
  accessKeyId: keys.AWS_ACCESS_KEY,
  region: "us-east-1",
  acl: "public-read"
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3,
    bucket: "scrapester",
    acl: "public-read"
  })
});

module.exports = { s3, upload };
