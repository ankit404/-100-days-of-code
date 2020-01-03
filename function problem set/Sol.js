console.log("-----------even---------");
var num=prompt("input the number");
console.log(isEven(num));
function isEven(){
    if(num%2===0){
        return true;
    }
    else{
        return false;
}
    
}

console.log("-------factorial----------");
var nums=prompt("enter the number for factorial");
var mul=1;
 
console.log(factorial());
function factorial(){
    if(nums===0){
        console.log("1");
    }else{
       while(nums>0){
           mul=nums*mul;
           nums-=1;
       }
       console.log(mul)
    }
}

console.log("-------------kebeb to snake-----------");
var st=prompt("input the kebab-cased string ex: hello-world ");
console.log(kebebToSnake());
function kebebToSnake(){
        var res = st.replace("-","_");
        console.log(res);
}
