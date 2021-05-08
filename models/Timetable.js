export class Timetable {
    constructor(idTimetable,name) {
        this._idTimetable = idTimetable;
        this._name=name;
    }


    get idTimetable() {
        return this._idTimetable;
    }

    set idTimetable(value) {
        this._idTimetable = value;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}