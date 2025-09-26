document.addEventListener('DOMContentLoaded', function () {
    var ageBtn = document.getElementById('ageBtn');
    if (!ageBtn) return;
    ageBtn.addEventListener('click', function () {
        var ageInput = document.getElementById('ageInput');
        var ageOutput = document.getElementById('ageOutput');
        var value = Number(ageInput && ageInput.value);
        if (!Number.isFinite(value) || value < 0) {
            ageOutput.textContent = 'Please enter a valid non-negative age.';
            return;
        }
        if (value >= 18) {
            ageOutput.textContent = 'You are an adult.';
        } else {
            ageOutput.textContent = 'You are not an adult.';
        }
    });
});


