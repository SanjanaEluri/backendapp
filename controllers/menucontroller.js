//menucontroller.js
const Menuseeker = require('../models/menuseeker');



const display = ( response) => {
  response.send('<h3>Backend is running successfully!</h3>');
};

const insertmenu = async (request, response) => {
  try {
    const { itemname,email, price, quantity,varient,category } = request.body;

    const image = request.file ? request.file.buffer : undefined;

    const menuseeker = new Menuseeker({
      itemname,
      email,
      price,
      quantity,
      varient,
      category,
      image: {
        data: image,
        contentType: request.file ? request.file.mimetype : undefined,
      },
    });

    await menuseeker.save();
    response.send('Registered Successfully');
  } catch (e) {
    console.error(e);
    response.status(500).send(e.message || 'Internal Server Error');
  }
};

const viewmenu = async (request, response) => {
  try {
    const displaymenu = await Menuseeker.find();
    if (displaymenu.length === 0) {
      response.send("DATA NOT FOUND");
    } else {
      // Send the image data along with other data
      const menuWithImageData = displaymenu.map(item => ({
        _id: item._id,
        itemname: item.itemname,
        price: item.price,
        quantity: item.quantity,
        varient:item.varient,
        category: item.category,
        image: {
          contentType: item.image.contentType,
          data: item.image.data.toString('base64'),
        },
      }));
      response.json(menuWithImageData);
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const deletemenu = async (request, response) => {
  try {
    const { itemname } = request.params;
    console.log('Deleting item with Name:', itemname);

    const item = await Menuseeker.findOneAndDelete({ "itemname": itemname });

    if (item != null) {
      console.log('Deleted item:', item);
      response.send("Deleted Successfully");
    } else {
      response.status(404).send("Item Not Found");
    }
  } catch (error) {
    console.error('Error during delete:', error.message);
    response.status(500).send(error.message);
  }
};

const ordereditem = async (request, response) => {
  try {
    const name = request.params.itemname
    const orderitem = await Customer.find({"itemname": name});
    if(orderitem.length == 0) {
      response.status(200).send("DATA NOT FOUND ");
    } else {
      response.json(orderitem);
    }
  } catch(error) {
    response.status(500).send(error.message);
  }
};

// orders.js
const addtocart = async (request, response) => {
  try {
    const input = request.body;
    const newItem = new Item(input);
    await newItem.save();
    response.send('Added to cart successfully');
  } catch(e) {
    if (e.code === 11000 && e.keyPattern && e.keyPattern.itemname) {
      // Duplicate key error, item with same name already exists in cart
      response.status(400).send('Item already in cart');
    } else {
      response.status(500).send('some errors');
    }
  }
};



  module.exports = {insertmenu,viewmenu,deletemenu,ordereditem,addtocart,display};
