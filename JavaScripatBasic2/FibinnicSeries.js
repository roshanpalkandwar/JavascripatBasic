function Fibonicc(num){
    let n1=0,n2=1,n3,i;
    console.log(n1); 
    console.log(n2);
    for(i=2;i<num;i++){
        
        n3=n1+n2;
        console.log(n3)
        n1=n2;
        n2=n3;
    }    
}let num=10
Fibonicc(num);