
const choice= ["rock","paper", "scissors"]

function getComputerChoice(){
    let x = Math.floor(Math.random()*3);
    return(x);
}

let computerNumber;

let output;
let humanScore =0;
let computerScore = 0;

function getHumanChoice( computerNumber){
let userChoice = prompt("rock,Paper, scissors?");

if (userChoice == choice[computerNumber]){
    console.log("Drow");
    console.log(userChoice); 
    console.log(choice[computerNumber]);}
    
else if (userChoice =="rock"){
    x = choice[computerNumber]
    switch (x) {
     case "Paper" : output="i am the winner";
     console.log(userChoice); 
     console.log(x);
     break;
     case "scissors" : output="you are the winner"; 
     console.log(userChoice); 
     console.log(x);
     break;
     return;
     
    
    }}
    else if (userChoice =="paper"){
        x = choice[computerNumber]
        switch (x) {
         case "scissors" : output="i am the winner";
         console.log(userChoice); 
         console.log(x);
         break;
         case "rock" : output="you are the winner"; 
         console.log(userChoice); 
         console.log(x);
         break;
         return;
         
        
        }}
    else {
        x = choice[computerNumber]
        switch (x) {
         case "rock" : output="i am the winner";
         console.log(userChoice); 
         console.log(x);
         break;
         case "paper" : output="you are the winner"; 
         console.log(userChoice); 
         console.log(x);
         break;
         return;
         
    
        }}
console.log(output);
if (output === "you are the winner"){ humanScore +=1;}
else { computerScore +=1;}
}

function replayTheGame(){
getHumanChoice(getComputerChoice());
getHumanChoice(getComputerChoice());
getHumanChoice(getComputerChoice());
getHumanChoice(getComputerChoice());
getHumanChoice(getComputerChoice());
console.log(computerScore)
console.log(humanScore)
}
replayTheGame();