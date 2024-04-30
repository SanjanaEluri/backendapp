const customercontroller = require("../controllers/customercontroller.js")

const express = require("express")
const customerrouter = express.Router()

// job seekeer routes
customerrouter.post("/insertcustomer",customercontroller.insertcustomer)
customerrouter.post("/checkcustomerlogin",customercontroller.checkcustomerlogin)
customerrouter.get("/customerprofile/:email",customercontroller.customerprofile)
// customerrouter.post("/applyitem",customercontroller.applyitem)
// customerrouter.get("/applieditems/:email",customercontroller.applieditems)

module.exports = customerrouter