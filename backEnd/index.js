const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(cors({
    origin:'http://localhost:8081'
}))
const routes=require('./routes/route')

const port=5000
const url='mongodb+srv://adaneeshete:adaneeshete@cluster0.9qj7xxi.mongodb.net/mobileApp'
mongoose.connect(url).then(()=>{console.log('mongdb connect')}).catch((error)=>{console.log('error during conncetion',error)})
app.use('/',routes)

app.listen(port,()=>{
    console.log(`server is running at ${port}` )

})