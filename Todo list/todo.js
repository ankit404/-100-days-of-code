var todo=["cycling","swiming"];

var aws=prompt("What do you want to do?");

while(aws!=="quit"){

if(aws==="new"){
addTodo();
   }
else if(aws==="list")
{   
   listTodo();
   }
else if(aws==="delete")
{
    deleteTodo();
   }
var aws=prompt("What do you want to do?");
}

function addTodo(){
    var ad=prompt("enter a new todo");
    todo.push(ad);

}
function listTodo(){
    todo.forEach(function(todos,i){
        console.log('**************');
    console.log(i + " : " + todos);
    });
    console.log('**************');
}
function deleteTodo(){
    var index=prompt("enter the index you want to delete");
    todo.splice(index,1);
    console.log("Deleted Todo" + index);
    console.log('----------------------');
}