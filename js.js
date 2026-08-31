const selectedLevel = parseInt(localStorage.getItem('selectedLevel')) || 1;
let turnIndex = parseInt(localStorage.getItem('turnIndex')) || 0;

document.addEventListener("DOMContentLoaded", function() {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (document.getElementById("userList")) loadUsers();
    if (users.length && turnIndex >= users.length) {
        turnIndex = 0;
        localStorage.setItem('turnIndex', turnIndex);
    }
    if (document.getElementById("currentPlayer") && users.length) {
        document.getElementById("currentPlayer").innerHTML = `${users[turnIndex].name}'s turn`;
    }
});

// --- Asked-questions tracking (per player) ---
function getAskedMap() {
    return JSON.parse(localStorage.getItem("askedQuestions")) || {};
}

function markQuestionAsked(userId, questionId) {
    const asked = getAskedMap();
    if (!asked[userId]) asked[userId] = [];
    if (!asked[userId].includes(questionId)) asked[userId].push(questionId);
    localStorage.setItem("askedQuestions", JSON.stringify(asked));
}

function getCurrentUser() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (!users.length) return null;
    return users[turnIndex] || users[0];
}

// Filters out questions already asked to this user. If every question has
// already been asked, the pool resets for that user (so the game keeps going).
function filterUnaskedQuestions(questions, userId) {
    const asked = getAskedMap();
    const askedForUser = asked[userId] || [];
    const remaining = questions.filter(q => !askedForUser.includes(q.QuestionID));
    if (remaining.length > 0) return remaining;

    // All questions have been asked to this user before - reset their history.
    asked[userId] = [];
    localStorage.setItem("askedQuestions", JSON.stringify(asked));
    return questions;
}

function getQ(data) {
    let questions = data.levels
        .filter(l => selectedLevel === 5 || l.Level === selectedLevel)
        .flatMap(l => l.Questions);

    if (questions.length === 0) {
        document.getElementById('question').innerHTML = "No questions match your settings!";
        return;
    }

    const currentUser = getCurrentUser();
    if (currentUser) {
        questions = filterUnaskedQuestions(questions, currentUser.id);
    }

    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById('question').innerHTML = randomQuestion.Question;

    if (currentUser) markQuestionAsked(currentUser.id, randomQuestion.QuestionID);
}

function getQByLevel(data, level) {
    const targetLevel = data.levels.find(l => l.Level === level);
    if (!targetLevel) return;
    let questions = targetLevel.Questions;
    if (questions.length === 0) {
        document.getElementById('question').innerHTML = "No questions match your settings!";
        return;
    }

    const currentUser = getCurrentUser();
    if (currentUser) {
        questions = filterUnaskedQuestions(questions, currentUser.id);
    }

    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById('question').innerHTML = randomQuestion.Question;

    if (currentUser) markQuestionAsked(currentUser.id, randomQuestion.QuestionID);
}

function nextTurn() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (!users.length) return;
    turnIndex = (turnIndex + 1) % users.length;
    localStorage.setItem('turnIndex', turnIndex);
    document.getElementById("currentPlayer").innerHTML = `${users[turnIndex].name}'s turn`;
}

function addUser() {
    const name = document.getElementById("Name").value;
    if (name.trim() === "") {
        document.getElementById("addUserConfirm").innerHTML = "Please enter a valid name.";
        return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const id = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
    users.push({ id, name });
    document.getElementById("Name").value = "";
    document.getElementById("userList").innerHTML = users.map(u => `<li>${u.name}</li>`).join("");
    document.getElementById("addUserConfirm").innerHTML = "User added successfully!";
    localStorage.setItem("users", JSON.stringify(users));
}

function loadUsers() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    document.getElementById("addUserConfirm").innerHTML = users.length === 0 ? "No users yet. Add one!" : "";
    document.getElementById("userList").innerHTML = users.map(u => `<li>${u.name}</li>`).join("");
}

function clearUsers() {
    localStorage.removeItem("users");
    document.getElementById("userList").innerHTML = "";
    document.getElementById("addUserConfirm").innerHTML = "All users cleared!";
}

function gotopage(page) { window.location.replace(page); }
function goBack() { window.history.back(); }

function toggleSetting(btn) { btn.classList.toggle('active'); }

function selectLevel(btn) {
    document.querySelectorAll('.toggle.level').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function gotoquestionpage() {
    const activeLevelBtn = document.querySelector('.toggle.level.active');
    localStorage.setItem('selectedLevel', activeLevelBtn ? activeLevelBtn.dataset.level : "1");
    window.location.href = 'Question.html';
}