try {
    FD.space;
} catch (e) {
    alert("fd.js module needs to be loaded before fd-tests.js");
}

class  Course {
    constructor(idCourse,type,name,nbHoursToTeach) {
        this._idCourse = idCourse;
        this._nbHoursToTeach = nbHoursToTeach;
        this._name = name;
        this._type = type;
    }


    get idCourse() {
        return this._idCourse;
    }

    set idCourse(value) {
        this._idCourse = value;
    }

    get nbHoursToTeach() {
        return this._nbHoursToTeach;
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


    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }
}
const S = new FD.space();
//const mathematiques = new Course(1,S.decl('TypeMathematiques',[[1,2]]),"Mathematiques",30);
//const francais = new Course(2,S.decl('TypeFrancais',[[1,2]]),"Francais",30);
S.decl('t',[[1,2]]);
S.decl('b',[[1,2]]);
S.neq('t','b');
FD.distribute.naive(S, ['t','b']);
console.log(S);
console.log(S.is_solved());