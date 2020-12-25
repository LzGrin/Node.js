const readLine = require('readline');
const {products, writeFile} = require('./modulFile');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
module.exports = {
    rl,
    askQuestion
}

const {editProduct} = require('./edit');

function askQuestion() {
    rl.question('Choose action: 0- exit, 1-view products, 2-add product, 3-remove product, 4-\n', (answer) => {
        manageAnswer(answer);
    });
}

function manageAnswer(answer) {
    switch (answer) {
        case "1":
            console.table(products);
            askQuestion();
            break;
        case "0":
            rl.close();
            break;
        case "2": {
            let name;
            let price;
            let articul;
            let count;
            rl.question('Enter name:\n', (enteredName) => {
                name = enteredName;
                rl.question('Enter price:\n', (enteredPrice) => {
                    price = enteredPrice;
                    rl.question('Enter articul:\n', (enteredArticul) => {
                        articul = enteredArticul;
                        rl.question('Enter count:\n', (enteredCount) => {
                            count = enteredCount;
                            products.push({
                                name,
                                price,
                                articul,
                                count
                            });
                            writeFile(products);
                            console.log('Product added');
                            askQuestion();
                        });
                    });
                });
            });
        }

            break;
        case "3":
            rl.question('Enter articul:\n', (enteredArticul) => {
                products.forEach((element, index) => {
                    if (element.articul === enteredArticul) {
                        products.splice(index, 1);
                        writeFile(products);
                    }


                });
                askQuestion();
            });

            break;
        case "4":
            editProduct(products);

            break;
        default:
            console.log('HGR');
    }
}
