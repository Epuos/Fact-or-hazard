function getQ(data) {
  const levels = data.levels;
  const randomLevel = levels[Math.floor(Math.random() * levels.length)];
  const randomQuestion = randomLevel.Questions[Math.floor(Math.random() * randomLevel.Questions.length)];
  document.getElementById('question').innerHTML = randomQuestion.Question;
}

function getQByLevel(data, level) {
  const targetLevel = data.levels.find(l => l.Level === level);
  if (!targetLevel) return null;
  const randomQuestion = targetLevel.Questions[Math.floor(Math.random() * targetLevel.Questions.length)];
  document.getElementById('question').innerHTML = randomQuestion.Question;
}