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


## Meaning Cloud Api

Sentiment Analysis is MeaningCloud's solution for performing a detailed multilingual sentiment analysis of texts from different sources.

### Signup for an API key
First, you will need to go [here](https://www.meaningcloud.com/developer/create-account). Signing up will get you an API key. You can take a look at [request](https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/request).

## Install and Run Project
Install the SDK in your project and then we'll be ready to set up your server/index.js file.

Your server index.js file must have these things:

```
npm install
```
```
npm run build-prod
```
npm start
```

Open browser at http://localhost:8081/

## Test
Jest is a framework for testing JavaScript projects.  The Jest framework provides us the ability to create, and run unit tests. We wrote tests for desired functions defined in the src/client/js directory. The tests will check if the functions are behaving expectedly when provided an input.
-  Install Jest by usings ```npm install--save-dev jest```
-  Run the ```npm run test``` command.
