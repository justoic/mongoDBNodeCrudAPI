const express = require("express");
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
// const { ReturnDocument } = require("mongodb");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send("Hello from Node API Server Updated");
});

// MongoDB connection 
mongoose.connect('mongodb://127.0.0.1:27017/myapp')
.then(() => {
    console.log("Connected to the database");
    app.listen(3000, () => {
        console.log("Server is running in port 3000");
    });
})
.catch(() => {
    console.log("Connection failed!");
}); 






