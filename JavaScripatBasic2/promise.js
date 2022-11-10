
function abc(){
    return new Promise((resolve,reject)=>{
        let flag=true;
        if(flag==false){
            resolve("promise resolved");
        }
        else
        {
            reject("promise rejected");
        }
    });
};
abc()
.then((value)=>console.log("after resolve------->",value))
.catch((error)=>console.log("after rejected------->",error));

//------Example 2    it is basic Example of Promise------
// const count = true;



// let countValue = new Promise(function (resolve, reject) {
//     if (count) {
//         resolve("There is a count value.");
//     } 
//     else {
//             reject( "There is no count value." );
//           }
//           resolve()
//     }
    
// );

// console.log(countValue);

//-----Example 3 Promise Chaining  using .then---------

// let countValue1 = new Promise(function (resolve, reject) {
// resolve("Promise was resolved");
// });

// // executes when promise is resolved successfully

// countValue1
//   .then(function successValue(result) {
//     console.log(result);
//   })

//   .then(function successValue1() {
//     console.log("You can call multiple functions this way.");
//   });


//   console.log(countValue1);


  //-----Example 3 Promise Chaining  using .catch---------

  let countValue3 = new Promise(function (resolve, reject) {
    reject('Promise  was rejected'); 
 });
 
 // executes when promise is resolved successfully
 countValue3.then(
     function successValue(result) {
         console.log(result);
     },
  )
 
 // executes if there is an error
 .catch(
     function errorValue(result) {
         console.log(result);
     }
 );

 console.log(countValue3);