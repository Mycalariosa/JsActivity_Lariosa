document.addEventListener('DOMContentLoaded', function () {
    var scoreBtn = document.getElementById('scoreBtn');
    if (!scoreBtn) return;
    scoreBtn.addEventListener('click', function () {
        var scoreInput = document.getElementById('scoreInput');
        var scoreOutput = document.getElementById('scoreOutput');
        var score = Number(scoreInput && scoreInput.value);
        if (!Number.isFinite(score)) {
            scoreOutput.textContent = 'Please enter a valid score.';
            return;
        }
        if (score < 0 || score > 100) {
            scoreOutput.textContent = 'Score should be between 0 and 100.';
            return;
        }
        var message = '';
        if (score >= 90) {
            message = 'Excellent';
        } else {
            if (score >= 80) {
                message = 'Good';
            } else {
                if (score >= 70) {
                    message = 'Fair';
                } else {
                    message = 'Failed';
                }
            }
        }
        scoreOutput.textContent = message;
    });
});


