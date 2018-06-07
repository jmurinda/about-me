// Safety goggles ON!
'use strict';

// Setup Variables
var startGame = false;
var userQuit = false;
var myScore = 0;
var myRank = ['Abyssmal', 'Pitiful', 'n00b', 'Rookie', 'Novice', 'Knight', 'Champion', 'Legend'];
var myRecord = [];
var userName = 'John Doe';
var userAnswer1, userAnswer2, userAnswer3, userAnswer4, userAnswer5, userAnswer6, userAnswer7;

var myQuestion1 = 'What is Ben\'s last name?';
var myQuestion2 = 'Name one of Ben\'s four main specialities:';
var myQuestion3 = 'What is the name of the site he founded?';
var myQuestion4 = 'Which college did Ben attend?';
var myQuestion5 = 'In what year did Ben graduate from college?';
var myQuestion6 = 'I have a seemingly random number in mind. Care to guess what it is?';
var myQuestion7 = 'What is my favorite video game?';

var myAnswer1 = ['harris'];
var myAnswer2 = ['creator','innovator','technologist','entrepreneur'];
var myAnswer3 = ['gamacy','gamacy.com','www.gamacy.com'];
var myAnswer4 = ['western washington university','western', 'wwu'];
var myAnswer5 = ['2005'];
var myGames   = ['0 was not an option','Chrono Trigger','Super Mario Odyssey','Sky Force','Mass Effect Trilogy','The Elder Scrolls V: Skyrim','Stardew Valley','The Legend of Zelda: The Wind Waker HD','DOOM (2016)','MechWarrior 2','The Legend of Zelda: Twilight Princess HD'];

// Answer Checking Function (Can't Use this until tomorrow!)
// var checkAnswer = function(array, response) {
//   if(array.includes(response)) {
//     myScore++;
//     return console.log('Correct!');
//   }
//   else {
//     return console.log('Sorry, that\'s not correct.');
//   }
// };

// Trivia Launcher
// var quizLaunch = function() { // temporarily commenting out function
startGame = confirm('Ready player one?');

