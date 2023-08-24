//make requires
const express = require("express");
const path = require("path");
const fs = require("fs");
const {v4: uuidv4 } = require('uuid')

// express and middleware
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//create port

//api routing
//app.get

//app.post

//app.delete

//connection
//note delete

//add event listener
//view note