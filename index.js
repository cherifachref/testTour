// require express
const express = require("express")



const mongoose = require('mongoose');
const cors = require ('cors')

const tourRouter = require('./routes/tour.js')



// create instance
const app = express()
app.use(cors());
require('dotenv').config()

app.get('/',(req,res)=>{
    res.send('hello achref mern aa !!!!')
})


app.use(express.json({limit:"30mb", extended:true}))



app.use("/tour",tourRouter);





// create PORT
const PORT = process.env.PORT || 5000
const MONGODB_URL = process.env.MONGODB_URL
mongoose
    .connect(MONGODB_URL)
    .then(()=>{
        app.listen(PORT,() => console.log(`server running on port ${PORT}`));
    })
    .catch( (error)=> console.log(`${error} did not connect`) );


