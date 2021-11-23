 let userScore = 0;
 let compScore = 0;
// References 
 const userScoreSpan = document.getElementById("userScore");
 const compScoreSpan = document.getElementById("compScore");
 const scoreBoardDiv = document.querySelector("scoreBoard");
 const resultp = document.querySelector(".result > p");
 const rockDiv = document.getElementById("r");
 const paperDiv = document.getElementById("p");
 const scissorsDiv = document.getElementById("s");

 function getcomputerChoice() {
     const choices = ['r', 'p', 's'];
     const randomNumber = Math.floor(Math.random() * 3);
     return choices[randomNumber];
 }

 function caps(letter) {
     if (letter === "r") return "Rock";
     if (letter === "p") return "Paper";
     return "Scissors";
 }
 
 function win(userChoice, computerChoice) {
     const userWord = "you".fontsize(3).sub();
     const compWord = "comp".fontsize(3).sub();
     const userChoiceDiv = document.getElementById(userChoice);
     userScore++;
     userScoreSpan.innerHTML = userScore;
     compScoreSpan.innerHTML = compScore;
     resultp.innerHTML = `${caps(userChoice) + userWord} beats ${caps(computerChoice)}${compWord} You Win!`; 
     userChoiceDiv.classList.add("greenGlow");
     setTimeout(() => userChoiceDiv.classList.remove("greenGlow"), 500);
 }

 function lose(userChoice, computerChoice) {
     compScore++;
     userScoreSpan.innerHTML = userScore;
     compScoreSpan.innerHTML = compScore;
     const userChoiceDiv = document.getElementById(userChoice);
     const userWord = "you".fontsize(3).sub();
     const compWord = "comp".fontsize(3).sub();
     resultp.innerHTML = caps(computerChoice) + compWord + " beats " + caps(userChoice) + userWord + " You Lose!"; 
     userChoiceDiv.classList.add("redGlow");
     setTimeout(() => userChoiceDiv.classList.remove("redGlow"), 500);
 }
 
 function draw(userChoice, computerChoice) {
     const userChoiceDiv = document.getElementById(userChoice);
     userScoreSpan.innerHTML = userScore;
     compScoreSpan.innerHTML = compScore;
     resultp.innerHTML = "Draw!"; 
     userChoiceDiv.classList.add("grayGlow");
     setTimeout(() => userChoiceDiv.classList.remove("grayGlow"), 500);
 }
 
 function game(userChoice) {
     const computerChoice = getcomputerChoice();
     switch(userChoice + computerChoice) {
         case "sp":
         case "pr":
         case "rs":
             win(userChoice, computerChoice);
             break;
         case "rp":
         case "ps":
         case "sr":
             lose(userChoice, computerChoice);
             break;
         case "rr":
         case "pp":
         case "ss":
             draw(userChoice, computerChoice);
             break;
     } 
 }

 function main() {
    //  click function
    rockDiv.addEventListener('click', () => game("r"));  
    paperDiv.addEventListener('click', () => game("p")); 
    scissorsDiv.addEventListener('click', () => game("s"));  
 }

 main();