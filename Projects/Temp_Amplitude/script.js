"use strict";

const num1 = document.querySelector("[name='num1']");
const num2 = document.querySelector("[name='num2']");
const num3 = document.querySelector("[name='num3']");
const num4 = document.querySelector("[name='num4']");
const num5 = document.querySelector("[name='num5']");
const num6 = document.querySelector("[name='num6']");
const num7 = document.querySelector("[name='num7']");
const calcTempAmplitude = function () {
  let max = Math.max(
    num1.value,
    num2.value,
    num3.value,
    num4.value,
    num5.value,
    num6.value,
    num7.value
  );
  let min = Math.min(
    num1.value,
    num2.value,
    num3.value,
    num4.value,
    num5.value,
    num6.value,
    num7.value
  );
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude();
console.log(amplitude);
document.querySelector("button").addEventListener("click", (event) => {
  event.preventDefault();
  const result = document.querySelector(".result");
  result.innerHTML = calcTempAmplitude();
});
