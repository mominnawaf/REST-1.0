var express = require('express');
var router = express.Router();
const Models=require("../models/models");

router.get('/api/:Id',async (req,res)=>{
  var user =await Models.findById(req.params.Id);
  res.json(user);
})
router.post('/api', async (req, res) => {
  var user = new Models(req.body)
  var savedUser= await user.save();
  res.json(savedUser);
})
router.delete('/api/:Id',async(req,res)=>{
  var user = await Models.remove({_id : req.params.Id})
  res.json(user);
})
router.put('/api/:Id',async(req,res)=>{
  var user = await Models.updateOne({_id:req.params.Id},{$set:{Name:req.body.name}})
  res.json(user);
})
module.exports = router;
