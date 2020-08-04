//BMI message hide
document.getElementById('normal').style.display = "none";
document.getElementById('danger').style.display = "none";
document.getElementById('emptyInput').style.display = "none";
document.getElementById('dangerMessage').innerText = "";
document.getElementById('dangerBMI').value = "";
let weight = document.getElementById('weight');
let heightFeet = document.getElementById('heightFeet');
let heightInch = document.getElementById('heightInch');

//Calculator button handler
const calculatorButton = document.getElementById('calculatorButton').addEventListener('click', function() {
    let height = Number(heightFeet.value * 12) + Number(heightInch.value);
    let heightMeter = height * 0.0254;
    let bmiResult = ((weight.value) / (Math.pow(heightMeter, 2)));
    let BMI = bmiResult.toFixed(2)
    console.log(BMI);

    //BMI category
    if (weight.value == "" || heightFeet.value == "" || heightInch.value == "") {
        document.getElementById('emptyInput').style.display = "block";
        document.getElementById('normal').style.display = "none";
        document.getElementById('danger').style.display = "none";
    } else {
        document.getElementById('emptyInput').style.display = "none";
        weight.value = "";
        heightFeet.value = "";
        heightInch.value = "";
        //=======
        if (BMI < 15) {
            document.getElementById('normal').style.display = "none";
            document.getElementById('danger').style.display = "block";
            document.getElementById('dangerBMI').innerText = BMI;
            document.getElementById('dangerMessage').innerText = "very severely underweight";
        } else if (BMI >= 15 && BMI < 16) {
            document.getElementById('normal').style.display = "none";
            document.getElementById('danger').style.display = "block";
            document.getElementById('dangerBMI').innerText = BMI;
            document.getElementById('dangerMessage').innerText = "severely underweight";
        } else if (BMI >= 16 && BMI < 18.5) {
            document.getElementById('normal').style.display = "none";
            document.getElementById('danger').style.display = "block";
            document.getElementById('dangerBMI').innerText = BMI;
            document.getElementById('dangerMessage').innerText = "underweight";
        } else if (BMI >= 18.5 && BMI < 25) {
            document.getElementById('danger').style.display = "none";
            document.getElementById('normal').style.display = "block";
            document.getElementById('normalBMI').innerText = BMI;
            document.getElementById('normalMessage').innerText = "normal (Healthy Weight)";
        } else if (BMI >= 25 && BMI < 30) {
            document.getElementById('normal').style.display = "none";
            document.getElementById('danger').style.display = "block";
            document.getElementById('dangerBMI').innerText = BMI;
            document.getElementById('dangerMessage').innerText = "overweight";
        } else if (BMI >= 30 && BMI < 35) {
            document.getElementById('normal').style.display = "none";
            document.getElementById('danger').style.display = "block";
            document.getElementById('dangerBMI').innerText = BMI;
            document.getElementById('dangerMessage').innerText = "Moderately obese";
        } else if (BMI >= 35 && BMI < 40) {
            document.getElementById('normal').style.display = "none";
            document.getElementById('danger').style.display = "block";
            document.getElementById('dangerBMI').innerText = BMI;
            document.getElementById('dangerMessage').innerText = "severely obese";
        } else {
            document.getElementById('normal').style.display = "none";
            document.getElementById('danger').style.display = "block";
            document.getElementById('dangerBMI').innerText = BMI;
            document.getElementById('dangerMessage').innerText = "very severely obese";
        }
    }
});