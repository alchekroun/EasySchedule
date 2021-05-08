export class Slot {
    constructor(idSlot, hourStart, hourEnd, DayOfWeek) {
        this._idSlot = idSlot;
        this._hourStart = hourStart;
        this._hourEnd = hourEnd;
        this._DayOfWeek = DayOfWeek;
    }


    get idSlot() {
        return this._idSlot;
    }

    set idSlot(value) {
        this._idSlot = value;
    }


    get hourStart() {
        return this._hourStart;
    }

    set hourStart(value) {
        this._hourStart = value;
    }


    get hourEnd() {
        return this._hourEnd;
    }

    set hourEnd(value) {
        this._hourEnd = value;
    }


    get DayOfWeek() {
        return this._DayOfWeek;
    }

    set DayOfWeek(value) {
        this._DayOfWeek = value;
    }
}