let current = 0;
let score = 0;

let answers = Array(50).fill(null);

function loadQ() {
  let q = questions.english[current];

  document.getElementById("question").innerText =
    (current + 1) + ". " + q.q;

  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt => {
    let btn = document.createElement("button");
    btn.innerText = opt;

    btn.onclick = () => {
      answers[current] = opt;
      updateNav();
      nextQ();
    };

    optionsDiv.appendChild(btn);
  });

  updateNav();
}

function nextQ() {
  if (current < 49) current++;
  loadQ();
}

function prevQ() {
  if (current > 0) current--;
  loadQ();
}

function updateNav() {
  let nav = document.getElementById("nav");
  nav.innerHTML = "";

  for (let i = 0; i < 50; i++) {
    let btn = document.createElement("button");
    btn.innerText = i + 1;

    if (answers[i]) btn.style.background = "green";

    btn.onclick = () => {
      current = i;
      loadQ();
    };

    nav.appendChild(btn);
  }
}

loadQ();let time = 60 * 60;

setInterval(() => {
  let min = Math.floor(time / 60);
  let sec = time % 60;

  document.getElementById("timer").innerText =
    min + ":" + sec;

  time--;

  if (time < 0) {
    alert("Time up!");
    window.location.href = "results.html";
  }
}, 1000);
