const fs=require("fs");

fs.readFile("../demo.txt","utf-8",function(err,data1){
    if(err) return console.log(err);
    
    fs.readFile("../demo2.txt","utf-8",function(err,data2){
        if(err) return console.log("error in second file");
           fs.writeFile("./result.txt",data1+"\n"+data2,function(err){
            if(err) console.log(err);
            console.log(" done ")
           })
    })
})