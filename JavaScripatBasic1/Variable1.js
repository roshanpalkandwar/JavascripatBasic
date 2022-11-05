//1. For var Variable
console.log("After Use VAR Variable...........")
var name ="Roshan";
name="deshpande";
console.log(name);

var WhoWillWinToday="india";
if(true){
    var WhoWillWinToday="NewZeland";
    console.log(WhoWillWinToday);
}
console.log(WhoWillWinToday);


console.log("After Use LET Variable......")

//2.For Let Variable
let name1 ="Roshan";
name1="deshpande";
console.log(name1)

let WhoWillWinToday1="india";
if(true){
    let WhoWillWinToday1="NewZeland";
    console.log(WhoWillWinToday1);
}
console.log(WhoWillWinToday1);

console.log("After Use Const Variable")

//3 for const variable
//const name2 ="Roshan";
//name2="deshpande";
//console.log(name1)
const WhoWillWinToday2="india";
if(true){
   const WhoWillWinToday2="NewZeland";
    console.log(WhoWillWinToday2);
}
console.log(WhoWillWinToday2);

var sname="Rohit Kumar";
function modjs(opt){
    if(opt){
        var name="vinod";
        var sname="thapa";

        console.log("may name is "+name+" "+sname);
    }
    console.log("may name is "+name+" "+sname);
}
console.log("may name is "+sname);
modjs(true);