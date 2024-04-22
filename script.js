// Dinosaur Quiz

// Event Listener
document.getElementById("button").addEventListener("click", markQuiz);

// Saved Variables
let question1 = document.getElementById("questionl");
let question2 = document.getElementById("questionll");
let question3 = document.getElementById("questionlll");
let question4 = document.getElementById("questionllll");
let scoreEl = document.getElementById("score");
let score = 0;
let questionAnswered = 0;
let answeredAllQuestions = false;

// Event Function

function markQuiz() {
  let answer1 = question1.value;
  answer1 = answer1.toLowerCase();
  let answer2 = question2.value;
  answer2 = answer2.toLowerCase();
  let answer3 = question3.value;
  answer3 = answer3.toLowerCase();
  let answer4 = question4.value;
  answer4 = answer4.toLowerCase();

  if (answer1 == "" || answer2 == "" || answer3 == "" || answer4 == "") {
    scoreEl.innerHTML = "";

    if (answer1 == "") {
      document.getElementById("dichotomy1").innerHTML = "Put in your answer.";
      document.getElementById("dichotomy1").style.color = "red";
    } else {
      document.getElementById("dichotomy1").innerHTML = "";
    }
    if (answer2 == "") {
      document.getElementById("dichotomy2").innerHTML = "Put in your answer.";
      document.getElementById("dichotomy2").style.color = "red";
    } else {
      document.getElementById("dichotomy2").innerHTML = "";
    }
    if (answer3 == "") {
      document.getElementById("dichotomy3").innerHTML = "Put in your answer.";
      document.getElementById("dichotomy3").style.color = "red";
    } else {
      document.getElementById("dichotomy3").innerHTML = "";
    }
    if (answer4 == "") {
      document.getElementById("dichotomy4").innerHTML = "Put in your answer.";
      document.getElementById("dichotomy4").style.color = "red";
    } else {
      document.getElementById("dichotomy4").innerHTML = "";
    }
  } else {
    if (answer1 == "triceratops" || answer1 == "triceratop") {
      question1.style.border = "solid green";
      document.getElementById("dichotomy1").innerHTML = "Correct!";
      document.getElementById("dichotomy1").style.color = "green";
      score = score + 1;
      questionAnswered = questionAnswered + 1;
    } else {
      question1 = question1.style.border = "solid red";
      document.getElementById("dichotomy1").innerHTML =
        "Wrong! The correct answer is Triceratops.";
      document.getElementById("dichotomy1").style.color = "red";
    }

    if (
      answer2 == "t rex" ||
      answer2 == "tyrannosaurus rex" ||
      answer2 == "t.rex"
    ) {
      question2.style.border = "solid green";
      document.getElementById("dichotomy2").innerHTML = "Correct!";
      document.getElementById("dichotomy2").style.color = "green";
      score = score + 1;
      questionAnswered = questionAnswered + 1;
    } else {
      question2 = question2.style.border = "solid red";
      document.getElementById("dichotomy2").innerHTML =
        "Wrong! The correct answer is the Tyrannosaurus Rex.";
      document.getElementById("dichotomy2").style.color = "red";
    }

    if (answer3 == "velociraptor" || answer3 == "raptor") {
      question3 = question3.style.border = "solid green";
      document.getElementById("dichotomy3").innerHTML = "Correct!";
      document.getElementById("dichotomy3").style.color = "green";
      score = score + 1;
      questionAnswered = questionAnswered + 1;
    } else {
      question3 = question3.style.border = "solid red";
      document.getElementById("dichotomy3").innerHTML =
        "Wrong! The correct answer is the Velociraptor.";
      document.getElementById("dichotomy3").style.color = "red";
    }

    if (answer4 == "monstrous lizard") {
      question4.style.border = "solid green";
      document.getElementById("dichotomy4").innerHTML = "Correct!";
      document.getElementById("dichotomy4").style.color = "green";
      score = score + 1;
      questionAnswered = questionAnswered + 1;
    } else {
      question4 = question4.style.border = "solid red";
      document.getElementById("dichotomy4").innerHTML =
        "Wrong! The correct answer is Monstrous Lizard.";
      document.getElementById("dichotomy4").style.color = "red";
    }

    let percentage = (score / questionAnswered) * 100;

    if (score == 0 && questionAnswered == 0) {
      scoreEl.innerHTML = `Score: 0/4 (0%)`;
    } else {
      scoreEl.innerHTML = `Score: ${score}/4 (${percentage}%)`;
    }

    console.log(score);
    console.log(questionAnswered);
  }
}
