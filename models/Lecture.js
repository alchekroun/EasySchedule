class Lecture{
    constructor(idLecture,hourStart, hourEnd, DayOfWeek,Course,Day,/*Room*/) {
        this._idLecture = idLecture;
        this._hourStart = hourStart;
        this._hourEnd = hourEnd;
        this._DayOfWeek = DayOfWeek;
        this._Day= Day;
        this._Course= Course;
       // this._Room= Room;
    }


    getIdLecture() {
        return this._idLecture;
    }

    setIdLecture(value) {
        this._idLecture = value;
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

    getDay() {
        return this._Day;
    }

    setDay(value) {
        this._Day = value;
    }


    setYear(value) {
        this._Year = value;
    }

    getCourse() {
        return this._Course;
    }

    setCourse(value) {
        this._Course= value;
    }
 /*
    getRoom() {
        return this._Room;
    }

    setCourse(value) {
        this._Room= value;
    }

*/


}