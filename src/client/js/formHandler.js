const fetch = require("node-fetch");

async function handleSubmit(event) {
	event.preventDefault();

	// check what text was put into the form field
	let formText = document.getElementById("name").value;
	//Client.checkForUrl(formText);

	console.log("::: Form Submitted formtext :::", formText);

	document.getElementById("score").innerHTML = "";
	document.getElementById("subjectivity").innerHTML = "";
	document.getElementById("irony").innerHTML = "";
	document.getElementById("text").innerHTML = "";
	document.getElementById("error").innerHTML = "";

	if (Client.checkForUrl(formText)) {

		postData("http://localhost:8081/datas", { url: formText })
		
		.then(function (res) {
			console.log("updateUI", res);
			updateUI(res);
		});
	} else {
		// output error message
		document.getElementById("error").innerHTML ="Invalid URL. Please URL starts with http:// or https:// and has not spaces.";
		console.log("invalid url");
	}
}
// multiple parameter async function usage
const postData = async (url = "", data = {}) => {
	console.log("Analyzing:", data);
	const response = await fetch(url, {
		method: "POST",
		credentials: 'same-origin',
        mode: 'cors',
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	try {
		const newData = await response.json();
		console.log("postData", newData);
		return newData;
	} catch (error) {
		console.log("error", error);
	}
};
//UI Update
const updateUI = (res) => {
	try {
		document.getElementById("score").innerHTML = `Score: ${scoreValue(res.score_tag)}`;
		document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
		document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
		document.getElementById("text").innerHTML = `Text :${res.sentence_list[0].text}`;
	} catch (error) {
		console.log("error", error);
	}
};
// API response output
const scoreValue = (score) => {
	let display;
	switch (score) {
		case "P+":
			display = "Strong Positive";
			break;
		case "P":
			display = "Positive";
			break;
		case "NEW":
			display = "Neutral";
			break;
		case "N":
			display = "Negative";
			break;
		case "N+":
			display = "Strong Negative";
			break;
		case "NONE":
			display = "No Sentiment";
	}
	return display.toUpperCase();
}
export { handleSubmit,scoreValue }
