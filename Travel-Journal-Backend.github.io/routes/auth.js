const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.post('/usersignup', ctrl.auth.userSignup);
router.post('/userlogin', ctrl.auth.userLogin);
router.post('/adminsignup', ctrl.auth.adminSignup);
router.post('/adminlogin', ctrl.auth.adminLogin);

module.exports = router;