const Admin =require('../models/Admin')
const Seller=require('../models/Sellershema')
const checkadminlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       console.log(input)
       const admin = await Admin.findOne(input)
       response.json(admin)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };
  

   const viewmenu = async (request, response) => 
 {
    try 
    {
      const viewmenu = await viewmenu.find();
      if(viewmenu.length==0)
      {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(viewmenu);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };
  const viewallprofile = async (request, response) => {
    try {
      // Retrieve the email from params
      const seller = await Seller.find(); // Find a single document by email
      if (!seller) {
        response.send("DATA NOT FOUND");
      } else {
        response.json(seller);
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };

  module.exports = {checkadminlogin,viewmenu,viewallprofile}