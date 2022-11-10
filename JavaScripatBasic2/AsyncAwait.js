//function resolveAfter2Seconds():Promise<any>
// var abc=()=>{
//     let a=2;
//     let b=2;
//     let ab=a+b;
//     return ab;
// };
// function resolveAfter2Seconds(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(abc());
//         },2000);
//     });
// }
// async function asynCall(){
//     letabc=6;
//     console.log("Calling");
//     const result= await resolveAfter2Seconds();
//     console.log("After resolve result",result);
//     const FinalResult=result+abc;
//     console.log("After resolve",FinalResult);
//     //expected output:"resolved"
// }
// asynCall();
// var clouser;

//example 2 //

// async function smith(){
//     console.log('inside smith function');
//     const response=await fetch ('https://api.github.com/user');
//     console.log('before response');
//     const users=await response.json();
//     console.log('users resolved')
//     return users;
// }

// console.log('before calling smith');
// let a= smith();
// console.log('after calling smith');
// console.log(a);
// a.then(data=>console.log(data))
// console.log('last line of this is file')

// example 3//

async function getdata(){
    let handlePromise= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("All Done");
        },1000);
    })
    console.warn("a")
    let x= await handlePromise;
    console.log(x);
    console.log("c")
    
}
getdata();

//example 4

async function test(){
    console.log("2: meassage");
    await console.log("3: meassage")
    console.log("4 : message")
}
console.log("1: message");
test();
console.log("5 : meassage")