function calculateScore() {
    let totalScore = 0;
    const form = document.getElementById('questionnaire');

    // Loop through all questions to calculate the total score
    for (let i = 1; i <= 5; i++) {  // Adjust the number 5 based on how many questions you have
        const question = form['q' + i];
        if (question) { // Check if the question exists
            for (let j = 0; j < question.length; j++) {
                if (question[j].checked) {
                    totalScore += parseInt(question[j].value);
                    console.log("Adding value from question " + i + ": " + question[j].value); // Debugging statement
                    break;
                }
            }
        } else {
            console.log("Question " + i + " not found");
        }
    }

    // Log the final total score for debugging
    console.log("Total Score: ", totalScore);

    // Display the result
    const resultDiv = document.getElementById('result');
    let resultMessage;

    // Adjust the ranges to your specific questionnaire needs
    if (totalScore >= 12) {  // High score range
        resultMessage = "High score: There are significant red flags. Consider seeking advice.";
        console.log("Condition met: High score");
    } else if (totalScore >= 6) {  // Moderate score range
        resultMessage = "Moderate score: Some concerning behaviors are present.";
        console.log("Condition met: Moderate score");
    } else {  // Low score range
        resultMessage = "Low score: Few red flags, indicating healthier relationship dynamics.";
        console.log("Condition met: Low score");
    }

    // Display the total score and the corresponding message
    resultDiv.textContent = "Your total score is: " + totalScore + ". " + resultMessage;
}
