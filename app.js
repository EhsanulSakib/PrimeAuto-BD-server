/* external imports */
const express = require("express");

const cors = require("cors");
require("dotenv").config();

/* internal imports */
const error = require("./middleware/error.middleware");


/* application level connection */
const app = express();

/* middleware connections */
app.use(
    cors({
      origin: "*",
    })
  );

app.use(express.json());
app.use(express.urlencoded());

/* global error handler */
app.use(error);

/* connection establishment */
app.get("/",(req,res,next)=>{
    try{
        res.status(200).json({
            acknowledgement: true,
            message: "OK",
            description: "The request is OK",
        })
    }
    catch(err){
        next(err)
    }
    finally{
        console.log(`Route: ${req.url} || Method: ${req.method}`)
    }
})

module.exports = app