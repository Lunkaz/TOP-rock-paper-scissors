
  	function gamePlay(e) { 

      const reset = function() {
        //;
        
        setTimeout("location.reload(true);", 1000);
      }


  		const computerPlay = function() {
	    let randomNumber = Math.floor((Math.random() * 3) + 1);
	    return (randomNumber === 1)? "Rock":
	           (randomNumber === 2)? "Paper":
	           "Scissors";
	    }

	    const computerSelection = computerPlay();
  		
  		let playerSelection = e.target.id;

  		var rounds = document.querySelector(`#rounds`);
    	rounds.textContent = `Round: ${++round}`;

  		if (playerSelection === computerSelection ){
        result.textContent = `It's a draw.`;
      } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
               playerSelection === "Scissors" && computerSelection === "Paper" ||
               playerSelection === "Paper" && computerSelection === "Rock") {
         result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
         scorePlayer.innerText = `Your Score: ${++playerPoints}`;
      
      } else {
         result.textContent = `Computer win! ${computerSelection} beats ${playerSelection}`;
         scoreComputer.textContent = `Computer score: ${++computerPoints}`;
      };

      const finalWinner = document.querySelector(`h1`);

      if (round === 5) {

        if (playerPoints === computerPoints) {
          finalWinner.textContent = "It's a draw!";
           reset();
        } else if (playerPoints > computerPoints) {
           finalWinner.textContent = "You win!";reset(); 
        } else {  finalWinner.textContent ="Computer win!"; reset(); }

      }
  	}



	const buttons = document.querySelectorAll('button');  	
  		buttons.forEach((button) => {
			button.addEventListener('click', gamePlay);
	});

  	
  		var round = 0 ;
    	var playerPoints = 0;
    	var computerPoints = 0;
	
  		var result = document.querySelector('#result');
  		result.textContent = `Start.`;

      const scorePlayer = document.querySelector('#scorePlayer');
      const scoreComputer = document.querySelector('#scoreComputer');
    
