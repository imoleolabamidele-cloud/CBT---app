let subject = localStorage.getItem("subject") || "english";
let current = 0;
let score = 0;
let answers = Array(30).fill(null);

// TIMER
let time = 60 * 60;
setInterval(() => {
  let m = Math.floor(time / 60);
  let s = time % 60;

  document.getElementById("timer").innerText =
    m + ":" + (s < 10 ? "0" + s : s);

  time--;

  if (time < 0) finish();
}, 1000);

function loadQ() {
  let q = questions[subject][current];

  document.getElementById("question").innerText =
    (current + 1) + ". " + q.q;

  let optDiv = document.getElementById("options");
  optDiv.innerHTML = "";

  q.options.forEach(opt => {
    let btn = document.createElement("button");
    btn.innerText = opt;

    btn.onclick = () => {
      answers[current] = opt;
      nextQ();
    };

    optDiv.appendChild(btn);
  });
}

function nextQ() {
  if (current < 29) {
    current++;
    loadQ();
  } else {
    finish();
  }
}

function finish() {
  for (let i = 0; i < 30; i++) {
    if (answers[i] === questions[subject][i].answer) {
      score++;
    }
  }

  localStorage.setItem("score", score);
  localStorage.setItem("total", 30);

  window.location.href = "results.html";
}

loadQ();
