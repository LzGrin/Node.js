const {rl, askQuestion} = require('./readline');
const {writeFile} = require('./modulFile');


function editProduct(products) {
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
                    products.forEach((element, index) => {
                        if (element.articul === enteredArticul) {
                            products.splice(index, 1, {
                                name,
                                price,
                                articul,
                                count    
                            });
                            
                        };
                        
                    });
                    writeFile(products);
                    console.log('Product edited');
                    askQuestion();
                });
            });    
        });
   });
}

   module.exports = {
    editProduct
}
