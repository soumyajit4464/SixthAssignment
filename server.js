const express= require('express')
const mongoose= require("mongoose")
const app=express()
const port = process.env.PORT || 3000;


app.use(express.json())
app.use(express.urlencoded({extended:false}))



app.get('/',(req,res)=>{
    res.send("Sixth Assignment of Soumyajit Biswas")
})

app.listen(port, () => {
    console.log(`Server is running on port localhost:${port}`);
  });
