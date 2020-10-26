const colors=['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];
let guesses = 0;

function do_game(){
    let choice = true;
	let target = Math.floor(Math.random() * colors.length);
    console.log(colors[target]);
    while(choice){
    	let message = "I am thinking in one of this colors: \n \n"+
                  "blue, cyan, gold, green, magenta, orange, red, white,"+ 					 "yellow \n \n"+
    		  	  "What color am I thinking of?";
   		let guess = prompt(message,"");
        choice = checkGuess(colors[target],guess);
    }

function checkGuess(target,guess){
	if(colors.indexOf(guess) == -1){
    	alert("I don’t recognize that color!");
        guesses++;
        return true;
    }
    if(target < guess){
    	alert("Your input is not the correct color!");
        guesses++;
        return true;
    }
    if(target > guess){
    	alert("Your input is not the correct color!");
        guesses++;
        return true;
    }
    if(target == guess){
        document.body.style.backgroundColor = guess;
    	alert("You are right! You took " + guesses + " guesses! \n \n Check the page background!!");
        return false;
    }
}

do_game();