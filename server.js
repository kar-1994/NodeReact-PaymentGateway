const express = require('express');
const Product = require('./models/productModel');

const port = process.env.PORT || 8000;
var app = express();
var db = require('./db');
app.use(express.json());

const productRoute = require('./routes/productRoutes');
const userRoute = require('./routes/userRoutes');

app.use('/api/products/',productRoute);
app.use('/api/users/',userRoute);

app.get('/',(req,res)=>{
    res.send(`Server working at port ${port}`);
});

app.listen(port,()=>{
    console.log('Server started listening on port 8000 at localhost');
});