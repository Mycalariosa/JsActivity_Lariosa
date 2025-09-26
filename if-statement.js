function checkAge() {
    var value = Number(document.getElementById('ageInput').value);
    if (value >= 18) {
        document.getElementById('ageOutput').textContent = 'You are an adult.';
    }
    if (value < 18) {
        document.getElementById('ageOutput').textContent = 'You are a minor.';
    }
}
