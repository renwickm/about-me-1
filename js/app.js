'use strict';

let userScore = 0;
let correctNumber = Math.floor(Math.random()* 10) + 1;
let fruit = ['apple', 'pear', 'bananna', 'plum', 'mango'];
let userGuessing = true;

let yesnoAnswers = ['y', 'n', 'yes', 'no'];

let userName = prompt('Hello. What is your name?');
alert(`Welcome to the site ${userName}, glad you could visit. Seeing as you are here you must want to know more about me so let's take a quiz and see how well you are at guessing facts about my life.`);

while(userGuessing){
  let questionOne = prompt('Yes or No, am I married?').toLowerCase();

  if(questionOne === yesnoAnswers[0] || questionOne === yesnoAnswers[2]){
    alert('Correct! I am indeed married to Sharissa Awesome.');
    userScore++;
    userGuessing = false;
  } else if(questionOne === yesnoAnswers[1] || questionOne === yesnoAnswers[3]){
    alert('Ahh, incorrect. I am indeed married to Sharissa Awesome.');
    userGuessing = false;
  } else{
    alert('Please answer with a yes or a no.');
  }
}

userGuessing = true;

let questionTwo = prompt('Yes or No, do I ride a motorcycle?').toLowerCase();

if(questionTwo === yesnoAnswers[0] || questionTwo === yesnoAnswers[2]){
  alert('Actually, it\'s no. I used to but not anymore. I have a tendency to ride dangerously fast but I also like being alive. In the end, I decided to give it up.');
}else if(questionTwo === yesnoAnswers[1] || questionTwo === yesnoAnswers[3]){
  alert('You are correct, I used to but not anymore. I have a tendency to ride dangerously fast but I also like being alive. In the end, I decided to give it up.');
  userScore++;
} else{
  alert('Please answer with a yes or a no.');
}

let questionThree = prompt('Yes or No, have I ever won a spelling bee?').toLowerCase();

if(questionThree === yesnoAnswers[0] || questionThree === yesnoAnswers[2]){
  alert('You have so much faith in me! But the answer is no, not a chance! I\'m lucky to have been born in the era of the spell-checker.');
}else if(questionThree === yesnoAnswers[1] || questionThree === yesnoAnswers[3]){
  alert('You are correct, I have not, nor will I ever win a spelling bee competition. I\'m terrible with spelling and am thankful for spell-checkers.');
  userScore++;
} else{
  alert('Please answer with a yes or a no.');
}

let questionFour = prompt('Yes or No, is my last name really, legally Awesome?').toLowerCase();

if(questionFour === yesnoAnswers[0] || questionFour === yesnoAnswers[2]){
  alert('Yes, it is.  I have no middle name so my full name is Daniel Awesome.');
  userScore++;
}else if(questionFour === yesnoAnswers[1] || questionFour === yesnoAnswers[3]){
  alert('Acutally, the answer is yes.  My legal name is Daniel Awesome.');
} else{
  alert('Please answer with a yes or a no.');
}

let questionFive = prompt('Yes or No, do I eat healthy food?').toLowerCase();

if(questionFive === yesnoAnswers[0] || questionFive === yesnoAnswers[2]){
  alert('Absolutely yes! I am super strict about what I eat. Zero sugar no exceptions, no oils, no processed food and very little salt. I eat mainly plants and the smallest bit of meat from time to time.');
  userScore++;
}else if(questionFive === yesnoAnswers[1] || questionFive === yesnoAnswers[3]){
  alert('Sorry, the answer is acutally yes. I am super strict about what I eat. Zero sugar no exceptions, no oils, no processed food and very little salt. I eat mainly plants and the smallest bit of meat from time to time.');
} else{
  alert('Please answer with a yes or a no.');
}

while(userGuessing)
{
  for(let i = 0; i < 4; i++){
    let usersGuess = parseInt(prompt('Try to guess a number between 1 and 10'));
    if(usersGuess === correctNumber){
      alert(`That's it! ${correctNumber} is the correct number.`);
      userScore++;
      userGuessing = false;
      break;
    }
    else if(usersGuess > 10 || usersGuess <= 0){
      alert('That\'s an invalid number. You need to guess a number between 1 an 10');
      if(i !== 0){
        i--;
      }
    } else if(usersGuess > correctNumber){
      alert('Too high.');
    } else if(usersGuess < correctNumber){
      alert('Too low.');
    }
  }
  if(userGuessing){
    alert(`Oh noes!  The correct number was ${correctNumber} Sorry, you didn't guess the right number.`);
    userGuessing = false;
  }
}

userGuessing = true;

while(userGuessing)
{
  for(let i = 0; i < 6; i++){
    let usersGuess = prompt('Try to guess one my favorite fruits.').toLowerCase();

    for(let j = 0; j < fruit.length; j++){
      if(usersGuess === fruit[j]){
        alert(`That's right, a ${fruit[j]} is a type of fruit I like to eat. Just for funsies, all of the correct answers were ${fruit[0]}, ${fruit[1]}, ${fruit[2]}, ${fruit[3]} and ${fruit[4]}`);
        userScore++;
        userGuessing = false;
        break;
      }
    }
    if(userGuessing){
      alert('Sorry no, that\'s not one of the fruits I like to eat.');
    } else{
      break;
    }
  }
  if(userGuessing){
    alert(`Oh Noes! The correct answers were ${fruit[0]}, ${fruit[1]}, ${fruit[2]}, ${fruit[3]} and ${fruit[4]}. Better luck next time.`);
    userGuessing = false;
    break;
  }
}

alert(`You scored ${userScore} points. Thanks for taking my quiz. I had a blast making it. See you next time ${userName}.`);
