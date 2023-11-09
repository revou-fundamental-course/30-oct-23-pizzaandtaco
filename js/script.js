document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get user input
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const gender = document.getElementById('gender').value;
    
    // Validate input
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Masukkan berat dan tinggi yang valid.');
        return;
    }

    // Calculate BMI
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    // Determine BMI category based on gender
    let category;
    if (gender === 'male') {
        if (bmi < 20.7) {
            category = 'Kurus';
        } else if (bmi >= 20.7 && bmi < 26.4) {
            category = 'Normal';
        } else {
            category = 'Gemuk';
        }
    } else {
        if (bmi < 19.1) {
            category = 'Kurus';
        } else if (bmi >= 19.1 && bmi < 25.8) {
            category = 'Normal';
        } else {
            category = 'Gemuk';
        }
    }

    // Display BMI result
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `BMI: ${bmi.toFixed(2)} (${category})`;
});