class Lamp {
    status;
    battery;

    constructor() {
        this.status = true;
        this.battery = 90;
    }


    batteryInfo() {
        document.write("Battery: " + this.battery + "%" + "<br>");
    }


    chargeBattery(){
        let x = setInterval( () => {
            if (this.battery >= 100){
                document.write("Battery is full")
                clearInterval(x);
                return;
            }
            ++this.battery
            document.write("Battery charings: " + this.battery + "<br>")
        } , 1000)

    }

    decreaseBattery(){
        if (this.battery > 0){
            this.battery--;
        }

    }

    ligh(){
        if(this.status){
            document.write("Lighning");
        }else {
            document.write("Not lighting");
        }
    }

    turnOn(){
        this.status = true;
    }

    turnOff(){
        this.status = false;
    }

}