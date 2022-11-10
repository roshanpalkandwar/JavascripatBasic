// default Parameter//
const sum=(x,y=2)=>x+y;
let s=sum(3)
console.log(s)

// Template Literals
let x=12;
let y=67 
let str=`value of x${x}, y${y}`
console.log(str);

//Destructuring Assignment

let  myarry=[23,56,78,677688]
let[a,b,...rest]=myarry
console.log(a);
console.log(b);
console.log(rest);

// destrucutre as object
let obj={
    name:"javascripat",
    dbName:"mogodb",
};
let{name,dbName,}=obj
console.log(name);
console.log(dbName);

//FAt Arrow Function
let d=20;
let e=30;

const sum1=()=>{
   return d+e
};console.log(sum1());

//spread Operator=its replace apply,replace concat

function sum2(a,b,c){
    console.log(a+b+c);
}
var aarval=[5,5,3];
console.log(...aarval);
sum2(...aarval);

//concat replace

let arr1=[1,2,3]
let arr2=[4,5,6]

let abc=[...arr1,...arr2]
console.log(abc);

let arrc1=[6,8,9];
let arrc2=[...arrc1,4,5]
console.log(arrc2);
console.log(arrc1)



