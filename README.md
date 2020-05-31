# u-develop-it
Voting application, consisting of an Express.js API and a relational database.

## GitHub repository
https://github.com/ktrnthsnr/u-develop-it

## Table of Contents
* [Description](#description)
* [Installations](#installations)
* [Usage](#usage)
* [Technology](#technology)
* [Schema](#schema)
* [Contribution](#contribution)

## Description
This repo contains a command-line voting application, consisting of an Express.js API and connection to a relational database. For this app, tables were created in SQLite, for candidates, parties, voters and votes, each with their own API endpoints. Node.js and JavaScript server-side scripts will connect to the database which will complete queries based on client requests, and respond with data to the end user.

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
- To view the colums and rows in the terinal, $ .header on, $ .mode column
- To start the command-line application run
- $ npm start

## Test
- Note: Test files provided for this exercise: /__tests__/inputCheck.test.js, /utils/inputCheck.js
- Run a test in the terminal
- $ npm test

## Technology
SQLite3, Node.js, Express.js, npm, Inquirer, Jest, JavaScript, ES6, HTML, CSS

## Schema
-- Tables

## Contribution
ktrnthsnr

### ©️2020 ktrnthsnr
