function ReversString(str){
    let newstring="";
    for(let i=str.length-1;i>=0;i--)
    {
        newstring += str[i];
    }
    console.log(newstring);
}
let string="ABC";
ReversString(string);