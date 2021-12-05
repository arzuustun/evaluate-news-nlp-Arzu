const dotenv = require("dotenv");
dotenv.config();
const API_KEY = process.env.API_KEY;
const { SERVER_PORT } = process.env;

var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const fetch = require('node-fetch');

const app = express();

//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Configure express static directory.
app.use(express.static("dist"));
//app.use(express.static('src/client'))

console.log(__dirname);

const baseURL = "https://api.meaningcloud.com/sentiment-2.1";

console.log(`Your API key is ${API_KEY}`);

app.get('/', function (req, res) {
	res.sendFile('dist/index.html');
});

//test api
app.get("/test", function (req, res) {
	res.send(mockAPIResponse);
});

// designates what port the app will listen to for incoming requests
app.listen(SERVER_PORT, (error) => {
	if (error) throw new Error(error);
	console.log(`Server listening on port ${SERVER_PORT}!`);
});

// POST method
app.post("/datas", async (req, res) => {
	const response = await fetch(`${baseURL}?key=${API_KEY}&url=${req.body.url}&lang=en`);
	console.log("response url:", response);
	try {
		const data = await response.json();
		res.send(data);
	} catch (error) {
		console.log("error", error);
	}
});
