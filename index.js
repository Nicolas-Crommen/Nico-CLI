#!/usr/bin/env node

let country=process.argv[2];

let date=new Date();
let year=date.getFullYear();

if (process.argv[3]!=undefined) {
	year=process.argv[3];
}

const { getCode, getName } = require('country-list');
let country_code = getCode(country);

const axios = require("axios");

async function getHolyDays() {
	const response = await axios.get("https://date.nager.at/api/v2/publicholidays/"+year+"/"+country_code);

let results = response.data;
results.forEach(function(result) {
	console.log(result.date + " : " + result.name);
});

}

getHolyDays()
