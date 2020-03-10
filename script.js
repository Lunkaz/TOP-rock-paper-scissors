
let chartNumbers = [ 0, 0];

function gamePlay(e) {
  
  const playerSelection = e.target.id;
  const computerSelection = computerPlay();

  if (playerSelection === computerSelection ){
          $roundWinner.textContent = `It's a draw.`;
        } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
                 playerSelection === "Scissors" && computerSelection === "Paper" ||
                 playerSelection === "Paper" && computerSelection === "Rock") {
           $roundWinner.innerText = `You win!\n${playerSelection} beats ${computerSelection}`;
           $scorePlayer.innerText = `${++chartNumbers[0]}`;
        
        } else {
           $roundWinner.innerText = `Computer win!\n${computerSelection} beats ${playerSelection}`;
           $scoreComputer.innerText = `${++chartNumbers[1]}`;
      };    
        isWinner();
   
   }

function comparePlayers(playerSelection, computerSelection) {
  return chartNumbers[0] > chartNumbers[1] ? $finalWinner.innerText = 'You win!': $finalWinner.innerText = 'Computer wins!';
}






function isWinner(playerSelection, computerSelection) {
  if (chartNumbers[0] == 3 || chartNumbers[1] == 3) {
    comparePlayers(playerSelection, computerSelection);
  //}
  //if (chartNumbers[0] == 4 || chartNumbers[1] == 4) {
     chartNumbers [0]=0;
     chartNumbers[1]=0;
    $scorePlayer.innerText = ``;
    $scoreComputer.textContent = ``;
    
				modal.style.display = "block";

			
        modal.onclick = function( ) {
          modal.style.display = "none";
        }

			
    
    
}}

// DOM
const $scorePlayer = document.querySelector('#scorePlayer');
const $scoreComputer = document.querySelector('#scoreComputer');
const $roundWinner= document.querySelector('#result');
const $finalWinner = document.querySelector('h1');
const $buttons = document.querySelectorAll('button');  	
  		$buttons.forEach((button) => {
			button.addEventListener('click', gamePlay);
	});
  // Computer
const computerPlay = function() {
  let randomNumber = Math.floor((Math.random() * 3) + 1);
  return (randomNumber === 1)? "Rock":
  	     (randomNumber === 2)? "Paper":
  	     "Scissors";
}
var modal = document.getElementById('myModal');
