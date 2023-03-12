const fs = require("fs");
const cheerio = require("cheerio");

const name = "write-a-review"
const htmlFilePath = `../${name}.html`;
const txtFilePath = `../result/${name}.txt`;

const extractedContent = fs.readFileSync(txtFilePath, "utf8");

const $ = cheerio.load(fs.readFileSync(htmlFilePath, "utf8"));

const elementsToReplace = ["span","p","h1","h2","h3","label","button","a","div"];

let index = 0;
elementsToReplace.forEach((el) => {
  $(el).each((i, elem) => {
    $(elem).text(extractedContent.split("\n")[index]);
    index++;
  });
});

fs.writeFileSync(htmlFilePath, $.html());
console.log("Content placed back into HTML file.");