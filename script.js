let humanScore = 0;
let computerScore = 0;
let round = 1;

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

console.log(getComputerChoice());

function getHumanChoice(){
    const choices = ["rock", "paper", "scissors"];
    let userChoice = null;

    while(!userChoice){
        const input = prompt("Enter your choice (rock, paper, scisors)");

        //if user cancels the prompt
        if(input == null){
            alert("user cancelled the prompt");
            return null;
        }

        const normalizedInput = input.toLowerCase().trim();

        if(choices.includes(normalizedInput)){
            userChoice = normalizedInput;
        } else{
            alert("Input valid choice");
        }
    }

    return userChoice;
}

function playRound(computerChoice, humanChoice){
    if(computerChoice == humanChoice){
        console.log("Same choices, next round");
    }

    if(computerChoice == "rock" && humanChoice == "scissors"){
        console.log("rock beats scissors, computer wins");
        computerScore++;
    } else if(computerChoice == "paper" && humanChoice == "rock"){
        console.log("paper beats rock, computer wins");
        computerScore++;
    } else if(computerChoice == "scissors" && humanChoice == "paper"){
        console.log("scissors beats paper, computer wins");
        computerScore++;
    } else if(computerChoice == "scissors" && humanChoice == "rock"){
        console.log("rock beats scissors, human wins");
        humanScore++;
    } else if(computerChoice == "paper" && humanChoice == "scissors"){
        console.log("scissors beats paper, human wins");
        humanScore++;
    } else{
        console.log("paper beats rock, human wins"); 
        humanScore++;  
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
