function calculateScore() {
    let totalScore = 0;
    const form = document.getElementById('questionnaire');

    // Adjust the loop to match the number of questions, e.g., 2 for two questions
    for (let i = 1; i <= 2; i++) {  // Change 2 to the number of your last question
        const question = form['q' + i];
        for (let j = 0; j < question.length; j++) {
            if (question[j].checked) {
                totalScore += parseInt(question[j].value);
                break;
            }
        }
    }

    // Display the result
    const resultDiv = document.getElementById('result');
    let resultMessage;

    if (totalScore >= 15) {  // Adjust these ranges based on actual questionnaire
        resultMessage = "High score: There are significant red flags. Consider seeking advice.";
    } else if (totalScore >= 7) {
        resultMessage = "Moderate score: Some concerning behaviors are present.";
    } else {
        resultMessage = "Low score: Few red flags, indicating healthier relationship dynamics.";
    }

    resultDiv.textContent = "Your total score is: " + totalScore + ". " + resultMessage;
}
