export class AmphiTeacher extends Teacher {
    constructor(idTeacher, name) {
        super(idTeacher, name);
        this._nbHoursToTeach=25;
        this._idTeacher = idTeacher;
        this._name = name;
    }


    get idTeacher() {
        return this._idTeacher;
    }

    set idTeacher(value) {
        this._idTeacher = value;
    }


    set nbHoursToTeach(value) {
        this._nbHoursToTeach = value;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}