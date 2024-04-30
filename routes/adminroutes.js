const admincontroller =require("../controllers/AdminController")

const express = require("express")
const adminrouter = express.Router()


adminrouter.get("/viewmenu",admincontroller.viewmenu)
adminrouter.post("/checkadminlogin",admincontroller.checkadminlogin)
adminrouter.get("/viewallprofile",admincontroller.viewallprofile)
module.exports=adminrouter