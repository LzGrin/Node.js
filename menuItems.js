const dirPath = path.resolve(__dirname, 'Node');
const catalog = path.resolve(dirPath, '.product.json');

const file = view(catalog);

const arg = process.argv[2];
content.push(arg);

function view(catalog) {
    if (fs.existsSync(catalog)) {
        return fs.readFileSync(filePath);
    } 
    return null;
}

function showMenu() {
    console.log(
        '1 = Просмотр каталога' +
        '2 = Добавить товар' +
        '3 = Удалить товар' +
        '4 = Изменить товар'
    );
    menuHandler = function(input) {
        switch(input) {
            case '1':
        }
    }
}