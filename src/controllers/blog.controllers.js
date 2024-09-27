const Blogmodel=require('../models/blog.models')
exports.postblog=async(req,res)=>{
   const image=req.file ? req.file.filename : null
    const xresult=new Blogmodel({title:req?.body?.title ,
        content:req?.body?.content,image})
    const result=await xresult.save()
    console.log(image)
    res.send({result})

}
exports.getblog=async(req,res)=>{
    const result=await Blogmodel.find({})
    res.send(result)
}