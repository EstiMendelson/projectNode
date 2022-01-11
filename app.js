const express = require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const cors = require('cors');
const dotenv=require('dotenv')
dotenv.config()
const app=express()
const category=require('./routs/category')
const item=require('./routs/item')
app.use(cors());  
app.use("/",bodyParser.json())
app.use('/category',category) 
app.use('/item',item)
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.set('debug', { shell: true })
mongoose.connect(process.env.DB_CONNECT, connectionParams)
    .then(() => {
        console.log('connected')
    })
    .catch((err) => {
        console.log('error!!'+err)
    })
   
const port = 5000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))