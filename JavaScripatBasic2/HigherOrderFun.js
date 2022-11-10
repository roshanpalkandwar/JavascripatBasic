
const intrviewQ=(name)=>{
    if(name=="vinod"){
        return function(topic){
            console.log("hi "+name+" what is "+topic);
        }
    }
    if(name=="Vishal"){
        return function(topic){
            console.log("hi "+name+" what is "+topic);
        }

    }
    if(name=="Vikas"){
        return function(topic){
            console.log("hi "+name+" what is "+topic);
        }
    }
    else{
        return function(){
            console.log(" wele come Interview ")
        }
    }
    
}
//intrviewQ("vinod")("UI");

let cand=intrviewQ("Vikas");
cand("UI");
cand("Ux");

 cand=intrviewQ("vinod");
cand("lx");
cand("hosting");