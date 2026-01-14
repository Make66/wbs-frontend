const choiceBtns = document.querySelectorAll("#selection button");
// console.log(choiceBtns);

const playBtn = document.querySelector("#play-button");
const resultDiv = document.querySelector("#result");
const userScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#computer-score");

let playerChoice = "";
let playerWins = 0;
let compWins = 0;

for (const btn of choiceBtns) {
  btn.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    for (const otherBtn of choiceBtns) {
      //   if (otherBtn.id !== playerChoice)
      otherBtn.classList.remove("border-black", "border-2");
    }
    e.target.classList.add("border-black", "border-2");
  });
}

const message = (playerChoice, compChoice, result) => {
  const resultMessage =
    result === "won"
      ? "You win!"
      : result === "lost"
      ? "You lose!"
      : "It's a draw!";
  return `You chose ${playerChoice}. Computer chose ${compChoice}. ${resultMessage}`;
};

playBtn.addEventListener("click", () => {
  if (!playerChoice) return alert("Make a selection!");

  const options = ["rock", "paper", "scissors"];

  const compChoice = options[Math.floor(Math.random() * options.length)];

  switch (true) {
    case playerChoice === "rock" && compChoice === "scissors":
    case playerChoice === "paper" && compChoice === "rock":
    case playerChoice === "scissors" && compChoice === "paper":
      resultDiv.textContent = message(playerChoice, compChoice, "won");
      playerWins++;
      userScore.textContent = playerWins;
      return;

    case playerChoice === "rock" && compChoice === "paper":
    case playerChoice === "paper" && compChoice === "scissors":
    case playerChoice === "scissors" && compChoice === "rock":
      resultDiv.textContent = message(playerChoice, compChoice, "lost");
      compWins++;
      computerScore.textContent = compWins;
      return;

    default:
      resultDiv.textContent = message(playerChoice, compChoice, "draw");
      return;
  }
});

// -----------------------
// ------Alternative------
// -----------------------

// // Elemente auswählen
// const rockBtn = document.getElementById("rock");
// const paperBtn = document.getElementById("paper");
// const scissorsBtn = document.getElementById("scissors");
// const playBtn = document.getElementById("play-button");
// const resultDiv = document.getElementById("result");
// const userScoreEl = document.getElementById("user-score");
// const computerScoreEl = document.getElementById("computer-score");

// // Variablen erstellen
// let userSelection = null;
// let userScore = 0;
// let computerScore = 0;

// // Funktion Buttonauswahl
// function handleSelection(selection, element) {
//   userSelection = selection;

//   rockBtn.classList.remove("ring-4", "ring-black", "scale-110");
//   paperBtn.classList.remove("ring-4", "ring-black", "scale-110");
//   scissorsBtn.classList.remove("ring-4", "ring-black", "scale-110");

//   element.classList.add("ring-4", "ring-black", "scale-110");
// }

// // Event-Listener
// rockBtn.addEventListener("click", () => handleSelection("rock", rockBtn));
// paperBtn.addEventListener("click", () => handleSelection("paper", paperBtn));
// scissorsBtn.addEventListener("click", () =>
//   handleSelection("scissors", scissorsBtn)
// );

// // Spiel-Logik
// playBtn.addEventListener("click", () => {
//   if (!userSelection) {
//     alert("Please make a selection first!");
//     return;
//   }

//   const choices = ["rock", "paper", "scissors"];

//   const computerSelection = choices[Math.floor(Math.random() * 3)];

//   let resultText = "";

//   if (userSelection === computerSelection) {
//     resultText = `It's a draw! Both chose ${userSelection}.`;
//   } else if (
//     (userSelection === "rock" && computerSelection === "scissors") ||
//     (userSelection === "paper" && computerSelection === "rock") ||
//     (userSelection === "scissors" && computerSelection === "paper")
//   ) {
//     userScore++;
//     resultText = `You Win! ${userSelection} beats ${computerSelection}.`;
//   } else {
//     computerScore++;
//     resultText = `You Lose! ${computerSelection} beats ${userSelection}.`;
//   }

//   resultDiv.textContent = resultText;
//   userScoreEl.textContent = userScore;
//   computerScoreEl.textContent = computerScore;
// });
