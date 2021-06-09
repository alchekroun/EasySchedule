class Teacher{
    constructor(idTeacher,name, competence) {
        this._idTeacher= idTeacher;
        this._name = name;
        this._n_competence = competence;
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

    getCompetence() {
        return this._n_competence;
    }

    setCompetence(value) {
        this._n_competence = value;
    }
}
