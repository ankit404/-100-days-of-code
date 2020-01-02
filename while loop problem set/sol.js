console.log("All numbers between -10 and 19");
var count=-10;
while(count<=19){
    console.log(count);
    count++;
}
console.log("-------------------------------------");
console.log("even number 10 and 40");
var cnum=10;
while(cnum<=40){
    if(cnum%2===0){
        console.log(cnum);
    }
    cnum++;
}

console.log("-------------------------------------------");
console.log("all odd numbers between 300 and 333");
var onum=301;
while(onum<=333)
{
    console.log(onum);
    onum+=2;
}

console.log("-------------------------------------------");

console.log("all numbers divisible by 5 AND 3 between 5 and 50");
var num=5;
while(num<=50){
    if(num%3===0 && num%5===0){
        console.log(num);
    }
    num+=1;
}

//----------------------------------------------------------
