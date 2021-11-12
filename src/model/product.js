const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const ProductSquema = Schema ({
    name: String,
    description: String,
    price: String,
    stock: String,
   });

module.exports = mongoose.model ('product', ProductSquema);