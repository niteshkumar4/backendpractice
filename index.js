require('dotenv').config()

const express = require("express");
//import express from  "express"
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/nitesh",(req,res) => {
res.send ("nitesh singh");
})
app.listen(process.env.PRORT, () => {
  console.log(`Example app listening on port ${port}`);
});
