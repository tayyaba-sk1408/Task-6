function calculateBMI() {

    // Get values from input fields

    let height = parseFloat(document.getElementById("height").value);

    let weight = parseFloat(document.getElementById("weight").value);

    let result = document.getElementById("result");


    // Check for empty or invalid values

    if (isNaN(height) || isNaN(weight)) {

        result.innerHTML = "Please enter both height and weight.";

        return;
    }


    // Reject zero and negative values

    if (height <= 0 || weight <= 0) {

        result.innerHTML = "Please enter positive values.";

        return;
    }


    // Convert height from centimeters to meters

    let heightInMeters = height / 100;


    // Calculate BMI

    let bmi = weight / (heightInMeters * heightInMeters);


    // Round BMI to two decimal places

    bmi = bmi.toFixed(2);


    // Find BMI category

    let category;


    if (bmi < 18.5) {

        category = "Underweight";

    } else if (bmi < 25) {

        category = "Normal weight";

    } else if (bmi < 30) {

        category = "Overweight";

    } else {

        category = "Obesity";
    }


    // Display result

    result.innerHTML =
        "<strong>Your BMI: " + bmi + "</strong>" +
        "<br>" +
        "Category: " + category;
}