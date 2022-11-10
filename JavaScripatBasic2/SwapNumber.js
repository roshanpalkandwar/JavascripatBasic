
function swapVariable(a,b)
{
    a=a+b;
    b=a-b;
    a=a-b;
    console.log("a : "+a);
    console.log("b : "+b);
}

let a=50;
let b=30;
swapVariable(a,b);