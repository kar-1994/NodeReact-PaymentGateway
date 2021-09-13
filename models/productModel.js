const mongoose = require('mongoose');

//Defining Product Model
const productModel = mongoose.model('Product', {
    productName: {
        type: String,
        required: [true, 'Product Name is required'],
    },
    description: {
        type: String,
        required: [true, 'Product description is required'],
    },
    productCode: {
        type: String,
        required: [true, 'Product Code is required'],
    },
    price: {
        type: Number,
        required: [true, 'Product Price is required'],
    },
    thumbnailFileUrl: {
        type: String,
        required: [true, 'Product thumbnail File Url is required'],
    },
    imageFileUrl: {
        type: String,
        required: [true, 'Product image File Url is required'],
    }
}, 'products');

module.exports = productModel;