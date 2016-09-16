
// this is to ask the user to choose between the rock, paper and scissors
var userChoice = prompt("Do you choose rock, paper or scissors?");

// to display the users choice
console .log("Users Choice: " + userChoice);

//this is the variable which defines the computer's choice and lies btw 0-1
var computerChoice = Math.random();

if (computerChoice >0 && computerChoice <0.33) 
{
  computerChoice = 'rock';
}
else if(computerChoice >0.34 && computerChoice <0.66) 
{
 computerChoice = 'paper';
} 
else 
{
	computerChoice = 'scissors';
} 
console .log("Computers Choice: " + computerChoice);

// this is to compare the users and computers choice and see who wins
var compare = function(firstChoice , secondChoice)
{
if (firstChoice === secondChoice)
{
    return "The result is a tie"
}

else if(firstChoice === 'rock')
 {
if(secondChoice === 'scissors') 
  {
        return "rock wins";
  }
else
  {
    if(secondChoice === 'paper'){
        return "paper wins";}
  }
 }
  
if (firstChoice === 'paper')
  {
    if(secondChoice === 'rock')
    {
      return "paper wins"
    }
    else
    {
      if(secondChoice === 'scissors'){
        return "scissors wins"
    }
  }
}
  if (firstChoice === 'scissors')
  {
    if(secondChoice === 'rock')
    {
      return "rock wins"
    }
    else
    {
      if(secondChoice === 'paper'){
        return "scissors wins"
    }
  }
  }
};

console.log(compare(userChoice, computerChoice));