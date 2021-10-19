"use strict";

// const validate = function (event) {
//   const target = event.target;
//   if (target.value.trim() === "") {
//     target.style.borderColor = "red";
//     target.style.borderWidth = "3px";
//     target.placeholder = `This field can't be empty`;
//   } else {
//     target.style.borderColor = "green";
//   }
// };
// document.querySelector(".userName").addEventListener("input", validate);
// document.querySelector(".userEmail").addEventListener("input", validate);
// document.querySelector(".userSubject").addEventListener("input", validate);
// document.querySelector(".userMessage").addEventListener("input", validate);

// document.querySelector(".btn").addEventListener("click", (event) => {
//   event.preventDefault();
//   const userName = document.querySelector(".userName").value;
//   const userEmail = document.querySelector(".userEmail").value;
//   const userSubject = document.querySelector(".userSubject").value;
//   const userMessage = document.querySelector(".userMessage").value;
//   const success = document.querySelector(".success");
//   if (
//     userName.length >= 2 &&
//     userEmail.length >= 2 &&
//     userSubject.length >= 2 &&
//     userMessage.length >= 2
//   ) {
//     success.textContent = `Hello ${userName} your message has been sent`;
//     success.style.backgroundColor = "";
//     success.classList.add(".success");
//   } else {
//     success.textContent = `All fields must have at least 2 characters`;
//     success.style.backgroundColor = "red";
//   }
// });

const getElement = function (selector) {
  return document.querySelector(selector);
};
