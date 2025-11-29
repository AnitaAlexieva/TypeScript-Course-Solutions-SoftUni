enum TravelVacation {
    Abroad = 'Abroad',
    InCountry =
    'InCountry'
}

enum MountainVacation { 
    Ski = 'Ski', 
    Hiking = 'Hiking' 
}

enum BeachVacation { 
    Pool = 'Pool', 
    Sea = 'Sea', 
    ScubaDiving = 'ScubaDiving'
}

interface Holiday {

set start(val: Date);

set end(val: Date);

getInfo(): string;

}

interface VacationManager<T, V> {
     reserveVacation(holiday: T, vacationType: V): void; 
     listReservations(): string;
}

class PlannedHoliday implements Holiday{
    private _start! : Date;
    private _end! : Date;

    constructor(start:Date, end:Date){
        this.start = start;
        this.end = end;
    }

    set start(val:Date){
        if(val > this._end){
            throw new Error("Start date cannot be after end date");
        }

        this._start = val;
    }

    set end(val:Date){
        if(val < this._start){
            throw new Error('End date cannot be before start date')
        }

        this._end = val;
    }

    getInfo(): string {
        let startDay = `${this._start.getDate()}/${this._start.getMonth() + 1}/${this._start.getFullYear()}`
        let endtDay = `${this._end.getDate()}/${this._end.getMonth() + 1}/${this._end.getFullYear()}`

        return `Holiday: ${startDay} - ${endtDay}`
    }
}

class HolidayManager<T extends Holiday, V extends TravelVacation | MountainVacation | BeachVacation> implements VacationManager<T,V>{
    private vacations : Map<T,V> = new Map();

    reserveVacation(holiday: T, vacationType: V): void {
        this.vacations.set(holiday, vacationType);
    }

    listReservations(): string {    
        return [...this.vacations.entries()].map((x) => `${x[0].getInfo()} => ${x[1]}`).join("\n")
    }
}

let holiday = new PlannedHoliday(new Date(2024, 1, 1), new Date(2024, 1, 4));

let holiday2 = new PlannedHoliday(new Date(2025, 3, 14), new Date(2025, 3, 17));

let holidayManager = new HolidayManager<Holiday, TravelVacation>();

holidayManager.reserveVacation(holiday, TravelVacation.Abroad);

holidayManager.reserveVacation(holiday2, TravelVacation.InCountry);

console.log(holidayManager.listReservations())