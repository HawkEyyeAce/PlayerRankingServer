# PlayerRankingServer

How to setup nodejs server :
Clone this project

BDD SETUP :
Select bdd type (mysql, postgre, ...).
Install it (mysql here: Download mysql Installer)
Launch and setup mysql service with correct computer port (3306 in this project), root and password (ormconfig.json to change it).
Create "mysql" database (With mysql Workbench or with CLI).
(CLI to get ranking table : show databases; use mysql; show tables; select * from ranking;)

Define a specific port for client dataExchange (8080 here). You can change it in index.ts

in the projet directory, open a cmd.exe :
npm install
npm run-script build (to compile in a dist folder)
cd dist
node index.js (to run the server)

-----------------------------------------------------------------------------------------------------

I spent approximately 8 hours on this part, including technology choice, development and testing.
Testing (sending request, casting database parameters) took a significant amount of time.
I first tried to link directly to Unity but I used Postman to send simple queries for easiest testing.

Technical choices :
I used TypeScript, a superset of JavaScript syntax.
Ts introduces optional features such as typing or object-oriented programming.
TypeScript can be transcompiled into JavaScript to be executed.
The executed code will be a JavaScript equivalent of the compiled TypeScript code.

TypeORM is an ORM that can run in NodeJS.
It provide additional features that help develop any kind of application that uses databases.
It is based on Object-Relational Mapping, wich is a programming technique for converting data between
incompatible type systems using object-oriented programming languages.

Express.js is a minimalist framework that allows to make APIs in JavaScript.

Which seemed difficult to me:
Pool developments on the client and server and make them communicate with each other with the right type of data, headers and syntax.
The use of Postman to send and receive requests facilitated this pooling.
Choose the right techno because there are many possible choices with uses may be more suited to this use case.

If I had to push the project a step further :
- Make a more complete log system which is stored in a text file.
- Do other query-level methods to increase the utility of the Unity module.
- Understand why on my rankingGetByScoreAction controller, score decimal is not send (10.1 for example whereas 10 is sent)