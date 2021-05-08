export class Competence{
    constructor(idCompetence,name) {
        this._idCompetence = idCompetence;
        this._name = name;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }


    get idCompetence() {
        return this._idCompetence;
    }

    set idCompetence(value) {
        this._idCompetence = value;
    }
}