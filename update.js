const fs = require("fs");
// TODO: ↓↓↓ correct path name
const path = __dirname + "/metadata";
const buildDescription = (oldValue, id) => "Example desc... using ID#" + id;
const buildName = (oldVale, id) => "Name #" + id;
const buildImageURI = (oldValue, id) => "ipfs://__CID__" + id + ".png";

const getTokenId = (fileName) => {
  return fileName.match(/(0-9)+\.json/)[1];
};

fs.readFileSync(path).forEach((fileName) => {
  const filePath = path + "/" + fileName;
  const stat = fs.statSync(filePath);

  if (!stat.isFile()) {
    return;
  }

  if (fileName.endWith(".json")) {
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
