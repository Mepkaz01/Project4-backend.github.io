const User = require('../models').User;
const Admin = require('../models').Admin;

const userSignup = (req,res) => {
    User.create(req.body)
    .then(newUser => {
        res.json(newUser)
    })
}

const userLogin = (req,res) => {
    User.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    })
    .then(foundUser => {
        res.json(foundUser)
    })
}

const adminSignup = (req,res) => {
    Admin.create(req.body)
    .then(newUser => {
        res.json(newUser)
    })
}

const adminLogin = (req,res) => {
    Admin.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(foundUser => {
        res.json(foundUser)
    })
}



module.exports = {
    userSignup,
    userLogin,
    adminSignup,
    adminLogin
}