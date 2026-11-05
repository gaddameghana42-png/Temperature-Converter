function convertTemperature() {

    let temperature = parseFloat(
        document.getElementById("temperature").value
    );

    let from = document.getElementById("fromUnit").value;
    let to = document.getElementById("toUnit").value;

    let result = document.getElementById("result");
    let error = document.getElementById("error");

    error.innerText = "";
    result.innerText = "";

    // Check empty and invalid input
    if (document.getElementById("temperature").value.trim() === "" ||
        !Number.isFinite(temperature)) {
        error.innerText = "Please enter a valid number!";
        return;
    }

    // Convert to Celsius first
    let celsius;

    if (from === "Celsius") {
        celsius = temperature;
    } else if (from === "Fahrenheit") {
        celsius = (temperature - 32) * 5 / 9;
    } else {
        celsius = temperature - 273.15;
    }

    // Check absolute zero
    if (celsius < -273.15) {
        error.innerText = "Temperature cannot be below absolute zero!";
        return;
    }

    // Convert Celsius to selected unit
    let converted;

    if (to === "Celsius") {
        converted = celsius;
    } else if (to === "Fahrenheit") {
        converted = (celsius * 9 / 5) + 32;
    } else {
        converted = celsius + 273.15;
    }

    result.innerText =
        converted.toFixed(2) + " " + to;
}