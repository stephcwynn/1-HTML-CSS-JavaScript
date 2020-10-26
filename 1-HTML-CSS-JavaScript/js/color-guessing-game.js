const COLORS_ARRAY = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow']

function runGame(){
    let guessString = 0;
    let correct = false;

    const random_number = Math.random() * 9;
    const randomInteger = Math.floor(random_number);
    const target = COLORS_ARRAY[randomInteger];

   
    do {
        guessString = prompt('I am thinking of one of these colors:\n\n' + COLORS_ARRAY + 
        '\n\nWhat color am I thinking of?\n')
        guessString += 1;
        finished = checkGuess();
    
    } while (!correct);
    
    if(guess == -1) {
        alert("Your input is incorrect.")
        guesses++;
        return true;
    }
   
    
}

function checkGuess(guess,target){
    let correct = false
}

console.log(COLORS_ARRAY.length)

