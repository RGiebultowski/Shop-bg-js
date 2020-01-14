const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const productsRoutes = require("./api/routes/products");
const productsOrders = require("./api/routes/orders");
const userRoutes = require("./api/routes/users");

mongoose.connect("mongodb+srv://admin:"+ process.env.MONGO_PASS +"@base-6e7uv.mongodb.net/Project0?retryWrites=true&w=majority",{ useNewUrlParser: true , useUnifiedTopology: true});

app.use("/uploads", express.static("uploads"));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/products", productsRoutes);
app.use("/orders", productsOrders);
app.use("/users", userRoutes);

//obsługa nieznanego routu
app.use((req, res, next)=> {
    const error = new Error("Not found");
    error.status = 404;
    next(error);

});

app.use((error, req, res, next)=>{
    res.status(error.status || 500).json({error: error.message});
});


module.exports = app;