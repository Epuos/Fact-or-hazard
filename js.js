const selectedLevel = parseInt(localStorage.getItem('selectedLevel')) || 1;
let turnIndex = 0;

document.addEventListener("DOMContentLoaded", function() {
    loadUsers();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.length) document.getElementById("currentPlayer").innerHTML = `${users[0].name}'s turn`;
});

function getQ(data) {
    let questions = data.levels
        .filter(l => selectedLevel === 5 || l.Level === selectedLevel)
        .flatMap(l => l.Questions);

    if (questions.length === 0) {
        document.getElementById('question').innerHTML = "No questions match your settings!";
        return;
    }

    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById('question').innerHTML = randomQuestion.Question;
}

function getQByLevel(data, level) {
    const targetLevel = data.levels.find(l => l.Level === level);
    if (!targetLevel) return;
    const questions = targetLevel.Questions;
    if (questions.length === 0) {
        document.getElementById('question').innerHTML = "No questions match your settings!";
        return;
    }
    document.getElementById('question').innerHTML = questions[Math.floor(Math.random() * questions.length)].Question;
}

function nextTurn() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (!users.length) return;
    turnIndex = (turnIndex + 1) % users.length;
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