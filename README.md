# Project Instructions
# Evaluate A News Article with Natural Language Processing

4th project at [Udacity](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) Front End Web Developer Nanodegree program.

## Description
This project is a web app that uses an external MeaningCloud Sentiment Analysis API to perform a check of user entered URL for positivity, subjectivity, irony. 

The goal of this project is to practice:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls
- Using NLP for interpreting meaning of texts



## Installation
Make sure Node and npm are installed from the terminal.
```
node -v
npm -v
```

1. Move to the project folder
```
cd <project directory>
```
2. Clone the repo
```
git clone <repo>
```
3. Install npm
```
npm install
```
4. Install loaders and plugins
```
# Choose the necessary installation for your development mode
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
```
5. Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

6. Configure environment variables using dotenv package
	1. Install the dotenv package
	```
	npm install dotenv
	```
	2. Create a new `.env` file in the root of your project
	3. Fill the `.env` file with your API key like this:
	```
	API_KEY=**************************
	```
7. Start the project

Command | Action
:------------: | :-------------:
`npm run build-prod` | Build project
`npm start` | Run project

8. Open browser at http://localhost:8081/

## Test
Jest is a framework for testing JavaScript projects.  The Jest framework provides us the ability to create, and run unit tests. We wrote tests for desired functions defined in the src/client/js directory. The tests will check if the functions are behaving expectedly when provided an input.
-  Install Jest by usings ```npm install--save-dev jest```
-  Run the ```npm run test``` command.