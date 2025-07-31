const express = require("express")

const app = express();
app.use(express.static(__dirname+"/public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+"/index.html")
// })
// app.get("/about",(req,res)=>{

//     res.sendFile(__dirname+"/about.html")
// })
app.post("/user",(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;

    res.json({
        username,
        password

    })

    // console.log("user:",username,pass)
})

app.listen(3001,()=>{
    console.log("server is running at http://localhost:3001");
})