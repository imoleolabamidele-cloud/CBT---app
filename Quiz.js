let subject = localStorage.getItem("currentSubject") || "English";
let questions = cbt[subject];

let current = 0;
let userAnswers = new Array(questions.length).fill(null);

// title
document.getElementById("subjectTitle").innerText = subject.toUpperCase();

function loadQuestion() {
  let q = questions[current];

  document.getElementById("questionBox").innerText =
    `${current + 1}. ${q.q}`;

  let html = "";

  q.options.forEach((opt, i) => {

    let selected = userAnswers[current] === i ? "selected" : "";

    html += `
      <button class="option ${selected}" onclick="selectAnswer(${i})">
        ${opt}
      </button>
    `;
  });

  document.getElementById("optionsBox").innerHTML = html;

  renderNav();
}

function selectAnswer(index) {
  userAnswers[current] = index;
  loadQuestion();
}

function nextQuestion() {
  if (current < questions.length - 1) {
    current++;
    loadQuestion();
  }
}

function prevQuestion() {
  if (current > 0) {
    current--;
    loadQuestion();
  }
}

function goTo(i) {
  current = i;
  loadQuestion();
}

function renderNav() {
  let nav = "";

  for (let i = 0; i < questions.length; i++) {
    let answered = userAnswers[i] !== null ? "answered" : "";

    nav += `
      <button class="nav-btn ${answered}" onclick="goTo(${i})">
        ${i + 1}
      </button>
    `;
  }

  document.getElementById("navBox").innerHTML = nav;
}

// SUBMIT + SCORING
function submitExam() {
  let score = 0;

  userAnswers.forEach((ans, i) => {
    if (ans === questions[i].answer) {
      score++;
    }
  });

  localStorage.setItem("score", score);
  localStorage.setItem("total", questions.length);
  localStorage.setItem("subject", subject);

  window.location.href = "result.html";
}

/* TIMER */
let time = 30 * 60;

let timer = setInterval(() => {

  let min = Math.floor(time / 60);
  let sec = time % 60;

  document.getElementById("timer").innerText =
    `Time Left: ${min}:${sec < 10 ? "0" + sec : sec}`;

  time--;

  if (time < 0) {
    clearInterval(timer);
    submitExam();
  }

}, 1000);

// start
loadQuestion();