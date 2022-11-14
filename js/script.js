const  userInput =document.getElementById("userInput");
const btn =document.getElementById("btn");
const todoContainer= document.getElementById("todoContainer");

function getUserInput(){
    if(userInput.value != ""){
        
        let li =document.createElement("li");
        li .innerText =userInput.value
        todoContainer.appendChild(li);
        userInput.value= ""
    }
    else{
        alert("please input something");
    }
}