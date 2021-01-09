const path = require('path');
const uuid = require('uuid');
const { readJsonFile, writeJsonFile } = require('../utils/file.utils');

const FILE_PATH = path.resolve(path.dirname(require.main.filename), '..', 'data', 'products.json');

const productsRepository = {

    async getAll() {
        return await readJsonFile(FILE_PATH) || [];
    },

    async get(id) {
        const products = await this.getAll();
        return products.find(user => user.id === id);
    },

    async add(product) {
        const products = await this.getAll();
        const newProduct = {
            id: uuid.v1(),
            ...products
        };
        products.push(newProduct);

        await writeJsonFile(FILE_PATH, products);

        return newProduct;
    },
    async put(product) {
        const products = await this.getAll();

    }
};

module.exports = productsRepository;
