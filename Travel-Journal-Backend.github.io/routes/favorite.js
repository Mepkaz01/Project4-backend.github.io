const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/all', ctrl.favorite.getFavoriteAll);
router.get(':fid/profile/:uid', ctrl.favorite.getFavorite)
router.post(':fid/profile/:uid', ctrl.favorite.addFavorite)
router.delete('/:fid', ctrl.favorite.deleteFavorite)

module.exports = router