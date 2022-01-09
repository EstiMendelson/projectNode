const express = require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
var cors = require('cors');
const dotenv=require('dotenv')
dotenv.config()
const app=express()
const router=require('./routs/api')
app.use(cors());  
app.use("/",bodyParser.json())
app.use('/',router) 
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
const connectionParams = {
    useNewUrlParser: true,
   // useCreateIndex: true,
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
//app.get('/', (req, res) => {
//  res.send('Hello World!')
// });+

app.listen(port, () => console.log(`Example app listening on port ${port}!`))