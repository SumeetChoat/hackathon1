//This game is called Rock, Paper, scissors.

//The possible outcomes are:
// - Rock beats scissors
// - Scissors beats paper
// - Paper beats rock
// - Tie game = game ends in draw

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' | userInput === 'paper' | userInput === 'scissors') {
        return userInput 
    } else {
        console.log('Error, please enter valid response: rock, paper or scossors');
    }
}

