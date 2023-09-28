class Mobile{
    status;
    battery;
    message;
    inbox;
    outbox;
    name;
    constructor(name) {
        this.status = true;
        this.battery = 90;
        this.message = "";
        this.inbox = [];
        this.outbox = [];
        this.name = name;

    }

    checkStatus() {
            if (this.status){
                document.write("Điện thoại đang bật");
            }else {
                document.write("Điện thoại đang tắt");
            }
    }

    turnOn() {
        this.status = true;
    }

    turnOff() {
        this.status = false;
    }

    chargeBattery(){
        let x = setInterval( () => {
            if (this.battery >= 100){
                document.write("Pin sạc đầy")
                clearInterval(x);
                return;
            }
            ++this.battery
            document.write("Battery charings: " + this.battery + "<br>")
        } , 1000)
    }

    writeMessage(text){
        this.decreaseBattery()
        this.message = text;
    }

    sendMessage(phone){
        phone.inbox.push(this.message);
        this.outbox.push(this.message);
        this.decreaseBattery()
    }

    readInbox(){
        return this.inbox;
    }

    readOutbox(){
        return this.outbox;
    }

    decreaseBattery(){
        this.battery--;
    }
}
