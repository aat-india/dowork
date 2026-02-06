console.log("starts !!!!!!!!!!!!!!!!!");
console.log("commit 2");
const input=document.getElementById("inp");
const btn=document.getElementById("btn");
const myList=document.getElementById("list");
const myTodoList=[];

btn.addEventListener('click', takeInput);
btn.addEventListener('');

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
    let li=document.createElement("li");
    li.textContent=userInput;
    myList.appendChild(li);
}