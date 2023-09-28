let samsung = new Mobile("samsung flip 4");
//samsung.chargeBattery();
//samsung.turnOff()
//samsung.checkStatus()
let iphone = new Mobile("iphone 15 promax");
samsung.writeMessage("xin chào Iphone");
samsung.sendMessage(iphone);
iphone.writeMessage("xin chào Samsung");
iphone.sendMessage(samsung);
document.write(samsung.readInbox())