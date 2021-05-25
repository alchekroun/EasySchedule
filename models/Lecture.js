class Lecture{
    constructor(idLecture,duration) {
        this._idLecture = idLecture;
        this._duration= duration;
    }


    getIdLecture() {
        return this._idLecture;
    }

    setIdLecture(value) {
        this._idLecture = value;
    }


    getDuration() {
        return this._duration;
    }

    setDuration(value) {
        this._duration = value;
    }
}