const subjects = [
  "english","math","biology","physics","chemistry",
  "economics","government","commerce","literature",
  "agriculture","civic"
];

const questions = {};

subjects.forEach(sub => {
  questions[sub] = [];

  for (let i = 1; i <= 30; i++) {
    questions[sub].push({
      q: sub.toUpperCase() + " Question " + i,
      options: ["A", "B", "C", "D"],
      answer: "A"
    });
  }
});
