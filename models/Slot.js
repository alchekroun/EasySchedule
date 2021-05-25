class Slot {
    constructor(idSlot, hourStart, hourEnd, DayOfWeek) {
        this._idSlot = idSlot;
        this._hourStart = hourStart;
        this._hourEnd = hourEnd;
        this._DayOfWeek = DayOfWeek;
    }


    getIdSlot() {
        return this._idSlot;
    }

    setIdSlot(value) {
        this._idSlot = value;
    }


    getHourStart() {
        return this._hourStart;
    }

    setHourStart(value) {
        this._hourStart = value;
    }


    getHourEnd() {
        return this._hourEnd;
    }

    setHourEnd(value) {
        this._hourEnd = value;
    }


    getDayOfWeek() {
        return this._DayOfWeek;
    }

    setDayOfWeek(value) {
        this._DayOfWeek = value;
    }
}