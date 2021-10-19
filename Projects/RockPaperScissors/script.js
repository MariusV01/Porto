"use strict";

// const cInputChoice = document.querySelector('.cInputChoice');
// const userChoice = document.querySelector('.userChoice');

// let cOptions = ['Rock', 'Paper', 'Scissors'];

// let cInput = cOptions[Math.floor(Math.random()*cOptions.length)];

const options = document.querySelectorAll(".options");

options.forEach((option) => {
  option.addEventListener("click", function () {
    const pInput = this.textContent;
    const cOptions = ["Rock", "Paper", "Scissors"];
    const cInput = cOptions[Math.floor(Math.random() * cOptions.length)];

    //   const cOptions = ["Rock", "Paper", "Scissors"];
    //   const cInput = cOptions[Math.floor(Math.random() * 3)];

    play(pInput, cInput);
  });
});

// const output = `cInput: ${cInput}, User: ${user}`
// document.querySelector('.result').innerHTML = `<u> The result is: </u>` + `<b> ${output} </b>`;

function play(pInput, cInput) {
  const output = `Computer: ${cInput},    Player: ${pInput}`;
  document.querySelector(".result").innerHTML =
    `<u> The result is: </u>` + `<b> ${output} </b>`;

  if (pInput === cInput) {
    document.querySelector(".winner").innerHTML =
      `<u> No winner this round: </u>` + `<b> It's  Tie </b>`;
  } else if (
    (cInput === "Paper" && pInput === "Rock") ||
    (cInput === "Rock" && pInput === "Scissors") ||
    (cInput === "Scissors" && pInput === "Paper")
  ) {
    document.querySelector(".winner").innerHTML =
      `<u> Winner of this round: </u>` + `<b> Computer </b>`;
  } else if (
    (pInput === "Paper" && cInput === "Rock") ||
    (pInput === "Rock" && cInput === "Scissors") ||
    (pInput === "Scissors" && cInput === "Paper")
  ) {
    document.querySelector(".winner").innerHTML =
      `<u> Winner of this round: </u>` + `<b> Player </b>`;
  }
}

const start = document.querySelectorAll(".startGame");
start.forEach((option) => {
  option.addEventListener("click", function () {
    play();
  });

  $("span:contains('Rock')").css("display", "none");
  $("button:contains('Rock')").css("background-image", "url(rock.png)");

  $("span:contains('Paper')").css("display", "none");
  $("button:contains('Paper')").css("background-image", "url(paper.png)");

  $("span:contains('Scissors')").css("display", "none");
  $("button:contains('Scissors')").css(
    "background-image",
    "url(scissors.png)",
    "position",
    "center"
  );

  // window.onload(play);
  // const play1 = play();
  // // document.querySelector('.winner').innerHTML = `<u> Winner of this round: </u>`+ `<b> ${play1} </b>`;
});
