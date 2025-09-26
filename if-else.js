document.addEventListener('DOMContentLoaded', function () {
    var numBtn = document.getElementById('numBtn');
    if (!numBtn) return;
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
});


