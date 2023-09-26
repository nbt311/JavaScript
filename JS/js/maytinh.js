function additon(){
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);
    let sum = number1 + number2;
    document.getElementById('result').innerHTML = sum;
}
function subtraction(){
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);
    let sub = number1 - number2;
    document.getElementById('result').innerHTML = sub;
}
function multiplication(){
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);
    let mul = number1 * number2;
    document.getElementById('result').innerHTML = mul;
}
function division(){
    let number1 = parseInt(document.getElementById('number1').value);
    let number2 = parseInt(document.getElementById('number2').value);
    let dis = number1 / number2;
    document.getElementById('result').innerHTML = dis;
}



