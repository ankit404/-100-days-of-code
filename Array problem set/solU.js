

console.log("%%%%%%%%%%  priting sum of array  %%%%%%%%%");
var ar=prompt("enter the length of array");
var arrs=[ar];
alert("enter array elements to be sumed up");
while(ar!==0){
    arrs[ar]=prompt(" ");
    console.log("array index "+ ar +":"+ " " +arrs[ar]);
    ar--;
}
var sum=0;
for(ar=0;ar<arrs.length;ar++){
sum=sum+arrs[ar];
}
console.log("sum of array:" + sum);
