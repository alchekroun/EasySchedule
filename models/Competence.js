export class Competence{
    constructor(idCompetence,name) {
        this._idCompetence = idCompetence;
        this._name = name;
    }


    getName() {
        return this._name;
    }

    setName(value) {
        this._name = value;
    }


    getIdCompetence() {
        return this._idCompetence;
    }

    setIdCompetence(value) {
        this._idCompetence = value;
    }
}