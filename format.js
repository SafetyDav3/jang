const fs = require("fs");
const path = require("path");
const prettier = require("prettier");

const metadataDir = path.join(process.cwd(), "output", "metadata");

console.log("\nFormatting metadata files...\n");
fs.readdir(metadataDir, (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    if (!file.endsWith(".json")) {
      return;
    }

    const filePath = path.join(metadataDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    console.log(`Formatting ${file} ...`);

    const formattedContent = prettier.format(fileContent, {
      parser: "json",
      tabWidth: 2,
      useTabs: false,
    });

    fs.writeFileSync(filePath, formattedContent);
  });

  console.log(`\nFormatted ${files.length} metadata files.\n`);
});
