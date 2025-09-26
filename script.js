// If Statement — Age check
document.addEventListener('DOMContentLoaded', function onReady() {
    var ageBtn = document.getElementById('ageBtn');
    var numBtn = document.getElementById('numBtn');
    var scoreBtn = document.getElementById('scoreBtn');

    if (ageBtn) {
        ageBtn.addEventListener('click', function () {
            var ageInput = document.getElementById('ageInput');
            var ageOutput = document.getElementById('ageOutput');
            var value = Number(ageInput && ageInput.value);

            if (!Number.isFinite(value) || value < 0) {
                ageOutput.textContent = 'Please enter a valid non-negative age.';
                return;
            }

            // Simple If statement: only display when age >= 18
            if (value >= 18) {
                ageOutput.textContent = 'You are an adult.';
            } else {
                ageOutput.textContent = 'You are not an adult.';
            }
        });
    }

    // If...Else Statement — Even or Odd
    if (numBtn) {
        numBtn.addEventListener('click', function () {
            var numInput = document.getElementById('numInput');
            var numOutput = document.getElementById('numOutput');
            var n = Number(numInput && numInput.value);

            if (!Number.isFinite(n)) {
                numOutput.textContent = 'Please enter a valid number.';
                return;
            }

            if (n % 2 === 0) {
                numOutput.textContent = 'The number is even.';
            } else {
                numOutput.textContent = 'The number is odd.';
            }
        });
    }

    // Nested If Statement — Score classification
    if (scoreBtn) {
        scoreBtn.addEventListener('click', function () {
            var scoreInput = document.getElementById('scoreInput');
            var scoreOutput = document.getElementById('scoreOutput');
            var score = Number(scoreInput && scoreInput.value);

            if (!Number.isFinite(score)) {
                scoreOutput.textContent = 'Please enter a valid score.';
                return;
            }

            // Optional clamp to 0-100 for nicer UX
            if (score < 0 || score > 100) {
                scoreOutput.textContent = 'Score should be between 0 and 100.';
                return;
            }

            // Using nested ifs as requested
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
    }
});


