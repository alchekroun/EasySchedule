export class Teacher{
    constructor(idTeacher,name) {
        this._idTeacher= idTeacher;
        this._name = name;
    }


    get idTeacher() {
        return this._idTeacher;
    }

    set idTeacher(value) {
        this._idTeacher = value;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}