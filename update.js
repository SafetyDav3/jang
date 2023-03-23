const fs = require("fs");
const path = __dirname + "/output/metadata";

const CID = "testNUM54s54f65f4s4v558d4v58d4v84dv/"; // CID of the metadata folder
const buildImgUrl = (oldValue, id) => "ipfs://" + CID + id + ".png";
const buildName = (oldVale, id) => "Name #" + id;

const buildDescription = (oldValue, id) =>
  "NFT Image associated with file #" + id;

const getTokenId = (fileName) => {
  const matches = fileName.match(/(\d+)\.json/);
  if (matches) {
    return matches[1];
  } else {
    throw new Error(`Invalid file name: ${fileName}`);
  }
};

console.log("Starting metadata update...");
fs.readdirSync(path).forEach((fileName) => {
  if (!fileName.endsWith(".json")) {
    return;
  }
  const filePath = path + "/" + fileName;
  const stat = fs.statSync(filePath);
  if (!stat.isFile()) {
    return;
  }
  const tokenId = getTokenId(fileName);
  const jsonContent = require(filePath);
  jsonContent.name = buildName(jsonContent.name, tokenId);
  jsonContent.description = buildDescription(jsonContent.description, tokenId);
  jsonContent.image = buildImgUrl(jsonContent.image, tokenId);
  fs.writeFileSync(filePath, JSON.stringify(jsonContent, null, 2));
  console.log(`Metadata updated for file: ${fileName}`);
});

console.log("Metadata update complete!");
