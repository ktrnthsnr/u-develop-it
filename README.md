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
Main activities in this exercise includes:
- Creating the SQLite db, tables and inserting data; and then creating the schema and seed sql scripts
- Setting up Node.js with SQLite, Jest tests, and creating the Express.js server
- Connecting the Express.js server to the SQLite database, and creating select statements wrapped in Express get routes

## Installations
- If cloning to your repository, to setup please follow these instructions:
- Prereq: install VSCode, Node.js, and SQLite https://www.sqlite.org/download.html#win32
- After cloning the GitHub repo to your local drive, run the following in the VSCode command-line terminal
- Setup Node.js by installing npm
- $ npm init -y
- Then create .gitignore file in the root to add node_modules to this file, or run $ echo "node_modules/" > .gitignore.
- Install npm packages for sqlite3 CLI
- $ npm install express sqlite3
- Install npm Inquirer, for more info https://www.npmjs.com/package/inquirer
- $ npm install inquirer
- Install Express.js (already installed in the previous step)
- $ npm install express --save or $ npm i express
- Install npm Jest, then update packages.json's script reference to "test": "jest"
- $ npm install jest --save-dev
- If you need to re-add any of the npm dependencies, run $ npm install

## Usage
- To create and seed the db, table and data, run 
- $ npm run migrate
- $ npm run seed
- To open the sqlite3 CLI
- $ sqlite3 
- Open a db $ .open db/election.db 
- Other common SQLite commands in the CLI include, $ .database, $ .schema, $ .tables
- To view the colums and rows better in the terminal, $ .header on, $ .mode column
- To exit sqlite, Ctrl-Z-Shift
- To start the Express.js server, in the terminal enter this
- $ npm start

## Test
- Note: Jest test files provided for this exercise: /__tests__/inputCheck.test.js, /utils/inputCheck.js
- Run a Jest test in the terminal
- $ npm test
- To validate local browser responses, test in the Insomnia tool at these endpoints
- DELETE http://localhost:3003/api/candidate/1
- GET http://localhost:3003/api/candidates

## Technology
SQLite3, Node.js, Express.js, npm, Inquirer, Jest, Insomnia, JavaScript, ES6, HTML, CSS

## Contribution
ktrnthsnr

### ©️2020 ktrnthsnr