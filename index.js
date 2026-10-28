let num1 = 25;
let num2 = 50;
document.getElementById("num1-el") = num1;
document.getElementById("num2-el") = num2;

function add(){
  document.getElementById("sum-el").textContent = "Sum:" + (num1 + num2);
} 


function subtract(){
     document.getElementById("sum-el").textContent = "Sum:" + (num1 - num2);

}

function divide(){
     document.getElementById("sum-el").textContent = "Sum:" + (num1 / num2);

}

function multiply(){
     document.getElementById("sum-el").text-Content = "Sum:" + (num1 * num2);
}