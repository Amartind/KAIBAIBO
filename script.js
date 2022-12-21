//Ask user for Selection
var win = 0;
var loss = 0;
var tie = 0;


function resetGame(){
//todo propmt user for RPS
var userChoice = prompt("what is your choice? r, p or s?");
  console.log(userChoice);
  if (userChoice === "p") {
  userChoice = "paper";
} else if (userChoice === "r") {
  userChoice = "rock";
} else if (userChoice === "s") {
  userChoice = "scissors";
} else {
  prompt("Invalid entry");
  resetGame();
}
  

//todo edgecase what happens if user doesn't pick rps
//todo edgecase what happens if casing doesn't match
//todo edgecase what happens if submit empty

//generate computer Selection
var compChoice = Math.random();
  console.log(compChoice);
if (compChoice <= 0.33) {
  compChoice = "rock";
} else if (compChoice <= 0.66) {
  compChoice = "paper";
} else compChoice = "scissors";
  console.log(compChoice);
//todo random selection of rps
//todo look up random number generator in js

//compare Selection
//todo compare every win tie or loss result
if (userChoice === compChoice) {
  tie++;
  alert(`Its a Tie
    stats:
    Wins: ${win}
    Lose: ${loss}
    Ties: ${tie}`);
} else if (
  (userChoice === "rock" && compChoice === "scissors") ||
  (userChoice === "paper" && compChoice === "rock") ||
  (userChoice === "scissors" && compChoice === "paper")
) {
  win++;
  alert(`You Win!
            stats:
            Wins: ${win}
            Lose: ${loss}
            Ties: ${tie}`);
} else {
  loss++;
  alert(`You Lose
  stats:
  Wins: ${win}
  Lose: ${loss}
  Ties: ${tie}`);
}

//display results
//todo: show results to user in popup

//display stats
//todo create some variable for win,loss tie
//todo update the appropriate variable based on result
var playAgain = confirm("Do you want to play again?")
if (playAgain){
  resetGame();
}
}  
resetGame()
//ask to play again
