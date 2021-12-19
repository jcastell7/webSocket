To initializate the project run "npm install" and "npm run start".
This will install all the dependencies and create the sqlite database.
to test the code just go to "http://localhost:3000" if the response is "api is working" then the api is working correctly.
the functionality of the code is using an HTTP get request to "http://localhost:3000/pop" if the database is empty it will return the values as null if not it will return the biggest priority phone call.
