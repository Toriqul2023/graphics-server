const express=require('express')
const router=express.Router()
const blogcontroller=require('../controllers/blog.controllers')
const mailController=require('../controllers/mail.controllers')
const upload=require('../middlewares/multer.middlewares')


router.post('/',upload.single('image'),blogcontroller.postblog)
router.get('/',blogcontroller.getblog)
router.get('/mail',mailController.sendMail)


module.exports=router