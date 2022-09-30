const express = require('express');
const cors = require('cors');
const app = express();

let users = [
    {
        email: '',
        firstName: '',
        lastName: '',
        profession: '',
        address: '',
        phoneNumber: '',
        username: '',
        password: '',
    }
]

app.use(express.json());

app.use(cors());

app.use('/login', (req,res) => {
    const userIndex = users.findIndex(
        ({username, password}) => 
            username === req.body.username && password === req.body.password
    ); 
    if (userIndex < 0) {
        res.status(401);
        res.send({error: "Wrong username or password."})
        return
    }

    const token = (Math.random() + 1).toString(36).substring(7);
    users[userIndex].token = token;

    res.send({
        token
    });

});

app.use('/register', (req,res) => {
    const token = (Math.random() + 1).toString(36).substring(7); 
    
    users = [
        ...users,
        {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            profession: req.body.profession,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            username: req.body.username,
            password: req.body.password,
            token,
        }
    ]
    console.log(users);

    res.send({
        token
    });
});

app.use('/me', (req,res) => {
    const userIndex = users.findIndex(({token}) => token === req.body.token);
    if (userIndex < 0) {
        res.status(401);
        res.send({error: "Unauthorized"})
        return
    }

    res.send({
        me: users[userIndex]
    });
});

app.listen(8080, ()=> console.log('API is running on http://localhost:8080/server'));

module.exports = app;

