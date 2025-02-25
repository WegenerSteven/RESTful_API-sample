const express = require("express");
const connectDB = require("./config/db");
const itemRoutes = require("./routes/itemRoutes");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(bodyParser.json());

//use item routes
app.use('/items', itemRoutes);

//connect to database

connectDB();

//serve static files for the UI
app.use(express.static("public"));

//start server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
