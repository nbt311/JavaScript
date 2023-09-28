class Date{
    day;
    month;
    year;


    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    getDate() {
        return this.day + "/" + this.month + "/" + this.year;
    }

    setDate(day,month,year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

}