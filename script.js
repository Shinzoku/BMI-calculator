// Function to calculate BMI
function calculateBMI() {
    // Get weight and height values from the input fields
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    // Check if the values are positive numbers
    if (weight > 0 && height > 0) {
        // Convert height from cm to meters
        var heightInMeters = height / 100;

        // Calculate BMI
        var bmi = weight / (heightInMeters * heightInMeters);

        // Prepare the result text
        var resultText = "Votre IMC est : " + bmi.toFixed(2);

        // Get the result div and display the result
        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML = resultText;

        // Add BMI category based on the calculated value
        if (bmi < 18.5) {
            resultDiv.innerHTML += "<br>Catégorie: Maigreur";

        } else if (bmi < 24.9) {
            resultDiv.innerHTML += "<br>Catégorie: Normal";

        } else if (bmi < 29.9) {
            resultDiv.innerHTML += "<br>Catégorie: Surpoids";

        } else {
            resultDiv.innerHTML += "<br>Catégorie: Obésité";
        }
    } else {
        // Alert the user if the values are not valid
        alert("Veuillez entrer des valeurs de poids et de taille valides.");
    }
}
