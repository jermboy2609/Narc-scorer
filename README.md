# Narc-scorer

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relationship Screening Questionnaire</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Relationship Screening Questionnaire</h1>
        <form id="questionnaire">
            <div class="question">
                <p>1. Does this person often dominate conversations and rarely show interest in what others have to say?</p>
                <label><input type="radio" name="q1" value="3"> Often</label>
                <label><input type="radio" name="q1" value="2"> Sometimes</label>
                <label><input type="radio" name="q1" value="1"> Rarely</label>
                <label><input type="radio" name="q1" value="0"> Never</label>
            </div>
            <!-- Repeat similar structure for other questions -->
            <!-- Add additional questions here -->
            
            <button type="button" onclick="calculateScore()">Submit</button>
        </form>
        <div id="result"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>


body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    margin: 0;
    padding: 20px;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    background: white;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

h1 {
    text-align: center;
    color: #4CAF50;
}

.question {
    margin-bottom: 15px;
}

button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

#result {
    margin-top: 20px;
    font-size: 18px;
    text-align: center;
}




function calculateScore() {
    let totalScore = 0;
    const form = document.getElementById('questionnaire');

    // Get the values of each question's selected option
    for (let i = 1; i <= 1; i++) {  // Adjust the loop to match the number of questions
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
