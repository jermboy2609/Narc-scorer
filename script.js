function calculateScore() {
    let totalScore = 0;
    const form = document.getElementById('questionnaire');

    // Adjust the loop limit to match the number of questions
    for (let i = 1; i <= 15; i++) {  // Change 15 to the total number of questions you have
        const question = form['q' + i];
        if (question) { // Check if the question exists
            for (let j = 0; j < question.length; j++) {
                if (question[j].checked) {
                    totalScore += parseInt(question[j].value);
                    break;
                }
            }
        }
    }

    // Display the result
    const resultDiv = document.getElementById('result');
    let resultMessage;

    // Adjust the ranges according to the expanded questionnaire
    if (totalScore >= 36) {  // High score range (adjust based on the total possible score)
        resultMessage = "High score: There are significant red flags. Consider seeking advice.";
    } else if (totalScore >= 18) {  // Moderate score range
        resultMessage = "Moderate score: Some concerning behaviors are present.";
    } else {  // Low score range
        resultMessage = "Low score: Few red flags, indicating healthier relationship dynamics.";
    }

    // Display the total score and the corresponding message
    resultDiv.textContent = "Your total score is: " + totalScore + ". " + resultMessage;
}
