const express = require('express');
const connection = require('../connection');
const router = express.Router();

require('dotenv').config();

router.get('/getTimeStories',(req,res)=>{
    var query = "select title,link from link";
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})

module.exports = router;