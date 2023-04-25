// server.js
require('dotenv').config() // this line is mandatory when you want to read variables from the '.env' file 
console.log(`The server will run on port ${process.env.SERVER_PORT}`);
console.log(`The secret key ${process.env.SECRET_API_KEY} will be used to connect to the third party API`);
console.log(`The server will connect to the database with the user "${process.env.DB_USER}" and the password "${process.env.DB_PASSWORD}"`);
