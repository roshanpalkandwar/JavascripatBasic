const perone=(friend,callback,c)=>
{
    console.log("hi "+friend)
    callback();
    c();
}
const pertwo=()=>{
    console.log("i am call back you later ")
}
const perthree=()=>{
    console.log("any work ")
}

perone( "Roshan",perthree,pertwo);

//example 2//
function sum(a,b)
{
    console.log(a+b)
}
function operation(a,b,callback){
    callback(a,b)
}
operation(7,8,sum)

//example 3//
let order=(Book)=>{
    console.log("Book Getting not");
    Book()
}
function adreess()
{
  console.log("Book Adress in rack")
}
order(adreess);

//example 4//
function Greet(name,d){
   console.log('hi'+ ' '+name)
   d();
}
function call(){
    console.log(' i did you call');
}
Greet("roshan",call);

//example 5//

function enrollment(student,callback){
    setTimeout(function(){
        student.push(student);
        console.log('student has been enrolled');
        callback();
    },3000);
}

function getstudent(){
    setTimeout(function(){
        let str=" ";
        student.forEach(function(student){
            str +=`<li>${student.name}</li>`
            
        });
        document.getElementById('student').innerHTML=str;

        console.log("student have been fetched");
    },1000);
}

let newStudent={name:"sunny",subject:"python"}
enrollment(newStudent,getstudent);
//getstudent();