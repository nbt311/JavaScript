function convertMoney(){
const money = +document.getElementById('money').value;
const from = +document.getElementById('from').value;
const to = +document.getElementById('to').value;
const result = money * to / from;
document.getElementById('result').innerHTML = result;


}