const fs = require("fs");
const path = require("path");

const dirPath = path.resolve(__dirname, 'files'); //берем нашу папку и от туда берем files
const filePath = path.resolve(dirPath, 'data.json'); //путь до файла date.json
const file = readFile(filePath); //вызвали функцию readFile

const content = file && JSON.parse(file) || [];//пытаемся распарсить контент, файл сущ? да, пытаемся распарсить json , если не нашли json , то вощвращаем пустой массив = в контенте теперь есть либо пустой массив, оибо содердимоее файла

//дальше нужно понять, что хочет пользователь добавить
const arg = process.argv[2];
content.push(arg);//добавляем его в наш массив

//теперь снова это все превращем в json
const jsonContent = JSON.stringify(content, null, 2);// null, 2  не обыязтельные, тут для читаемости, 2- количесвто пробелов

//теперь верхнюю строчку надо записать в файл
//но для начала надо убедиться, что есть необходимая папка, перед тем как мы в нее положим файл
fs.mkdirSync(dirPath, {recursive: true});//передаем путь до нашей папки dirPath
//после этого сказали, запиши в файл по нашему пути (filePath) вот это контент(jsonContent)


function readFile(filePath) { //функция принимает  наш filePath 
    if (fs.existsSync(filePath)) { //первым делом делаем проверку: а существует ли вообще фаил?
        return fs.readFileSync(filePath); //если существует, то считываем его содержимое
    }
    return null; //если при проверке обнаружилось, что файл не сущетвует, возвращаем null
}