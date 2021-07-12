const express=require('express');
const router=express.Router();
const ctrl=require('../controllers')

router.get('/all',ctrl.post.showAll)
router.get('/:indx',ctrl.post.getPost);
router.put('/:indx',ctrl.post.editPost);
router.post('/newpost',ctrl.post.createPost);
router.delete('/:indx',ctrl.post.deletePost);


module.exports=router;