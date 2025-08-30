const quizData = [
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: "<a>"
  },
  {
    question: "Which CSS property is used to change text color?",
    options: ["font-color", "color", "text-style", "background-color"],
    answer: "color"
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["Number", "String", "Boolean", "Element"],
    answer: "Element"
  },
  {
    question: "Which HTML tag is used to insert an image?",
    options: ["<image>", "<pic>", "<img>", "<src>"],
    answer: "<img>"
  },
  {
    question: "Which CSS property controls the size of text?",
    options: ["font-size", "text-size", "font-style", "size"],
    answer: "font-size"
  }
];

let currentQuestion = 0;
let score = 0;

window.onload = () => {
  const welcomePage = document.getElementById("welcome");
  const quizPage = document.getElementById("quizPage");
  const startBtn = document.getElementById("startBtn");
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const nextBtn = document.getElementById("nextBtn");
  const resultEl = document.getElementById("result");

  // Start Quiz
  startBtn.addEventListener("click", () => {
    welcomePage.style.display = "none";
    quizPage.style.display = "block";
    loadQuiz();
  });

  function loadQuiz() {
    questionEl.textContent = quizData[currentQuestion].question;
    answersEl.innerHTML = "";

    quizData[currentQuestion].options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => checkAnswer(option);
      answersEl.appendChild(btn);
    });
  }

  function checkAnswer(selected) {
    if (selected === quizData[currentQuestion].answer) {
      score++;
    }
    nextBtn.style.display = "block";
  }

  nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuiz();
      nextBtn.style.display = "none";
    } else {
      showResult();
    }
  });

  function showResult() {
    questionEl.style.display = "none";
    answersEl.style.display = "none";
    nextBtn.style.display = "none";

    resultEl.innerHTML = `🎉 You scored ${score} out of ${quizData.length}<br><br>`;

    // Create Restart Button
    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Restart Quiz";
    restartBtn.onclick = () => {
      // Reset values
      currentQuestion = 0;
      score = 0;
      questionEl.style.display = "block";
      answersEl.style.display = "block";
      nextBtn.style.display = "none";
      resultEl.textContent = "";
      loadQuiz();
    };
    resultEl.appendChild(restartBtn);
  }
};