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
const deleteItem = async (req, res) => {
  try {
    const {id} = req.params;

    const deletedItem = await Item.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).send("Item not found");
    }
    res.status(200).json({message: 'Item deleted successfully'});
  } catch (err) {
    console.error(error);
    res.status(500).json({message: 'Server error'});
  }
};
module.exports = {
  getItems,
  addItem,
  updateItem,
  deleteItem,
};
