const express=require('express')
const router=express.Router()
const { createpost, updatepost, deletepost, getsinglePost, getallposts, getalluserposts, getAllPost } = require('../controllers/post')



router.post('/create',createpost)
router.put('/:_id',updatepost)
router.delete('/delete/:_id',deletepost)
router.get('/singlePost/:_id',getsinglePost)
router.get('/getalluserposts',getalluserposts)
router.get ('/getAllPost/:_id',getAllPost)





module.exports=router