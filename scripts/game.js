let answer = document.getElementById("answer-section");
let letters = document.querySelectorAll(".letters div");

let words = ["star", "sky", "bored", "hamada"];
let random = Math.floor(Math.random() * words.length);

let arrayOfLetters = [];
let wrongLetter = 0;
let totalAttempts = 6;
let randomWord = words[random];

for (letter of randomWord) {
  arrayOfLetters.push(letter);
  answer.innerHTML = arrayOfLetters.map(() => `<span>-</span>`).join("");
}

letters.forEach((letter) => {
  letter.addEventListener("click", () => {
    letter.classList.add("pressed");
    let clickedLetter = letter.textContent.toLowerCase();
    compareLetters(clickedLetter);
  });
});

// on keypress event
document.addEventListener("keydown", (e) => compareLetters(e.key));

function compareLetters(clickedLetter) {
  if (arrayOfLetters.includes(clickedLetter)) {
    [...randomWord].forEach((letter, index) => {
      if (letter === clickedLetter) {
        answer.querySelectorAll("span")[index].innerText = letter;
      }
    });
  } else {
    wrongLetter++;
    addBody(wrongLetter);
  }
  // reload the game when using all the attempts
  if (wrongLetter === totalAttempts) {
    alert("Game Over!");
    window.location.reload();
  }
}

// add another part to the body  when choose wrong letter
function addBody(wrongLetter) {
  switch (wrongLetter) {
    case 1:
      head();
      break;
    case 2:
      body();
      break;
    case 3:
      leftHand();
      break;
    case 4:
      rightHand();
      break;
    case 5:
      leftLeg();
      break;
    case 6:
      rightLeg();
      break;
  }
}
