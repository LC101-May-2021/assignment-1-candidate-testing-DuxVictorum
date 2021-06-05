const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
let questions = [
	"Who was the first American woman in space? ", 
	"True or false: 5 kilometer == 5000 meters? ",
	"(5 + 3)/2 * 10 = ? ",
	"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
	"What is the minimum crew size for the ISS? "
];
let correctAnswers = [
	"Sally Ride",
	"true",
	"40",
	"Trajectory",
	"3"
];
let candidateAnswers = [];
let candidateCorrect = 0;

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "";
let correctAnswer = "";
let candidateAnswer = "";

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  console.log("\nHere are the questions:" )
  for (let i = 0; i < questions.length; i++) {
	  question = questions[i];
	  candidateAnswer = input.question("#" + String(i + 1) + ": " + question);
	  candidateAnswer = candidateAnswer.toLowerCase();
	  candidateAnswers.push(candidateAnswer);
  }
  console.log(candidateAnswers);
}

// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
function gradeQuiz(candidateAnswers) {
	console.log("\nRESULTS: \nCandidate name:", candidateName);
	for (let i = 0; i < candidateAnswers.length; i++) {
		if (candidateAnswers[i] === correctAnswers[i].toLowerCase()) {
			candidateCorrect += 1;
		}
		console.log(`\n${String(i + 1)}): ${questions[i]}
	Your answer: ${candidateAnswers[i]}
	Correct answer: ${correctAnswers[i]}`);
	}
	
  	let grade = candidateCorrect / (candidateAnswers.length) * 100;
  	return grade;
}

function checkPass(percent) {
	let passed = "";
	if (percent >= 80) {
		passed = "PASSED";
	} else {
		passed = "FAILED";
	}
	console.log(`\n>>> Overall Grade: ${percent}% (${String(candidateCorrect)} of 5 responses correct) <<<
>>> Status: ${passed} <<<`);
}


function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate by name //
  console.log(`\nWelcome, ${candidateName}, let's get started.`)

  askQuestion();
  let score = gradeQuiz(this.candidateAnswers);
  checkPass(score);

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};