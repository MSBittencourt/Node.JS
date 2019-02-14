#!/usr/bin/env node

const axios = require('axios');
const validator = require("email-validator");
const argv = require('yargs').argv;

if (validator.validate(argv._[0])){
    const email = argv._[0];
    const encodedEmail = encodeURIComponent(email);
    const url = 
        'https://haveibeenpwned.com/api/v2/breachedaccount/' + encodedEmail;

axios
.get(url, {headers: {'User-Agent': 'Node CLI tool'} })
.then(function(response){console.log(response.data)})
}