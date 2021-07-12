const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


router.get('/all', ctrl.admin.getAdminAll);
router.get('/profile/:id', ctrl.admin.getAdmin);
router.put('/profile/:id', ctrl.admin.editAdmin);
router.delete('/profile/:id', ctrl.admin.deleteAdmin);

module.exports = router;