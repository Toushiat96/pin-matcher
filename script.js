// Taking input number

function inputNumber(id1,id2){
    const input =document.getElementById(id1);
    input.addEventListener("click",function(){
    let getNumber = document.getElementById(id1).innerText;
    // console.log("get number");
    let screen = document.getElementById(id2).value;
    // console.log("screen clicked");
    let add = getNumber + screen;
    document.getElementById(id2).value = add;
})

}

inputNumber("zero","screen");
inputNumber("one","screen");
inputNumber("two","screen");
inputNumber("three","screen");
inputNumber("four","screen");
inputNumber("five","screen");
inputNumber("six","screen");
inputNumber("seven","screen");
inputNumber("eight","screen");
inputNumber("nine","screen");

// clear screen
const clear = document.getElementById("clear")
clear.addEventListener("click",function(){
    document.getElementById("screen").value="";
    document.getElementById("fail").style.display="none";
    document.getElementById("success").style.display = "none";

})

// Generate Pin number

const generatePin = document.getElementById("generatePin");
generatePin.addEventListener("click",function(){
    function randomNumber(min,max){
        return Math.floor(Math.random()*(max - min) + min);
    }

  const res= document.getElementById("generateScreen").value= randomNumber(1000,9999);
  document.getElementById("screen").value="";
  document.getElementById("fail").style.display="none";
  document.getElementById("success").style.display = "none";

})

