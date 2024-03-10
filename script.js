let computerPick;
let computerChoice;
let playerPick;
let playerScore = 0;
let computerScore = 0;
let currentRound = 1;

playRound(computerPick, playerPick);
declareWinner();

   // play five rounds
    function playRound() {
        for (currentRound = 0; currentRound < 5; currentRound++) {
            playGame();
        
        }
    }

// play one round
function playGame(){
    //Prompt for player to pick
    playerPick = prompt("Please enter Rock, Paper or Scissors").toLowerCase();  
    console.log("You have chosen " + playerPick);

// computer picks randomly
computerChoice = Math.floor(Math.random() * 100);
if (computerChoice < 33) {
    computerPick = "rock";
}
else if (computerChoice > 32 || computerChoice < 66) {
    computerPick = "scissors";
}
else computerPick = "paper";

console.log("Computer has chosen " + computerPick);


    if (computerPick === playerPick) {
        console.log("The game was a tie");
        console.log("Player: " + playerScore + " Computer: " + computerScore);
        console.log("------------------");
    }
    else if (computerPick === "rock" && playerPick === "scissors") {
        computerScore++;
        console.log("Computer Wins");
        console.log("Player: " + playerScore + " Computer: " + computerScore);
        console.log("------------------");
    }
    else if (computerPick === "scissors" && playerPick === "rock") {
        playerScore++;
        console.log("Player Wins");
        console.log("Player: " + playerScore + " Computer: " + computerScore);
        console.log("------------------");
    }
    else if (computerPick === "paper" && playerPick === "scissors") {
        playerScore++;
        console.log("Player Wins");
        console.log("Player: " + playerScore + " Computer: " + computerScore);
        console.log("------------------");
    }
    else if (computerPick === "scissors" && playerPick === "paper") {
        computerScore++;
        console.log("Computer Wins");
        console.log("Player: " + playerScore + " Computer: " + computerScore);
        console.log("------------------");
    }
    else if (computerPick === "paper" && playerPick === "rock") {
        computerScore++;
        console.log("Computer Wins");
        console.log("Player: " + playerScore + " Computer: " + computerScore);
        console.log("------------------");
    }
    else if (computerPick === "rock" && playerPick === "paper") {
        playerScore++;
        console.log("Player Wins");
        console.log("Player: " + playerScore + " Computer: " + computerScore);
        console.log("------------------");
    } 

}

        //declare winner
        function declareWinner(){
    if (playerScore > computerScore) {
        console.log("After five rounds the Player wins");
    }
    else console.log("After five rounds the Computer wins");
}

    
    

