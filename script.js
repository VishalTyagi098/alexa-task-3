// SELECTORS
let firstInput=document.getElementById("number1")
let secondInput=document.getElementById("number2")
let add=document.querySelector(".btn-add")
let subtract=document.querySelector(".btn-subtract")
let multiply=document.querySelector(".btn-multiply")
let divide=document.querySelector(".btn-divide")
let power=document.querySelector(".btn-power")
let clear=document.querySelector(".btn-clear")
let output =document.querySelector(".output-textarea")


// EVENT LISTENERS
add.addEventListener("click",addFunction);
subtract.addEventListener("click",subtractFunction);
multiply.addEventListener("click",multiplyFunction);
divide.addEventListener("click",divideFunction);
power.addEventListener("click",powerFunction);
clear.addEventListener("click",clearFunction);


// INPUT FUNCITON
function takingInput(){
  firstNumber= firstInput.value;
  console.log(firstNumber); 
  secondNumber= secondInput.value;
  console.log(secondNumber);
}

// CLEAR FUNCTION
function clearFunction(){
  firstInput.value="";
  secondInput.value="";
  output.value="";
}


// OPERATION FUNCTIONS
function addFunction(){
  takingInput();
  outputValue=parseFloat(firstNumber)+parseFloat(secondNumber);
  output.value=outputValue;
}
function subtractFunction(){
  takingInput();
  outputValue=parseFloat(firstNumber)-parseFloat(secondNumber);
  output.value=outputValue;
}
function multiplyFunction(){
  takingInput();
  outputValue=parseFloat(firstNumber)*parseFloat(secondNumber);
  output.value=outputValue;
}
function divideFunction(){
  takingInput();
  outputValue=parseFloat(firstNumber)/parseFloat(secondNumber);
  output.value=outputValue;
}
function powerFunction(){
  takingInput();
  outputValue=parseFloat(firstNumber)**parseInt(secondNumber);
  output.value=outputValue;
}

