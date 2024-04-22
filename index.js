require('dotenv').config()

const express = require('express') // its a require module syntax


const app = express() // variable made using express like it gives many features like for math we get pi abs etc..


const port = 4000  // server hear the response at this port....


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/twitter' , (req,res) =>{
    res.send('hiteshdotcom')
})

app.get('/login' , (req,res)=>{
    res.send('<h1> Please login at chai aur code</h1>')
})

app.get('/youtube' ,  (req,res)=>{
    res.send('<h2>Chai aur Code</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})  

