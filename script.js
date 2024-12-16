
const choice= ["rock","paper", "scissors"]

function getComputerChoice(){
    let x = Math.floor(Math.random()*3);
    return(x);
}

let computerNumber;
function getHumanChoice( computerNumber){
let userChoice = prompt("rock,Paper, scissors?");

if (userChoice == choice[computerNumber]){
    console.log("Drow");
    console.log(userChoice); 
    console.log(choice[computerNumber]);}
    
else if (userChoice =="rock"){
    x = choice[computerNumber]
    switch (x) {
     case "Paper" : console.log("i am the winner");
     console.log(userChoice); 
     console.log(x);
     break;
     case "scissors" : console.log("you are the winner"); 
     console.log(userChoice); 
     console.log(x);
     break;
     return;
     
    
    }}
    else if (userChoice =="paper"){
        x = choice[computerNumber]
        switch (x) {
         case "scissors" : console.log("i am the winner");
         console.log(userChoice); 
         console.log(x);
         break;
         case "rock" : console.log("you are the winner"); 
         console.log(userChoice); 
         console.log(x);
         break;
         return;
         
        
        }}
    else {
        x = choice[computerNumber]
        switch (x) {
         case "rock" : console.log("i am the winner");
         console.log(userChoice); 
         console.log(x);
         break;
         case "paper" : console.log("you are the winner"); 
         console.log(userChoice); 
         console.log(x);
         break;
         return;
         
    
        }}

}


getHumanChoice(getComputerChoice());