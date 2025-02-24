//Defines the API routes for the item model
const express = require('express');
const router = express.Router();
const{
    getItems,
    addItem,
    updateItem,
    deleteItem,
} = require('../controllers/itemController');

//Define the API routes
router.get('/', getItems); //GET /items
router.post('/', addItem); //POST /items
router.put('/:id', updateItem); //PUT /items/:id
router.delete('/:id', deleteItem); //DELETE /items/:id

module.exports = router;