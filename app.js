const express = require ("express")

const app = express()

app.get("/", (req,res)=>{
   // console.log ("Hello from root side");
    console.log(__dirname);
    res.sendFile(__dirname+ "/index.html")
   //res.send("hello from root side")

})

app.listen(3000,()=>{
    console.log ("server start at port no : 3000")
})
