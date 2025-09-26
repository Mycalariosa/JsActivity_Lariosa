function checkNumber() {
    var n = Number(document.getElementById('numInput').value);
    if (n % 2 === 0) {
        document.getElementById('numOutput').textContent = 'The number is even.';
    } else {
        document.getElementById('numOutput').textContent = 'The number is odd.';
    }
}
