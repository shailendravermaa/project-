require('dotenv').config()
const express = require('express')//common js and module js


const app = express()

const port = 3000//virtual port bhi hote hai ,as defined by the 16-bit field in the TCP and UDP headers. 2^(16)=65,536 range (0-65,535) for the network itself
//made a server for which 
app.get('/', (req, res) => {//home route par 
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{// slash par listen karta hai ans slash twitter par respond 
    res.send('hiteshdotcom')
})

// app.get('/login',(err,req,res,next)=>{//this is all four parameter
//     res.send(' <h1>please login </h1>')
// })
app.get('/login',(req,res)=>{//this is all four parameter
  res.send(' <h1>please login </h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>chai aur code</h2>')
})
  //listen jo port me hai
app.listen(process.env.PORT, () => {//we are listing to the 3000 port 
  console.log(`Example app listening on port ${port}`)
})