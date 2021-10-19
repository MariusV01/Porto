"use strict";

function bmiCalculator() {
  const nameInput = document.querySelector(".fullName").value;
  const gender = document.querySelector(".gender");
  const weight = Number(document.querySelector(".weight").value);
  const height = Number(document.querySelector(".height").value);
  const calcBmi = weight / Math.pow(height, 2);
  const result = calcBmi.toFixed(2);
  const output = document.querySelector(".output");
  console.log(result);
  if (result <= 18.5) {
    output.textContent = `Hello, ${nameInput} you are underweight your BMI is ${result}`;
  } else if (18.5 < result < 25) {
    output.textContent = `Hello, ${nameInput} you have a normal weight`;
  } else if (25 < result < 30) {
    output.textContent = `Hello, ${nameInput} you are overweight`;
  } else {
    output.textContent = `Hello, ${nameInput} you are obese`;
  }
}

document.querySelector("button").addEventListener("click", (event) => {
  event.preventDefault();
  // validate();
  bmiCalculator();
});

// const onSuccess = (input) => {
//   const parent = input.parentElement;
//   const messageEle = parent.querySelector("small");
//   // messageEle.innerHTML = message;
//   messageEle.visibilty.display = "hidden";
//   parent.classList.add("succes");
//   parent.classList.remove("error");
// };

// const onError = (input, message) => {
//   const parent = input.parentElement;
//   const messageEle = parent.querySelector("small");
//   messageEle.style.visibility = "visible";
//   messageEle.innerHTML = message;
//   parent.classList.add("error");
//   parent.classList.remove("success");
// };

// const validate = () => {
//   //
//   if (nameInput.trim() === "") {
//     onError(nameInput, `Please enter your name!`);
//   } else {
//     onSuccess(nameInput);
//   }
//   //
//   if (gender.value.trim() === "") {
//     onError(gender, `Please enter your gender!`);
//   } else {
//     onSuccess(gender);
//   }
//   //
//   if (weight < 2) {
//     onError(weight, `Please enter your weight`);
//   } else {
//     onSuccess(weight);
//   }
//   if (height < 2) {
//     onError(height, `Please enter your weight`);
//   } else {
//     onSuccess(height);
//   }
// };

// const validate = () =>{
//   const nameInput = document.querySelector('.name');
//   if(nameInput.value.trim()===''){
//     let messageHolder = document.querySelector('.error');
//     messageHolder.innerHTML = `<h5>No empty!<h5>`;
//     document.querySelector('input').style.borderColor = 'red';
//        return false;

//   }else if(nameInput.value.length < 3){
//     let messageHolder = document.querySelector('.error');
//     messageHolder.innerHTML = `<h5>At least 3 characters needed!<h5>`;
//     document.querySelector('input').style.borderColor = 'red';
//   }
//   else{
//     document.querySelector('input').style.borderColor = 'green';
//     let messageHolder = document.querySelector('.error');
//     messageHolder.innerHTML = '';
//   }
// }

// document.querySelector('.calculate').onclick = (event) =>{
//   event.preventDefault();
//   const doSubmit = validate();
//   if(doSubmit==false){
//     return false;
//   }
// }
