 class Course {
    constructor(idCourse,type,name,nbHoursToTeach) {
        this._idCourse = idCourse;
        this._nbHoursToTeach = nbHoursToTeach;
        this._name = name;
        this._type = type;
    }

    getIdCourse() {
        return this._idCourse;
    }

    setIdCourse(value) {
        this._idCourse = value;
    }

    getNbHoursToTeach() {
        return this._nbHoursToTeach;
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


    getType() {
        return this._type;
    }

    setType(value) {
        this._type = value;
    }
}






