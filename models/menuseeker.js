const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  itemname: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  variant: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    data: Buffer,
    contentType: String,
  }
});

const MenuSeeker = mongoose.model('MenuSeeker', menuSchema);

module.exports = MenuSeeker;
