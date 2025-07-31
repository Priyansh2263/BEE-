let data1 =[
    {
        name:"Sourav",
        age:"20",
        address:"banur"
    },
]
let data2 =[
    {
        name:"shiva",
        age:"20",
        address:"ambala"
    },
]

const fs=require("fs");

fs.writeFile("../user1.txt",JSON.stringify(data1),function(err){
    if(err) return err;
    console.log("data1");
})

fs.writeFile("../user2.txt",JSON.stringify(data2),function(err){
    if(err) return err;
    console.log("data2");
})