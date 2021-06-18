 class Course {
    constructor(idCourse,name,nbHoursToTeach,competence,teacher,NbStudent,Room) {
        this._idCourse = idCourse;
        this._nbHoursToTeach = nbHoursToTeach;
        this._name = name;
        this._n_competence = competence;
        this._teacher = teacher;
        this._NbStudent= NbStudent;
        this._Room= Room;
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

     getCompetence() {
         return this._n_competence;
     }

     setCompetence(value) {
         this._n_competence = value;
     }

     getTeacher() {
         return this._teacher;
     }

     setTeacher(value) {
         this._teacher = value;
     }

     getNbStudent() {
         return this._NbStudent;
     }

     setNbStudent(value) {
         this._NbStudent = value;
     }

     getRoom() {
         return this._Room;
     }

     setRoom(value) {
         this._Room = value;
     }

}






