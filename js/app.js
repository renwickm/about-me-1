'use strict';

let userName;
let userScore = 0;
let questionsTotal = 7;
let fruitGuessesTotal = 6;
let numberGuessesTotal = 4;
//correctNumberMax and correctNumber randomize the answer and range for question 6.
let correctNumberMax = Math.floor(Math.random() * 100) + 1;
let correctNumber = Math.floor(Math.random() * correctNumberMax) + 1;
let yesnoAnswers = ['y', 'n', 'yes', 'no'];
let fruit = ['apple', 'pear', 'bananna', 'plum', 'mango'];
let i = 0; //Used global scoped variable from main loop "i" to keep invalid entry's from advancing the main loop to the next question.
let k = 0; //Used global scoped varible for use with `otherAnswers' array so otherAnswers[2] could us it to display the correct fruit.
let userGuessing;
let resetQuestion = false;
let questions = [
  'Hello. What is your name?',
  'Yes or No, am I married?',
  'Yes or No, do I ride a motorcycle?',
  'Yes or No, have I ever won a spelling bee?',
  'Yes or No, is my last name really, legally Awesome?',
  'Yes or No, do I eat healthy food?',
  `Try to guess a number between 1 and ${correctNumberMax}.`,
  'Try to guess one my favorite fruits.',
];
let yesAnswers = [
  'Correct! I am indeed married to Sharissa Awesome.',
  'Actually, it\'s no. I used to but not anymore. I have a tendency to ride dangerously fast but I also like being alive. In the end, I decided to give it up.',
  'You have so much faith in me! But the answer is no, not a chance! I\'m lucky to have been born in the era of the spell-checker.',
  'Yes, it is.  I have no middle name so my full name is Daniel Awesome.',
  'Absolutely yes! I am super strict about what I eat. Zero sugar no exceptions, no oils, no processed food and very little salt. I eat mainly plants and the smallest bit of meat from time to time.'];
let noAnswers = [
  'Ahh, incorrect. I am indeed married to Sharissa Awesome.',
  'You are correct, I used to but not anymore. I have a tendency to ride dangerously fast but I also like being alive. In the end, I decided to give it up.',
  'You are correct, I have not, nor will I ever win a spelling bee competition. I\'m terrible with spelling and am thankful for spell-checkers.',
  'Acutally, the answer is yes.  My legal name is Daniel Awesome.',
  'Sorry, the answer is acutally yes. I am super strict about what I eat. Zero sugar no exceptions, no oils, no processed food and very little salt. I eat mainly plants and the smallest bit of meat from time to time.'
];
let otherAnswers = [
  `That's it! ${correctNumber} is the correct number.`,
  `Oh noes!  The correct number was ${correctNumber} Sorry, you didn't guess the right number.`,
  `That's right, a ${fruit[k]} is a type of fruit I like to eat. Just for funsies, all of the correct answers were ${fruit[0]}, ${fruit[1]}, ${fruit[2]}, ${fruit[3]} and ${fruit[4]}`,
  'isn\'t one of the fruits I like to eat. Guess again',
  `Oh Noes! The correct answers were ${fruit[0]}, ${fruit[1]}, ${fruit[2]}, ${fruit[3]} and ${fruit[4]}. Better luck next time.`
];
let invalidAnswers = [
  'Please answer with a yes or a no.',
  'Please enter only numbers.',
  `You need to guess a number between 1 an ${correctNumberMax}`
];

// This is the main loop used to drive the question cycles in order.
for (i; i <= questionsTotal; i++) {
  if (resetQuestion) {
    i--;
    resetQuestion = false;
  }
  askQuestion(i);
}

// The final message displayed after the quiz has been completed.
alert(`You scored ${userScore} points out of 7 ${userName}. Thanks for taking my quiz. I had a blast making it. See you next time ${userName}.`);

