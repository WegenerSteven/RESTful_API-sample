//logic to handle requests
const Item = require("../models/items");

//GET /items
const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).send(err);
  }
};

//POST /items
const addItem = async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).send(err);
  }
};

//PUT /items/:id
const updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedItem) return res.status(404).send("Item not found");
    res.json(updatedItem);
  } catch (err) {
    res.status(400).send(err);
  }
};

//DELETE /items/:id
const deleteItem = async (re, req) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).send("Item not found");
    res.json(deletedItem);
  } catch (err) {
    res.status(400).send(err);
  }
};
module.exports = {
  getItems,
  addItem,
  updateItem,
  deleteItem,
};
