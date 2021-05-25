export class Teacher{
    constructor(idTeacher,name) {
        this._idTeacher= idTeacher;
        this._name = name;
    }


    getIdTeacher() {
        return this._idTeacher;
    }

    setIdTeacher(value) {
        this._idTeacher = value;
    }


    getName() {
        return this._name;
    }

    setName(value) {
        this._name = value;
    }
}