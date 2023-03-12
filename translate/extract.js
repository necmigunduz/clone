const fs = require("fs");
const cheerio = require("cheerio");

const name = "write-a-review"
const htmlFilePath = `../${name}.html`;
const txtFilePath = `../result/${name}.txt`;

const html = fs.readFileSync(htmlFilePath, "utf8");
const $ = cheerio.load(html);

const elementsToExtract = ["span","p","h1","h2","h3","label","button","a","div"];

const extractedContent = elementsToExtract
  .map((el) => $(el).toArray())
  .flat()
  .map((el) => $(el).text())
  .join("\n");

fs.writeFileSync(txtFilePath, extractedContent);
console.log("Content extracted and saved to TXT file.");