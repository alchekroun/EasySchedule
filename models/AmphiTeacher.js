export class AmphiTeacher extends Teacher {
    constructor(idTeacher, name) {
        super(idTeacher, name);
        this._nbHoursToTeach=25;
        this._idTeacher = idTeacher;
        this._name = name;
    }


    getIdTeacher() {
        return this._idTeacher;
    }

    setIdTeacher(value) {
        this._idTeacher = value;
    }


    setNbHoursToTeach(value) {
        this._nbHoursToTeach = value;
    }


    getName() {
        return this._name;
    }

    setName(value) {
        this._name = value;
    }
}