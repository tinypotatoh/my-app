
This project was created with React App.

Description
The project has a home page where users can sign up or log in. The user will be taken to the user profile page after logging in or signing up. By selecting the log out option, users can leave the user profile page.

How to Run the Project

Client:
`npm start`
Starts the React App on port 3001 (http://localhost:3001).

Server:
`npm run start:api`
Starts the server on port 8080 (http://localhost:8080).

The project contains three endpoints:
1. /login checks username and password against an in-memory database of users and issues a token if the check succeed.
2. /register pushes a new user into the in-memory database and issues a token
3. /me takes the token passed from the front-end finds a user with this token and returns users 
information.

