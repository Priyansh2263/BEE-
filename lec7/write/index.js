let users=[
    {
        name:"Priyansh",
        age:"19",
        address:"patiala"
    },
]

const fs = require("fs");
fs.writeFile("../users.txt",JSON.stringify(users),function(err){
    if(err) return console.log(err);
    console.log("users written!!");
})