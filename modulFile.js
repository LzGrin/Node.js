const fs = require("fs");
const path = require("path");
const filePath = path.resolve(__dirname, "file.json");
const fileContent= readFile(filePath);
let products = fileContent && JSON.parse(fileContent) || [];

function readFile(filePath) {
    if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath); //читаем файл
    }
}

function writeFile(content) {
    const jsonContent = JSON.stringify(content, null, 2);  //записываем в файл
    fs.writeFileSync(filePath, jsonContent);
}

module.exports = {
    writeFile,
    products
}

