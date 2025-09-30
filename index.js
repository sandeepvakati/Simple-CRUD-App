const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js"); // Import the Product model
const productRoute = require("./routes/product.route.js");
const app = express();


//middlewear
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API updated");
});


//update a product



//deleate a product


mongoose.connect("mongodb+srv://sandeepvakati1_db_user:1vAuy9qWeuL53CXb@babu-api.oqxky1a.mongodb.net/?retryWrites=true&w=majority&appName=Babu-API")
  .then(() => {
    console.log("Connected To Database");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed!");
  });
