function checkAnswer() {
    const correctAnswer = "4";
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer!";
        document.getElementById("feedback").style.color = "orange";
        return;
    }

    const userAnswer = selectedOption.value;

    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
        document.getElementById("feedback").style.color = "green";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        document.getElementById("feedback").style.color = "red";
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
