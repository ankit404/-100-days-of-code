
console.log("-----printing the reverse of array-----");
function revArray(arr){
  for(var i=arr.length-1;i>=0;i--){
      console.log(arr[i]);
  }
}
revArray([1,2,3,4]);

console.log("--------return true, elements in array identical-----------");
var k;
function isUniform(rr){
    var i,j;
    i=0;
    j=rr.length-1;
    while(k<=rr.length){
        if(rr[i]===rr[j]){
            return true;
        }else{
            return false;
        }
    i++;
    j--;

    }

}
isUniform([1,1,1,1]);
