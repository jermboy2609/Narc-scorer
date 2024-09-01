function calculateScore() {
    let totalScore = 0;
    const form = document.getElementById('questionnaire');

    // Loop through all 30 questions to calculate the total score
    for (let i = 1; i <= 30; i++) {  // Adjust the number 30 based on how many questions you have
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

    // Calculate score ranges based on the total possible score
    // Max possible score is 90 (30 questions * 3 points each)
    if (totalScore >= 60) {  // High score range (adjust based on the total possible score)
        resultMessage = "High score: There are significant red flags. Consider seeking advice.";
    } else if (totalScore >= 30) {  // Moderate score range
        resultMessage = "Moderate score: Some concerning behaviors are present.";
    } else {  // Low score range
        resultMessage = "Low score: Few red flags, indicating healthier relationship dynamics.";
    }

    // Display the total score and the corresponding message
    resultDiv.textContent = "Your total score is: " + totalScore + ". " + resultMessage;
}
