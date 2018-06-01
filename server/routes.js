const Users = require("../database/schema.js").Users;

const url = require('url')

const path = require('path')

//Query to post a user
exports.creatUser = (req, res ) => {
 User.create({
   Name: req.body.Name
 }, (err,user) => {
   if(err) {
     res.send(err);
   }
 })
}
