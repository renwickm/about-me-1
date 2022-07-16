'use strict';

let userName;
let userScore = 0;
let questionsTotal = 7;
let userGuessing;
let resetQuestion = false;
let yesnoAnswers = ['y', 'n', 'yes', 'no'];
let numberGuessesTotal = 4;
let correctNumber = Math.floor(Math.random() * 10) + 1;
let fruitGuessesTotal = 6;
let fruit = ['apple', 'pear', 'bananna', 'plum', 'mango'];
let i = 0; //Used global scoped variable i for the main for loop beacause I need a cashed version of it to control invalid entry's.

for (i; i <= questionsTotal; i++) {
  if (resetQuestion) {
    i--;
    resetQuestion = false;
  }
  askQuestion(i);
}

alert(`You scored ${userScore} points. Thanks for taking my quiz. I had a blast making it. See you next time ${userName}.`);

function askQuestion(questionNumber) {
  if (questionNumber === 0) {
    userName = prompt('Hello. What is your name?');
    alert(`Welcome to the site ${userName}, glad you could visit. Seeing as you are here you must want to know more about me so let's take a quiz and see how well you are at guessing facts about my life.`);
  } else if (questionNumber === 1) {
    guessingGame(questionNumber, prompt('Yes or No, am I married?').toLowerCase());
  } else if (questionNumber === 2) {
    guessingGame(questionNumber, prompt('Yes or No, do I ride a motorcycle?').toLowerCase());
  } else if (questionNumber === 3) {
    guessingGame(questionNumber, prompt('Yes or No, have I ever won a spelling bee?').toLowerCase());
  } else if (questionNumber === 4) {
    guessingGame(questionNumber, prompt('Yes or No, is my last name really, legally Awesome?').toLowerCase());
  } else if (questionNumber === 5) {
    guessingGame(questionNumber, prompt('Yes or No, do I eat healthy food?').toLowerCase());
  } else if (questionNumber === 6) {
    userGuessing = true;
    resetQuestion = true;
    guessingGame(questionNumber, checkInvalid('Try to guess a number between 1 and 10'));
  } else if (questionNumber === 7) {
    userGuessing = true;
    guessingGame(questionNumber, prompt('Try to guess one my favorite fruits.').toLowerCase());
  }
}

function guessingGame(questionNumber, guess) {
  if (questionNumber <= 5) {
    if (guess === yesnoAnswers[0] || guess === yesnoAnswers[2]) {
      if (questionNumber === 1) {
        alert('Correct! I am indeed married to Sharissa Awesome.');
        userScore++;
      } else if (questionNumber === 2) {
        alert('Actually, it\'s no. I used to but not anymore. I have a tendency to ride dangerously fast but I also like being alive. In the end, I decided to give it up.');
      } else if (questionNumber === 3) {
        alert('You have so much faith in me! But the answer is no, not a chance! I\'m lucky to have been born in the era of the spell-checker.');
      } else if (questionNumber === 4) {
        alert('Yes, it is.  I have no middle name so my full name is Daniel Awesome.');
        userScore++;
      } else if (questionNumber === 5) {
        alert('Absolutely yes! I am super strict about what I eat. Zero sugar no exceptions, no oils, no processed food and very little salt. I eat mainly plants and the smallest bit of meat from time to time.');
        userScore++;
      }
      questionNumber++;
    } else if (guess === yesnoAnswers[1] || guess === yesnoAnswers[3]) {
      if (questionNumber === 1) {
        alert('Ahh, incorrect. I am indeed married to Sharissa Awesome.');
      } else if (questionNumber === 2) {
        alert('You are correct, I used to but not anymore. I have a tendency to ride dangerously fast but I also like being alive. In the end, I decided to give it up.');
        userScore++;
      } else if (questionNumber === 3) {
        alert('You are correct, I have not, nor will I ever win a spelling bee competition. I\'m terrible with spelling and am thankful for spell-checkers.');
        userScore++;
      } else if (questionNumber === 4) {
        alert('Acutally, the answer is yes.  My legal name is Daniel Awesome.');
      } else if (questionNumber === 5) {
        alert('Sorry, the answer is acutally yes. I am super strict about what I eat. Zero sugar no exceptions, no oils, no processed food and very little salt. I eat mainly plants and the smallest bit of meat from time to time.');
      }
      questionNumber++;
    } else {
      alert('Please answer with a yes or a no.');
      resetQuestion = true;
    }
  } else if (questionNumber === 6) {
    while (userGuessing) {
      for (let j = 0; j < numberGuessesTotal; j++) {
        if (resetQuestion) {
          guess = checkInvalid('Try to guess a number between 1 and 10');
        }
        if (guess === correctNumber) {
          alert(`That's it! ${correctNumber} is the correct number.`);
          userScore++;
          userGuessing = false;
          break;
        }
        else if (guess > correctNumber) {
          alert(`${guess} is too high.`);
          resetQuestion = true;
        } else if (guess < correctNumber) {
          alert(`${guess} is too low.`);
          resetQuestion = true;
        }
      }
      if (userGuessing) {
        alert(`Oh noes!  The correct number was ${correctNumber} Sorry, you didn't guess the right number.`);
        resetQuestion = false;
        questionNumber++;
        userGuessing = false;
      }
    }
  } else if (questionNumber === 7) {
    while (userGuessing) {
      for (let j = 0; j < fruitGuessesTotal; j++) {
        if (resetQuestion) {
          guess = prompt('Try to guess one my favorite fruits.').toLowerCase();
          resetQuestion = false;
        }
        for (let k = 0; k < fruit.length; k++) {
          if (guess === fruit[k]) {
            alert(`That's right, a ${fruit[k]} is a type of fruit I like to eat. Just for funsies, all of the correct answers were ${fruit[0]}, ${fruit[1]}, ${fruit[2]}, ${fruit[3]} and ${fruit[4]}`);
            userScore++;
            userGuessing = false;
            j = fruitGuessesTotal;
            break;
          }
          if (k === fruit.length - 1) {
            alert(`Sorry no, ${guess} isn't one of the fruits I like to eat. Guess again`);
            resetQuestion = true;
          }
        }
      }
      if (userGuessing) {
        alert(`Oh Noes! The correct answers were ${fruit[0]}, ${fruit[1]}, ${fruit[2]}, ${fruit[3]} and ${fruit[4]}. Better luck next time.`);
        userGuessing = false;
      }
    }
  }
}

function checkInvalid(promptEntry) {
  let tempGuess;
  while (resetQuestion) {
    tempGuess = parseInt(prompt(promptEntry));
    if (isNaN(tempGuess) === true) {
      alert('Please enter only numbers.');
    } else if (tempGuess > 10 || tempGuess <= 0) {
      alert(`${tempGuess} is an invalid number. You need to guess a number between 1 an 10`);
    } else {
      resetQuestion = false;
    }
  }
  return tempGuess;
}
