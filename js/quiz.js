let quizIndex = 0;
let quizScore = 0;
let answered = false;

function initQuiz() {
    const nextBtn = document.getElementById('quizNextBtn');
    const restartBtn = document.getElementById('quizRestartBtn');

    if (nextBtn) {
        nextBtn.addEventListener('click', nextQuizQuestion);
    }
    if (restartBtn) {
        restartBtn.addEventListener('click', restartQuiz);
    }

    renderQuizQuestion();
}

function renderQuizQuestion() {
    const question = quizQuestions[quizIndex];
    const questionEl = document.getElementById('quizQuestion');
    const optionsEl = document.getElementById('quizOptions');
    const feedbackEl = document.getElementById('quizFeedback');
    const counterEl = document.getElementById('quizCounter');
    const scoreEl = document.getElementById('quizScore');
    const progressEl = document.getElementById('quizProgressBar');
    const nextBtn = document.getElementById('quizNextBtn');

    if (!question || !questionEl || !optionsEl) return;

    answered = false;
    questionEl.textContent = question.question;
    optionsEl.innerHTML = '';
    feedbackEl.textContent = '';
    feedbackEl.className = 'quiz-feedback';
    counterEl.textContent = `第 ${quizIndex + 1} 题 / ${quizQuestions.length}`;
    scoreEl.textContent = `得分 ${quizScore}`;
    progressEl.style.width = `${(quizIndex / quizQuestions.length) * 100}%`;
    nextBtn.disabled = true;
    nextBtn.textContent = quizIndex === quizQuestions.length - 1 ? '查看结果' : '下一题';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'quiz-option';
        button.type = 'button';
        button.textContent = option;
        button.addEventListener('click', () => answerQuestion(index));
        optionsEl.appendChild(button);
    });
}

function answerQuestion(selectedIndex) {
    if (answered) return;
    answered = true;

    const question = quizQuestions[quizIndex];
    const options = document.querySelectorAll('.quiz-option');
    const feedbackEl = document.getElementById('quizFeedback');
    const scoreEl = document.getElementById('quizScore');
    const nextBtn = document.getElementById('quizNextBtn');

    options.forEach((button, index) => {
        button.disabled = true;
        if (index === question.answer) {
            button.classList.add('correct');
        }
        if (index === selectedIndex && selectedIndex !== question.answer) {
            button.classList.add('wrong');
        }
    });

    if (selectedIndex === question.answer) {
        quizScore += 1;
        feedbackEl.classList.add('correct');
        feedbackEl.textContent = `回答正确。${question.explanation}`;
    } else {
        feedbackEl.classList.add('wrong');
        feedbackEl.textContent = `回答错误。${question.explanation}`;
    }

    scoreEl.textContent = `得分 ${quizScore}`;
    nextBtn.disabled = false;
}

function nextQuizQuestion() {
    if (!answered) return;

    if (quizIndex < quizQuestions.length - 1) {
        quizIndex += 1;
        renderQuizQuestion();
    } else {
        showQuizResult();
    }
}

function showQuizResult() {
    const questionEl = document.getElementById('quizQuestion');
    const optionsEl = document.getElementById('quizOptions');
    const feedbackEl = document.getElementById('quizFeedback');
    const nextBtn = document.getElementById('quizNextBtn');
    const progressEl = document.getElementById('quizProgressBar');
    const resultEl = document.getElementById('quizResult');

    questionEl.textContent = '答题完成';
    optionsEl.innerHTML = '';
    feedbackEl.className = 'quiz-feedback correct';
    feedbackEl.textContent = `本轮得分 ${quizScore} / ${quizQuestions.length}。`;
    nextBtn.disabled = true;
    progressEl.style.width = '100%';
    resultEl.innerHTML = `<strong>${quizScore} / ${quizQuestions.length}</strong><span>正确率 ${Math.round((quizScore / quizQuestions.length) * 100)}%</span>`;
}

function restartQuiz() {
    quizIndex = 0;
    quizScore = 0;
    const resultEl = document.getElementById('quizResult');
    if (resultEl) resultEl.innerHTML = '';
    renderQuizQuestion();
}

document.addEventListener('DOMContentLoaded', initQuiz);
