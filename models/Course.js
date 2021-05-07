export class  Course {
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

import {Course} from 'models/Course';
try {
    FD.space;
} catch (e) {
    alert("fd.js module needs to be loaded before fd-tests.js");
}

const mathematiques = new Course(1,1,"Mathematiques",30);
console.log(mathematiques.type);
