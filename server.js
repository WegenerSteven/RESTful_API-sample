const express = require("express");
const connectDB = require("./config/db");
const itemRoutes = require("./routes/itemRoutes");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(bodyParser.json());

//connect to database

connectDB();

//use item routes
app.use("/items", itemRoutes);

//serve static files for the UI
app.use(express.static("public"));

//start server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
