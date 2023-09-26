function tong (){
let physics = parseInt(document.getElementById("physics").value);
let chemistry = parseInt(document.getElementById("chemistry").value);
let biology = parseInt(document.getElementById("biology").value);
let total = physics + chemistry + biology;
document.getElementById("result").innerHTML = " Tổng 3 môn =" + total;
let mediumScore = total/3;
document.getElementById('dtb').innerHTML = "Điểm trung bình =" + mediumScore;
}
function convertCelsius(){
    let celsius = parseInt(document.getElementById('celsius').value);
    let fahrenheit = (9/5 * celsius) + 32;
    document.getElementById('result1').innerHTML = "Độ F là:" + fahrenheit ;
}
function area(){
    let radius = parseInt(document.getElementById('radius').value);
    let area = radius * radius * 3.14;
    document.getElementById('result2').innerHTML = "Diện tích hình tròn là:" + area;
    let perimeter = radius * 2 * 3.14;
    document.getElementById('result3').innerHTML = "Chu vi hình tròn là" + perimeter;
}