// Begin Game
if (startGame === true) { 
  // Capture User Name
  userName = prompt('Okay! First, tell me your name: ');
  if(userName !== null) {
    // do nothing
  } else { userQuit = true; }

  // Question 1
  if (userQuit !== true) {
    userAnswer1 = prompt(myQuestion1);
    if(userAnswer1 !== null) {
      console.log('Q1: ' + userAnswer1);
      var normalize1 = userAnswer1.toLowerCase();
      // checkAnswer(myAnswer1, normalize1);

      // Repetitive Solution Checker
      if(myAnswer1.includes(normalize1)) {
        myScore++;
        console.log('Correct!');
        myRecord.push('Correct');
      }
      else {
        console.log('Sorry, that\'s not correct.');
        myRecord.push('Incorrect');
      }
    } else { userQuit = true; }
  }

  // Question 2
  if (userQuit !== true) { 
    userAnswer2 = prompt(myQuestion2);
    if(userAnswer2 !== null) {
      console.log('Q2: ' + userAnswer2);
      var normalize2 = userAnswer2.toLowerCase();
      // checkAnswer(myAnswer2, normalize2);

      // Repetitive Solution Check
      if(myAnswer2.includes(normalize2)) {
        myScore++;
        console.log('Correct!');
        myRecord.push('Correct');
      }
      else {
        console.log('Sorry, that\'s not correct.');
        myRecord.push('Incorrect');
      }
    } else { userQuit = true; }
  }
  
  
  // Question 3
  if (userQuit !== true) {
    userAnswer3 = prompt(myQuestion3);
    if (userAnswer3 !== null) {
      console.log('Q3: ' + userAnswer3);
      var normalize3 = userAnswer3.toLowerCase();
      // checkAnswer(myAnswer3, normalize3);

      // Repetitive Solution Check
      if(myAnswer3.includes(normalize3)) {
        myScore++;
        console.log('Correct!');
        myRecord.push('Correct');
      }
      else {
        console.log('Sorry, that\'s not correct.');
        myRecord.push('Incorrect');
      }
    } else { userQuit = true; }
  }
  

  // Question 4
  if (userQuit !== true) {
    userAnswer4 = prompt(myQuestion4);
    if (userAnswer4 !== null) {
      console.log('Q4: ' + userAnswer4);
      var normalize4 = userAnswer4.toLowerCase();
      // checkAnswer(myAnswer4, normalize4);

      // Repetitive Solution Check
      if(myAnswer4.includes(normalize4)) {
        myScore++;
        console.log('Correct!');
        myRecord.push('Correct');
      }
      else {
        console.log('Sorry, that\'s not correct.');
        myRecord.push('Incorrect');
      }
    } else { userQuit = true; }
  }
  
  // Question 5
  if (userQuit !== true) {
    userAnswer5 = prompt(myQuestion5);
    if (userAnswer5 !== null) {
      console.log('Q5: ' + userAnswer5);
      var normalize5 = userAnswer5.toLowerCase();
      // checkAnswer(myAnswer5, normalize5);

      // Repetitive Solution Check
      if(myAnswer5.includes(normalize5)) {
        myScore++;
        console.log('Correct!');
        myRecord.push('Correct');
      }
      else {
        console.log('Sorry, that\'s not correct.');
        myRecord.push('Incorrect');
      }
    } else { userQuit = true; }
  }

  // Question 6 -- Random Number Game
  if (userQuit !== true) {
    var randNum = userName.length;
    var myMatch = false;
    var myAttempts = 6;
    
    // Guess Loop
    do {
      var myGuess = parseInt(prompt(myQuestion6 + '\n' + 'You have ' + myAttempts + ' chances left. Good luck!'));
      console.log('You guessed ' + myGuess + ' with ' + myAttempts + ' out of 6 attempts remaining.');
      
      // Number Catcher
      if(myGuess === randNum) {
        myMatch = true;
      } 
      if (myGuess > randNum) {
        prompt('Sorry, ' + myGuess + ' is too high.');
      } 
      if (myGuess < randNum) {
        prompt('Sorry, ' + myGuess + ' is too low.');
      } 

      // String Catcher
      if (isNaN(myGuess)) {
        prompt('Sorry, that was not a number. Please try again.');
      }
      // Reduce Counter
      myAttempts--;
    } while (myMatch !== true && myAttempts > 0);
    
    // Number Match Results
    if(myMatch === true) {
      alert('You guessed it! Nice job!');
      myScore++;
      myRecord.push('Correct');
    } 
    else {
      alert('Nice try, but you didn\'t guess the number.');
      myRecord.push('Incorrect');
    }
  }

  // Question 7 -- Multiple Answer Trivia
  if (userQuit !== true) {
    var myMatch7 = false;
    var myAttempts7 = 6;

    // Guess Loop
    do {
      userAnswer7 = parseInt(prompt(myQuestion7 + '\n' + 
      'Here is the list to choose from:\n\n' + 
      '1 • ' + myGames[1] + '\n' + 
      '2 • ' + myGames[2] + '\n' + 
      '3 • ' + myGames[3] + '\n' + 
      '4 • ' + myGames[4] + '\n' + 
      '5 • ' + myGames[5] + '\n' + 
      '6 • ' + myGames[6] + '\n' + 
      '7 • ' + myGames[7] + '\n' + 
      '8 • ' + myGames[8] + '\n' + 
      '9 • ' + myGames[9] + '\n' + 
      '10 • ' + myGames[10]));
      console.log('You chose: ' + myGames[userAnswer7]);

      // Correct match
      if(userAnswer7 === 4) {
        myMatch7 = true;
      }
      // Wrong guess
      if (myMatch7 !== true) {
        alert('Sorry, ' + myGames[userAnswer7] + ' is not correct.');
      } 
      // Invalid response checker (undefined, NaN)
      if (isNaN(userAnswer7) || userAnswer7 === undefined || userAnswer7 === null) {
        alert('Sorry, that is not a valid response. Please enter a number.');
      }

      // Reduce Counter
      myAttempts--;
    } while (myMatch7 !== true && myAttempts7 > 0);
    // If All Answers Guessed
    if(myMatch7 === true) {
      alert('You guessed it! Nice job!');
      myScore++;
      myRecord.push('Correct');
    }
    // Answers Missed
  }
}
// End Game
else {
  userQuit = true;
}

// Display Results
if(userQuit) {
  alert('Okay. Thanks for playing!');
}
else {
  console.log('Final score = ' + myScore + ' out of 7.');
  alert(
    userName + ', you scored ' + myScore + ' out of 7. \n' + 
    'Your rank is: ' + myRank[myScore] + '\n' + 
    'Here were your results: \n\n' + 
    '1. ' + myQuestion1 + '\n' + myRecord[0] + '\n\n' +
    '2. ' + myQuestion2 + '\n' + myRecord[1] + '\n\n' +
    '3. ' + myQuestion3 + '\n' + myRecord[2] + '\n\n' +
    '4. ' + myQuestion4 + '\n' + myRecord[3] + '\n\n' +
    '5. ' + myQuestion5 + '\n' + myRecord[4] + '\n\n' +
    '6. ' + myQuestion6 + '\n' + myRecord[5] + '\n\n' +
    '7. ' + myQuestion7 + '\n' + myRecord[6] + '\n'
  );
}
