const Customer = require("../models/Customer");

const insertcustomer = async (request, response) => {
  try {
    const input = request.body;
    const customer = new Customer(input);
    await customer.save();
    response.send('Registered Successfully');
  } catch(e) {
    response.status(500).send(e.message);
  }
};

const checkcustomerlogin = async (request, response) => {
  try {
    const input = request.body
    const customer = await Customer.findOne(input)
    response.json(customer)
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const customerprofile = async (request, response) => {
  try {
    const email = request.params.email
    const customer = await Customer.findOne({ email })
    if(customer) {
      response.json(customer)
    } else {
      return response.status(200).send('Customer not found with the provided email id');
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

module.exports = {
  insertcustomer,
  checkcustomerlogin,
  customerprofile
};
