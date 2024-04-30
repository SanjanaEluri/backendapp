const menuseekercontroller=require('../controllers/menucontroller')

const express = require("express")
const menuseekerrouter = express.Router()

menuseekerrouter.get("/viewmenu",menuseekercontroller.viewmenu)
menuseekerrouter.post("/insertmenu",menuseekercontroller.insertmenu)

//  menuseekerrouter.post("/addtocart",menuseekercontroller.addtocart)
// menuseekerrouter.get("/ordereditem/:name",menuseekercontroller.ordereditem)

module.exports=menuseekerrouter