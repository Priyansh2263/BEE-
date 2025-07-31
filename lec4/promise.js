// const { rejects } = require("assert");
// const { resolve } = require("path");



// let p= new Promise((resolve,reject)=>{
//     resolve("wada pura kiya")

// })
// console.log(p);

// p.then((data)=>{
//     console.log(data)

// })
// p.catch((err)=>{
//     console.log(err)

// })

let product = [
    {
        name:'samsung',
        amount: 30000,
        qty : 10
    },
    {
        name : 'Iphone',amount : 70000 , qty : 15
    }
]



function buyProduct(product_Name){
   return new Promise((resolve,reject)=>{
        let isProduct=product.find((p)=> p.name==product_Name)
        if (isProduct) {
            resolve("Product Found");
        } else {
            reject("Product not found");
        }

    })
}
buyProduct("iphonew").then((amount)=>{
        console.log(amount)
    })
    .catch((err)=>{
        console.log(err)
    });

