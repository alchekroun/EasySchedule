export class Lecture{
    constructor(idLecture,duration) {
        this._idLecture = idLecture;
        this._duration= duration;
    }


    get idLecture() {
        return this._idLecture;
    }

    set idLecture(value) {
        this._idLecture = value;
    }


    get duration() {
        return this._duration;
    }

    set duration(value) {
        this._duration = value;
    }
}