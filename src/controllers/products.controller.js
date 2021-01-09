const { Router } = require('express');
const usersRepository = require('../repositories/products.repository');

const router = new Router();

router.get('/', async (_request, response) => {
    const users = await usersRepository.getAll();
    response.render('pages/products/view', { users });
});

router.get('/add', (_request, response) => {
    response.render('pages/products/add');
});

router.post('/add', async (request, response) => {
    await usersRepository.add(request.body);
    response.redirect('/products');
});

router.patch('/add', async (request, response) => {
    await usersRepository.add(request.body);
    response.redirect('/products');
});

router.put('/add', async (request, response) => {
    await  usersRepository.add(request.body);
    response.redirect('/products');
});

router.delete('/add', async  (request, response) => {
    await  usersRepository.add(request.body);
    response.redirect('/products');
});

module.exports = router;