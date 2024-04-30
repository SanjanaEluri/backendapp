//menuseeker
const mongoose = require('mongoose');

const itemschema = new mongoose.Schema({
  itemname: {
    type: String,
    required: true,
    unique:true
  },
  email: {
    type: String,
    required: true,
    unique:true
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
    type: String,
    required: true
  },
  category:{
    type: String,
    required: true

  },
  image: {
    data: Buffer,
    contentType: String,
  }
  
});

const itemseeker = mongoose.model('menuseeker', itemschema);

module.exports = itemseeker;