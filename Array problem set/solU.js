console.log("-----printing the reverse of array-----");
function revArray(arr){
  for(var i=arr.length-1;i>=0;i--){
      console.log(arr[i]);
  }
}
revArray([1,2,3,4]);

console.log("--------return true, elements in array identical-----------");

function isUniform(r){
var first=r[0];
for(i=1;i<r.length;i++){
    if(first!==r[i]){
        return false;
    }
}
return true;
}
console.log(isUniform([1,2,1,1]));


console.log("-------printing sum of an array-------");
var sum=0;
function sumArray(a){
  for(i=0;i<a.length;i++){
    sum=sum+a[i];
  }
  console.log("the sum of array is:"+" "+sum);
}
sumArray([1,2,3]);


console.log("------------finding  max of the numbers-----------");
var mx,j;
function max(b){
    j=b.length-1
    mx=b[0];
    while(j>=0){
    for(var i=1;i<b.length;i++){
        if(mx<b[i]){
            mx=b[i];
            }
    }
    j--;
}
console.log(mx +" "+"is the maximum number");
}
max([1,2,3,4,5]);
