const fs= require("fs");

fs.writeFile("../demo.txt","g26 hello",function(err){
    if(err) return console.log(err);
    console.log("succesfully done");

})

fs.writeFile("../demo2.txt","hello world",function(err){
    if(err) return console.log(err);
    console.log("succesfully done");
})