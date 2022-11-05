// 1. Synchronize
// console.log("Hello!");
// console.log("Hellow World");
// console.log("How are you")

//2. Asynchronize

console.log("Hello!");

setTimeout(function(){
   console.log("Hellow World");
},3000);

console.log("How are you")