// Asks the user questions from a prompt and pushes their answers forward to guessingGame(x, y);
function askQuestion(questionNumber) {
  if (questionNumber === 0) {
    userName = prompt(questions[0]);
    if (userName === ''){
      userName = 'Nobody';
    }
    alert(`Welcome to the site ${userName}, glad you could visit. Seeing as you are here you must want to know more about me so let's take a quiz and see how well you are at guessing facts about my life.`);
  } else if (questionNumber === 1) {
    guessingGame(questionNumber, prompt(questions[1]).toLowerCase());
  } else if (questionNumber === 2) {
    guessingGame(questionNumber, prompt(questions[2]).toLowerCase());
  } else if (questionNumber === 3) {
    guessingGame(questionNumber, prompt(questions[3]).toLowerCase());
  } else if (questionNumber === 4) {
    guessingGame(questionNumber, prompt(questions[4]).toLowerCase());
  } else if (questionNumber === 5) {
    guessingGame(questionNumber, prompt(questions[5]).toLowerCase());
  } else if (questionNumber === 6) {
    userGuessing = true;
    resetQuestion = true;
    guessingGame(questionNumber, checkInvalid(questions[6]));
  } else if (questionNumber === 7) {
    userGuessing = true;
    guessingGame(questionNumber, prompt(questions[7]).toLowerCase());
  }
}

// Evaluates answers given from the propmt in askQuestion(x); Some questions call checkInvalid(x); to make sure the answers are not incorrect value types or out of range.
function guessingGame(questionNumber, guess) {
  if (questionNumber <= 5) {
    if (guess === yesnoAnswers[0] || guess === yesnoAnswers[2]) {
      if (questionNumber === 1) {
        alert(yesAnswers[0]);
        userScore++;
      } else if (questionNumber === 2) {
        alert(yesAnswers[1]);
      } else if (questionNumber === 3) {
        alert(yesAnswers[2]);
      } else if (questionNumber === 4) {
        alert(yesAnswers[3]);
        userScore++;
      } else if (questionNumber === 5) {
        alert(yesAnswers[4]);
        userScore++;
      }
      questionNumber++;
    } else if (guess === yesnoAnswers[1] || guess === yesnoAnswers[3]) {
      if (questionNumber === 1) {
        alert(noAnswers[0]);
      } else if (questionNumber === 2) {
        alert(noAnswers[1]);
        userScore++;
      } else if (questionNumber === 3) {
        alert(noAnswers[2]);
        userScore++;
      } else if (questionNumber === 4) {
        alert(noAnswers[3]);
      } else if (questionNumber === 5) {
        alert(noAnswers[4]);
      }
      questionNumber++;
    } else {
      alert(invalidAnswers[0]);
      resetQuestion = true;
    }
  } else if (questionNumber === 6) {
    while (userGuessing) {
      for (let j = 0; j < numberGuessesTotal; j++) {
        //restQuestion is set to true when a value comes back invalid in order to bypass having to use askQuestion again which would push the question position forward by one and break the main loop.
        if (resetQuestion) {
          guess = checkInvalid(questions[6]);
        }
        if (guess === correctNumber) {
          alert(otherAnswers[0]);
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
        alert(otherAnswers[1]);
        resetQuestion = false;
        questionNumber++;
        userGuessing = false;
      }
    }
  } else if (questionNumber === 7) {
    while (userGuessing) {
      for (let j = 0; j < fruitGuessesTotal; j++) {
        //restQuestion is set to true when a user gets the question wrong. 'guess' is then cleared so if the user leaves the answer empty, it doesn't display the answer given for the last guess.
        if (resetQuestion) {
          guess = prompt(questions[7]).toLowerCase();
          resetQuestion = false;
        }
        //loops through the fruit array comparing the users guess with the answers.
        for (k; k < fruit.length; k++) {
          if(guess === ''){
            guess = 'nothing';
          }
          if (guess === fruit[k]) {
            alert(otherAnswers[2]);
            userScore++;
            userGuessing = false;
            j = fruitGuessesTotal;
            break;
          }
          if (k === fruit.length - 1) {
            alert(`Sorry no, ${guess} ${otherAnswers[3]}`);
            k = 0;
            resetQuestion = true;
            break;
          }
        }
      }
      if (userGuessing) {
        alert(otherAnswers[4]);
        userGuessing = false;
      }
    }
  }
}

//This function is called by question 6 to check for invalid entries.
function checkInvalid(promptEntry) {
  let tempGuess;
  while (resetQuestion) {
    tempGuess = parseInt(prompt(promptEntry));
    if (isNaN(tempGuess) === true) {
      alert(invalidAnswers[1]);
    } else if (tempGuess > correctNumberMax || tempGuess <= 0) {
      alert(`${tempGuess} is an invalid number. ${invalidAnswers[2]}`);
    } else {
      resetQuestion = false;
    }
  }
  return tempGuess;
}
