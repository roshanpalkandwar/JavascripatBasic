const outerFun=(a)=>{
    let b=10;
    const innerFun=()=>{
        let sum=a+b;

        console.log("the sum of two number "+sum);
    }
    return innerFun;
}
//outerFun(5);

let store=outerFun(10);
console.log(store);
store();