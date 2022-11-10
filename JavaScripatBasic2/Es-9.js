//for await of loop to support asynchronous iteration.
async function fntest(){
    for await (const val of [10,20,30,40]){
       console.log(val)
    }
 }
 fntest();

 //ES9 supports the use of Spread operators with Objects.
 const student = {
    age:10,
    height:5,
    weight:50
 }
 const {age,...other} = student;
 console.log(age)
 console.log(other)

 //The spread operator can be used to combine multiple objects or cloning objects.
 const obj1 = {a:10,b:20}
   const obj2={c:30}
   //clone obj1
   const clone_obj={...obj1}
   //combine obj1 and obj2
   const obj3 = {...obj1,...obj2}
   console.log(clone_obj)
   console.log(obj3)

 /*The finally() is executed whenever a promise is settled, regardless of its outcome. 
 This function returns a promise.
  It can be used to avoid code duplication in both the promise's then() and catch() handlers.*/
 let asyncSquareFn = function(n1){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
          if(n1>=0){
             resolve(n1*n1)
          }
          else reject('NOT_POSITIVE_NO')
       },3000)
    })
 }
 asyncSquareFn(10)
 .then(result=>{
    console.log("result is",result)
 }).catch(error=>console.log(error))
 .finally(() =>{
    console.log("inside finally")
 })