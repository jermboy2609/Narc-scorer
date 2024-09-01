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
