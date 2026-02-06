console.log("starts !!!!!!!!!!!!!!!!!");
const input=document.getElementById("inp");
const btn=document.getElementById("btn");
const myList=document.getElementById("list");

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
    createNewLiElement(userInput);
    input.value="";
}

function createNewLiElement(userInput)
{
    let li=document.createElement("li");
    li.textContent=userInput;
    myList.appendChild(li);
}