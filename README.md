# u-develop-it
Voting application, consisting of an Express.js API and a relational database.

## GitHub repository
https://github.com/ktrnthsnr/u-develop-it

## Table of Contents
* [Description](#description)
* [Installations](#installations)
* [Usage](#usage)
* [Test](#test)
* [Technology](#technology)
* [Contribution](#contribution)

## Description
- This repo contains a command-line voting application, consisting of an Express.js API and connection to a relational database. For this app, tables were created in SQLite, with candidates, parties, and voter tables, each with their own API endpoints. Node.js and JavaScript server-side scripts connect to the database which run SQL queries based on client requests, and respond with data to the end user. 
Main activities in this exercise included:
- Creating the SQLite db, tables and inserting data; and then creating the schema and seed sql scripts
- Setting up Node.js with SQLite, Jest tests, and creating the Express.js server
- Connecting the Express.js server to the SQLite database, and creating SQL select, update, insert, delete, and aggregate select statements wrapped in Express get routes

## Installations
- If cloning to your repository, to setup please follow these instructions:
- Prereq: install VSCode, Node.js, and SQLite https://www.sqlite.org/download.html#win32
- After cloning the GitHub repo to your local drive, run the following in the VSCode command-line terminal
- Setup Node.js by installing npm
- $ `npm init -y`
- Then create .gitignore file in the root to add node_modules to this file, 
or run $ `echo "node_modules/" > .gitignore`
- Install npm packages for sqlite3 CLI
- $ `npm install express sqlite3`
- Install Express.js (already installed in the previous step)
- $ `npm install express --save` or $ `npm i express`
- Install npm Jest, then update packages.json's script reference to "test": "jest"
- $ `npm install jest --save-dev`
- If you need to re-add any of the npm dependencies, run $ `npm install`

## Usage
- To create and seed the db, tables and data, run
- $ `npm run migrate`
- $ `npm run seed`
- Install npm bodyParser
 - $ `npm install body-parser`
- To open the sqlite3 CLI or command line,
- $ `sqlite3` 
- Open the database 
- sqllite> `.open db/election.db` 
- Other common SQLite commands in the CLI include, 
- sqllite> `.database`, sqllite> `.schema`, sqllite> `.tables`
- To view the colums and rows better in the terminal, sqllite> `.header on`, sqllite> `.mode column`
- To validate database, tables, and content after creating and seeding, enter in the SQLite2 CLI:
- sqllite> `.open db/election.db`
- sqllite> `.database` and 
`.tables` and 
`select * from parties;select * from candidates;select * from voters;`
- To exit sqlite, Ctrl-Z-Shift


- To start the Express.js server, in the terminal run this ($ `npm start` or $ `node server.js`), which will invoke the package.json and start the JavaScript, run the following:
- $ `npm start`
- To exit the Express server, type Ctrl-C.

## Test
- Note: Jest test files provided for this exercise: /__tests__/inputCheck.test.js, /utils/inputCheck.js
- Run a Jest test in the terminal
- $ `npm test`
- To test or validate local browser responses in the Insomnia tool, test these endpoints
-   GET http://localhost:3003/api/candidates
-   DELETE http://localhost:3003/api/candidate/1
- More testing samples are included in the ./routes/apiRoutes/*.js files

## Technology
SQLite3, Express.js, Node.js, npm, Jest, Insomnia, JavaScript, ES6, HTML, CSS

## Contribution
ktrnthsnr

### ©️2020 ktrnthsnr