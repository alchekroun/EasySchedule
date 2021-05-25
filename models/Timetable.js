class Timetable {
    constructor(idTimetable,name) {
        this._idTimetable = idTimetable;
        this._name=name;
    }


    getIdTimetable() {
        return this._idTimetable;
    }

    setIdTimetable(value) {
        this._idTimetable = value;
    }


    getName() {
        return this._name;
    }

    setName(value) {
        this._name = value;
    }
}