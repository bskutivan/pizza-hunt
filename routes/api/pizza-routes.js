const router = require('express').Router();

const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = require('../../controllers/pizza-controller');
const { update } = require('../../models/Pizza');

//set up GET all and POST at /api/pizzas

router
    .route('/')
    .get(getAllPizza)
    .post(createPizza);


// set up GET ONE, PUT, and DELETE at /api/pizzas/:id

router
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);

module.exports = router;