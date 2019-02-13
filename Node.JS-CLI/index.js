#!/usr/bin/env node

var validator = require("email-validator");
 
validator.validate("teste@mail.com"); // true

console.log("Hello, Node.JS!");