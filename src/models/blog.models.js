const mongoose=require('mongoose')


const BlogSchema=new mongoose.Schema({
    title:String,
    content:String,
    image:String,
})

const Blogpost=mongoose.models.blogschema || mongoose.model('blogschema',BlogSchema)
module.exports=Blogpost