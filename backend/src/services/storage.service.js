const ImageKit = require("@imagekit/nodejs");
const config = require("../config/config");

const imageKit = new ImageKit({
  publicKey: config.IMAGEKIT_PUBLIC_KEY,
  privateKey: config.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: config.IMAGEKIT_URL_ENDPOINT,
});

async function uploadFile(file, fileName) {
  const result = await imageKit.files.upload({
    file: file.toString("base64"),
    fileName: fileName,
  });

  return result;
}

module.exports = { uploadFile };
