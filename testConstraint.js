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

FD.distribute.naive(S, ["S1","S2","S3","S4","S5","S6","L1M","L2M","L3M","L4M","L5M","L6M"]); */
/*
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
/*S.num("M1C",4);
S.num("M2C",3);*/

//MATIERE ENSEIGNÉ PAR LE PROF
/*S.decl("M1Prof",[[1,2]]);
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

*/



let list_prof = {};
let list_Course={};
let dom;


//PROFS
let t1 = new Teacher(1, "alex", [1,3]);
list_prof["t1"] = t1;


let t2 = new Teacher(2, "david", [2]);
list_prof["t2"] = t2;

let t3 = new Teacher(3, "alexis",[4]);
list_prof["t3"] = t3;


let t4 = new Teacher(4, "davidon", [2,3]);
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

let CourseProf=[];

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
}

console.log(S);
S.distinct(CourseProf);
FD.distribute.naive(S, CourseProf);





