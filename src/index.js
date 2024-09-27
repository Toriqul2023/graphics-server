const express=require('express')
const mongoose=require('mongoose')
const app=express()
const cors=require('cors')
require('dotenv').config()
const port=process.env.PORT;
const nodemailer = require('nodemailer');
const upload=require('./middlewares/multer.middlewares')
const blogpostroute=require('./routes/blog.routes')
app.use(cors())
app.use(express.json( {limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static('src'));



const user=process.env.USER
const password=process.env.PASSWORD

const uri = `mongodb+srv://${user}:${password}@cluster0.uaiap.mongodb.net/towhidul?retryWrites=true&w=majority&appName=Cluster0`;

const handleDatabase=async()=>{
    try{
        await mongoose.connect(uri)
        mongoose.set('bufferCommands',false) 
    }
    catch(err){
        console.log(err)
    }
   
}
handleDatabase().then(()=>{
    app.get('/',async(req,res)=>{
        res.send(process.env.SPECIAL)
    })
    
   
    app.use('/blog',blogpostroute)
    app.post('/api/uploads', upload.single('image'), (req, res) => {
        if (!req.file) {
          return res.status(400).send('No file uploaded.');
        }
      
        // File path for the uploaded image
        const imageUrl = `http://localhost:4000//uploads/${req.file.filename}`;
        res.json({ imageUrl});
      });
})


app.listen(port,()=>{
    console.log('Hello Bangladesh')
})