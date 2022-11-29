const { removeAllListeners } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const answers = [];

rl.question("What's your name? ", (answer) => {
  answers.push(answer);
  rl.question("What's an activity you like doing? ", (answer) => {
    answers.push(answer);
    rl.question("What do you listen to while doing it? ", (answer) => {
      answers.push(answer);
      rl.question("Which meal is your favourite? ", (answer) => {
        answers.push(answer);
        rl.question("What's your favourite thing to eat for the meal? ", (answer) => {
          answers.push(answer);
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            answers.push(answer);
            rl.question("Which is your superpower? ", (answer) => {
              answers.push(answer);
              rl.close();

              const nameAns = answers[0];
              const activityAns = answers[1];
              const listenAns = answers[2];
              const mealAns = answers[3];
              const dishAns = answers[4];
              const sportAns = answers[5];
              const powerAns = answers[6];

              console.log(`Hello my name is ${nameAns}, and I like to ${activityAns} and I like to listen to ${listenAns} while doing it. My favourite meal is ${mealAns} and my favourite dish is ${dishAns}. My favourite sport is ${sportAns} and my superpower is ${powerAns}`);



            });
          });
        });
      });
    });
  });
});
