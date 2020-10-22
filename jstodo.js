var mytodos=[];
var num=0;

let mytodolist = document.querySelector(".mytodolist");
let btnadd = document.querySelector(".btnadd");
let todo = document.querySelector(".input");

function addTodo(){
  if(todo.value !==""){
    num++;
    //mytodos.push(todo.value);

    mytodos['task'+num]=todo.value;
  
  let TR=document.createElement("tr");
  TR.setAttribute("id",num);
  TR.innerHTML="<td>"+num+"</td><td>"+todo.value+"</td> <td><i class='fas fa-edit' style='font-size:24px;color:green'></i><i tasknum='"+num+"' onclick='removeEl()' class='fas fa-trash ml-3' style='font-size:24px;color:red'></i></td>";
   
  mytodolist.appendChild(TR);
  }
}

function removeEl()
{
  let elid=event.target.getAttribute("tasknum");
  el = document.getElementById(elid);
   delete mytodos["task"+elid];
  console.log(mytodos);

 el.remove();

}