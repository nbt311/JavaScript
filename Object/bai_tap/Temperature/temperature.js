class Temperature{
    celius;

    constructor(celius) {
        this.celius = +prompt("Nhập độ C mong muốn");

    }

    converToFahrenheit(){

        document.write("Độ C: " + this.celius + " đổi sang " + "độ F = " + (this.celius * 1.8 + 32) + "<br>");
    }

    converToKenvin(){
        document.write("Độ C: " + this.celius + " đổi sang " + "độ K = " + (this.celius + 273.15));
    }
}


let temperature = new Temperature(25);
temperature.converToFahrenheit();
temperature.converToKenvin();