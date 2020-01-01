console.log("All numbers between -10 and 19");

for(var count=0;count<=19;count++){
    console.log(count);
   
}
console.log("-------------------------------------");
console.log("even number 10 and 40");
for(var cnum=10;cnum<=40; cnum++){
    if(cnum%2===0){
        console.log(cnum);
    }
   
}

console.log("-------------------------------------------");
console.log("all odd numbers between 300 and 333");
for(var onum=301;onum<=333;onum+=2)
{
    console.log(onum);
    
}

console.log("-------------------------------------------");

console.log("all numbers divisible by 5 AND 3 between 5 and 50");
var num=5;
for(var num=5;num<=50;num+=1){
    if(num%3===0 && num%5===0){
        console.log(num);
    }
    
}

//----------------------------------------------------------

