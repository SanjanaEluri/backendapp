const mongoose = require('mongoose');

const Orderschema = new mongoose.Schema({
  itemname: {
    type: String,
    required: true,
    unique: true
  },
  contact: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  varient: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
});

const CustomerOrder = mongoose.model('customerorders', Orderschema);

module.exports = CustomerOrder;