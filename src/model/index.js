const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const ContactSquema = Schema ({
    name: String,
    last_name: String,
    address: String,
    status: {
        type: Boolean,
        default: true,
  },
    });

module.exports = mongoose.model ('contact', ContactSquema);