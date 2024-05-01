// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const menuController = require('./controllers/menucontroller');
const sellerrouter = require("./routes/sellerroutes");
require('dotenv').config();
const app = express();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.json());
app.use(cors());

const dburl = process.env.dburl;

mongoose.connect(dburl).then(() => {
  console.log('Connected to DB Successfully');
}).catch((err) => {
  console.log(err.message);
});

app.post('/insertmenu', upload.single('image'), menuController.insertmenu);
app.get('/viewmenu',menuController.viewmenu);
app.get('/',menuController.display);
app.delete('/deletemenu/:itemname', menuController.deletemenu);

const adminrouter =require("./routes/adminroutes");
const menuseekerrouter=require("./routes/menuseeker");
const customerrouter=require("./routes/customerroutes.js");
const { insertseller, checksellerlogin, viewprofile } = require('./controllers/sellercontroller');

app.post('/insertseller', insertseller);
app.post('/checksellerlogin', checksellerlogin);
app.get('/viewprofile/:email', viewprofile);

app.use("",customerrouter);
app.use("",adminrouter);
app.use("",menuseekerrouter);
app.use("", sellerrouter);

const port = process.env.PORT || 2001;
app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
