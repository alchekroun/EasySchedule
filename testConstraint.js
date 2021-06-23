/*
const mathematiques = new Course(1,"TypeMathematiques","Mathematiques",30);
S.decl('a', [[1,10]]);
S.decl('b', [[1,5]]);
S.decl('c',[[1,19]]);
S.gt('a', 'b');
S.eq('b','c');
FD.distribute.naive(S, ['a', 'b','c']);

const mathematiques = new Course(1,2,"Mathematiques",18);
const francais = new Course(2,1,"Francais",12);


S.num("FR",1);
S.num("Ma",2);

S.num("nbFr",4);
S.num("nbMa",2);

S.decl("L1M",[[1,2]]);
S.decl("L2M",[[1,2]]);
S.decl("L3M",[[1,2]]);
S.decl("L4M",[[1,2]]);
S.decl("L5M",[[1,2]]);
S.decl("L6M",[[1,2]]);
S.num("total",4);

S.num("L1",1);
S.num("L2",2);
S.num("L3",3);
S.num("L4",4);
S.num("L5",5);
S.num("L6",6);


S.decl("S1",[[1,6]]);
S.decl("S2",[[1,6]]);
S.decl("S3",[[1,6]]);
S.decl("S4",[[1,6]]);
S.decl("S5",[[1,6]]);
S.decl("S6",[[1,6]]);


S.distinct(["S1","S2","S3","S4","S5","S6"]);
S.product(["L1M","L2M","L3M","L4M","L5M","L6M"],"total");

FD.distribute.naive(S, ["S1","S2","S3","S4","S5","S6","L1M","L2M","L3M","L4M","L5M","L6M"]);
let list_prof = {};



//PROFS
let t1 = new Teacher(1, "alex", 1);
S.num("t1", t1.getIdTeacher());
list_prof["t1"] = t1;

let t2 = new Teacher(2, "david", 2);
S.num("t2", t2.getIdTeacher());
list_prof["t2"] = t2;

// MATIERE
let c1 = new Course(1, 1, "analyse", 1);
S.decl("c1", [[1,2]])
let c2 = new Course(2, 2, "algèbre", 1);
S.decl("c2", [[1,2]])

//COMPETENCE POUR ENSEIGNER LES MATIERES
/!*S.num("M1C",4);
S.num("M2C",3);

//MATIERE ENSEIGNÉ PAR LE PROF
S.decl("M1Prof",[[1,2]]);
S.decl("M2Prof",[[1,2]]);

S.decl("PP",[[1,2]]);

// Contraintes

for(let key in list_prof){
    if(list_prof[key].getCompetence() === c1.getType()){
        console.log(" test " + key);
        S.eq(key, "c1");
    } else if(list_prof[key].getCompetence() === c2.getType()){
        console.log(key);
        S.eq(key, "c2");
    }
}

S.eq("P1C","M1C");
S.eq("PP","M1Prof");
S.eq("P1C","M2C");
S.eq("PP","M2Prof");

S.eq("P2C","M1C");

S.eq("P2C","M2C");

FD.distribute.naive(S, ["c1", "t1", "t2"]);



let list_prof = {};
let list_Course={};
let list_prof_fd={};


//PROFS
let t1 = new Teacher(1, "alex", 1);
list_prof["t1"] = t1;


let t2 = new Teacher(2, "david", 2);
list_prof["t2"] = t2;

let t3 = new Teacher(3, "alexis",4);
list_prof["t3"] = t3;


let t4 = new Teacher(4, "davidon", 3);
list_prof["t4"] = t4;


// MATIERE
let c1 = new Course(1, 1, "analyse", 1,2,"C1prof");
let c2 = new Course(2, 2, "algèbre", 1,1,"C2prof");
let c3 = new Course(3, 1, "info1", 1,3,"C3prof");
let c4 = new Course(4, 2, "info2", 1,4,"C4prof");
list_Course["c1"] = c1;
list_Course["c2"] = c2;
list_Course["c3"] = c3;
list_Course["c4"] = c4;
var a =[[1,1],[2,2],[3,3],[4,4]];
S.decl("C1prof",a);
S.decl("C2prof",[[1,4]]);
S.decl("C3prof",[[1,4]]);
S.decl("C4prof",[[1,4]]);
list_prof_fd["c1"]="C1prof";
list_prof_fd["c2"]="C2prof";
list_prof_fd["c3"]="C3prof";
list_prof_fd["c4"]="C4prof";


for(let key in list_prof){
    for(let key1 in list_Course){
            if(list_prof[key].getCompetence() === list_Course[key1].getCompetence()){
                S.eq(S.konst(list_prof[key].getIdTeacher()),list_prof_fd[key1]);
            }
        }
}
//S.distinct(list_prof_fd);
FD.distribute.naive(S, ["C1prof","C2prof","C3prof","C4prof"]);





let list_prof = {};
let list_Course={};
let list_Lecture={};
let list_Room={};
let dom;
let CourseProf=[];
let AllVar=[];
let tabCourse=[];
let tabRoom=[];
let sumNbhour=0;
let ProductNbhour=1;
let Nbcours;
let NameCourse=[];
let NameRoom=[];


//PROFS
let t1 = new Teacher(1, "alex", [1,3]);
let t2 = new Teacher(2, "david", [2]);
let t3 = new Teacher(3, "alexis",[4]);
let t4 = new Teacher(4, "davidon", [2,3]);
list_prof["t1"] = t1;
list_prof["t2"] = t2;
list_prof["t3"] = t3;
list_prof["t4"] = t4;

//Room
let r1= new PhysicalRoom(1,32,"tolbiac","C1401",["14/6/2021","15/6/2021","16/6/2021","17/6/2021"]);
let r2= new PhysicalRoom(2,28,"tolbiac","C1403",["18/6/2021"]);
let r3= new PhysicalRoom(3,14,"tolbiac","C1405",["15/6/2021","17/6/2021"]);
list_Room["r1"]=r1;
list_Room["r2"]=r2;
list_Room["r3"]=r3;

// MATIERE
let c1 = new Course(1, "analyse", 12,2,"C1prof",29,"C1Room");
let c2 = new Course(2, "algebre", 6,1,"C2prof",12,"C2Room");
let c3 = new Course(3, "info1" ,6,4,"C3prof",22,"C3Room");
let c4 = new Course(4, "info2" ,6,3,"C4prof",32,"C4Room");
list_Course["c1"] = c1;
list_Course["c2"] = c2;
list_Course["c3"] = c3;
list_Course["c4"] = c4;


//Lecture
let l1= new Lecture(1,9,12,"lundi","L1Course","14/6/2021");
let l2= new Lecture(2,14,17,"lundi","L2Course","14/6/2021");
let l3= new Lecture(3,9,12,"mardi","L3Course","15/6/2021");
let l4= new Lecture(4,14,17,"mardi","L4Course","15/6/2021");
let l5= new Lecture(5,9,12,"mercredi","L5Course","16/6/2021");
let l6= new Lecture(6,14,17,"mercredi","L6Course","16/6/2021");
let l7= new Lecture(7,9,12,"jeudi","L7Course","17/6/2021");
let l8= new Lecture(8,14,17,"jeudi","L8Course","17/6/2021");
let l9= new Lecture(9,9,12,"vendredi","L9Course","18/6/2021");
let l10= new Lecture(10,14,17,"vendredi","L10Course","18/6/2021");
list_Lecture["l1"] = l1;
list_Lecture["l2"] = l2;
list_Lecture["l3"] = l3;
list_Lecture["l4"] = l4;
list_Lecture["l5"] = l5;
list_Lecture["l6"] = l6;
list_Lecture["l7"] = l7;
list_Lecture["l8"] = l8;
list_Lecture["l9"] = l9;
list_Lecture["l10"] = l10;

//L[]Course
for (let key1 in list_Course){
  dom=[list_Course[key1].getIdCourse(),list_Course[key1].getIdCourse()];
  tabCourse.unshift(dom);
  Nbcours=list_Course[key1].getNbHoursToTeach()/3;
  sumNbhour+=(list_Course[key1].getIdCourse()*Nbcours);
  ProductNbhour*=(Math.pow(list_Course[key1].getIdCourse(), Nbcours));
}
S.num('s',sumNbhour);
S.num('p',ProductNbhour);


for(let key in list_Lecture){
  S.decl(list_Lecture[key].getCourse(),tabCourse.sort());
  NameCourse.push(list_Lecture[key].getCourse());
  AllVar.push(list_Lecture[key].getCourse())
}
S.sum(NameCourse,'s');
S.product(NameCourse,'p');


for(let key in list_Lecture)
{
    for (let key1 in list_Lecture){
        if (list_Lecture[key].getIdLecture()<list_Lecture[key1].getIdLecture()){
            if (list_Lecture[key].getDay()==list_Lecture[key1].getDay()){
                 S.eq(list_Lecture[key].getCourse(),list_Lecture[key1].getCourse())
            }
        }
}
}

//L[]Room
/!*
for(let key in list_Lecture){
    let tab=[];
    for(let key1 in list_Room){
        for ( let i in list_Room[key1].getDisponibilite()){
            if (list_Room[key1].getDisponibilite()[i]==list_Lecture[key].getDay()){
                dom=[list_Room[key1].getIdRoom(),list_Room[key1].getIdRoom()];
                tab.unshift(dom);
            }
        }
    }
    S.decl(list_Lecture[key].getRoom(), tab.sort());
    AllVar.push(list_Lecture[key].getRoom());
}

//C[]teacher

for (let key1 in list_Course) {
    let tab=[];
    for (let key in list_prof) {
        for (let i in list_prof[key].getCompetence()) {
            if (list_prof[key].getCompetence()[i] === list_Course[key1].getCompetence()) {
                dom = [list_prof[key].getIdTeacher(), list_prof[key].getIdTeacher()];
                tab.unshift(dom);
            }
        }

    }
    S.decl(list_Course[key1].getTeacher(), tab.sort());
    CourseProf.push(list_Course[key1].getTeacher());
    AllVar.push(list_Course[key1].getTeacher());
}
S.distinct(CourseProf);

//C[]Room
for(let key in list_Course){
    let tab=[];
    for (let key1 in list_Room){
        if(list_Course[key].getNbStudent()<=list_Room[key1].getCapacity()){
            dom=[list_Room[key1].getIdRoom(),list_Room[key1].getIdRoom()];
            tab.unshift(dom);
        }
    }
    console.log(tab);
    S.decl(list_Course[key].getRoom(),tab.sort());
    NameRoom.push(list_Course[key].getRoom());
    AllVar.push(list_Course[key].getRoom());

}







FD.distribute.naive(S,AllVar);




*/

if (document.getElementById('tableauProf').value != "" || document.getElementById('tableauMatiere').value != ""){
    var tableauProf = document.getElementById('tableauProf').value
    var tableauMatiere = document.getElementById('tableauMatiere').value
    objProf = JSON.parse(tableauProf)
    objMatiere = JSON.parse(tableauMatiere)
    alert(objProf)
    alert(objMatiere)
}