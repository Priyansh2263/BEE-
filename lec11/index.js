// accessing dom element
//1.using id
//2.using class
//3.using tag
//4.querySelector/querySelectorAll

const { useLayoutEffect } = require("react");

// let el1=document.getElementById("heading");
// console.log(el1);

// let ele2=document.getElementsByClassName("item");
// console.log(ele2[0])

// let ele3=document.getElementsByTagName("p");
// console.log(ele3[0]);

// let ele4=document.querySelector("p");
// console.log(ele4);

// let ele5=document.querySelector


//properties
/*
innerText
inner HTML
text Content
*/

let data=el4.innerText;
console.log(data)
ele4.innerText="changed using js"

let data2=ele4.innerHTML;
console.log(data2);

let data3=ele4.textContent;
console.log(data3);

ul.innerHTML=`<li class="item">item 4</li>`