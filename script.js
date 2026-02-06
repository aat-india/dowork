console.log("starts !!!!!!!!!!!!!!!!!");
console.log("commit 2");
const input=document.getElementById("inp");
const btn=document.getElementById("btn");
const myList=document.getElementById("list");
const myTodoList=[];

btn.addEventListener('click', takeInput);

function takeInput()
{
    let userInput=input.value;
    if(!userInput)
    {
        alert("Empty not allowed");
        return;
    }
    myTodoList.push(userInput);
    localStorage.setItem("todolist",JSON.stringify(myTodoList));
    createNewLiElement(userInput);
    input.value="";
}

function createNewLiElement(userInput)
{
    let li=document.createElement("li"); //create new li tag element
    li.textContent=userInput; //store textcontent(user input) inside li tag
    myList.appendChild(li); //append li element with textcontent int OL/UL tag =>mylist=>list=>UL
}

function getOldTodos()
{
   // const oldTodos=localStorage.getItem("todolist");
   // console.log(oldTodos);
   const oldTodos=JSON.parse(localStorage.getItem("todolist"));
   if(oldTodos)
   {
        for(let a=0;a<oldTodos.length;a++)
        {
        myTodoList.push(oldTodos[a])
        }
    }
   console.log(myTodoList);
   
}

function showOldTodos()
{
    for(let a=0;a<myTodoList.length;a++)
    {
        createNewLiElement(myTodoList[a]);
    }
}

getOldTodos();
showOldTodos();