function checkScore() {
    var score = Number(document.getElementById('scoreInput').value);
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
    document.getElementById('scoreOutput').textContent = message;
}
