const fs = require("fs");
const path = __dirname + "/output";
const buildDescription = (oldValue, id) => "Example desc... using ID#" + id;
const buildName = (oldVale, id) => "Name #" + id;
const buildImgUrl = (oldValue, id) => "ipfs://__CID__" + id + ".png";

const getTokenId = (fileName) => {
  return fileName.match(/(0-9)+\.json/)[1];
};

fs.readdirSync(path).forEach((fileName) => {
  const filePath = path + "/" + fileName;
  const stat = fs.statSync(filePath);

  if (!stat.isFile()) {
    return;
  }

  if (fileName.endsWith(".json")) {
    const jsonContent = require(filePath);
    const tokenId = getTokenId(fileName);

    jsonContent.name = buildName(jsonContent.name, tokenId);
    jsonContent.description = buildDescription(
      jsonContent.description,
      tokenId
    );
    jsonContent.image = buildImgUrl(jsonContent.image, tokenId);

    fs.writeFileSync(filePath, JSON.stringify(jsonContent, null, 2));
  }
});
