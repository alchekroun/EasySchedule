
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
/*
var S = tests.script(new FD.space());
var tests= [
    script: function(S){
    const mathematiques = new Course(1,S.decl('TypeMathematiques',[[1,2]]),"Mathematiques",30);
    const francais = new Course(2,S.decl('TypeFrancais',[[1,2]]),"Francais",30);
    //S.decl('t', [[1, 2]]);
    //S.decl('b', [[1, 2]]);
    S.neq('TypeMathematiques','TypeFrancais');
    S.propagate();
    FD.distribute.naive(S, ['TypeMathematiques','TypeFrancais']);
    //FD.search.depth_first(S);
    console.log(S);
    console.log(S.is_solved()); }


]  */


(function () {

    // A simple script for solving sudoku puzzles.
    // 'board' is an object whose keys are sudoku
    // cell references of the form <letter><digit>
    // where <letter> gives the row letter from
    // ABCDEFGHI and <digit> gives column from
    // 123456789. The solution of the space will be
    // an object with a key for each cell.


    // Some simple tests.
    var tests = [
        {   name: 'test_plus',
            description: 'Simple plus test',
            search: FD.search.depth_first,

            verify: function (sol) {
                return sol.Y === 7;
            },

            script: function (S) {
                return S.num('X', 3).num('Z', 10).decl('Y').plus('X', 'Y', 'Z');
            }
        }];



    var run_tests = (function () {
        var display = {};
        display.__proto__ = (document || console);
        display.show = ((document && document.write)
            ? (function () { return document.write.apply(document, arguments);  })
            : (function () { return console.log.apply(console, arguments); }));
        this.display = display;

        var strings = {
            correct: '<span style="color:green">CORRECT</span>',
            wrong: '<span style="color:red"><b>WRONG!</b></span>'
        };

        function show_result(test, result, start) {
            if (result.status === 'solved' || (!result.space.failed && result.space.brancher.queue.length === 0)) {
                var end = Date.now();
                var S = result.best || result.space;
                var failure = (result.is_solved(S) && test.verify) ? strings[test.verify(S.solution()) ? 'correct' : 'wrong'] : '';
                display.show('<p><tt>' + '['+(end-start)+' ms] ' + failure + ' ' + result.status + ': ' + JSON.stringify(S.solution()) + '</tt></p>');
                return 1;
            } else {
                return 0;
            }
        }

        return function () {
            var tests_copy = tests.slice(0);
            function dotest(test) {
                if (test.do_not_run || !test.script) {
                    return;
                }

                // Default to depth_first search if unspecified.
                test.search = test.search || FD.search.depth_first;

                console.log(test.name);

                var S = test.script(new FD.space());
                if (S) {
                    var start = Date.now();
                    var state = {space: S}; // for-debugging: {space: S, verify: test.verify};
                    var count = 0;

                    display.show('<p><b><a name="' + test.name + '">' + test.name + '</a>:</b> ' + test.description + '</p>' + (test.single_step ? ' (single stepping)' : ''));

                    do {
                        state = test.search(state);
                        count += show_result(test, state, start);
                        if (count >= test.max_solutions) {
                            display.show('<p>--- reached given limit of ' + test.max_solutions + ' solutions ---</p>');
                            break;
                        }
                    } while (state.more);

                    if (count === 0) {
                        display.show('<p><tt>No solution</tt></p>');
                    }

                    display.show('<p>succ = ' + S.succeeded_children + ', fail = ' + S.failed_children + ', stab = ' + S.stable_children + ', <b>total</b> = ' +
                        (S.succeeded_children + S.failed_children + S.stable_children) + '</p>');
                    display.show('<hr/>');
                }
            }

            function dotests() {
                if (tests_copy.length > 0) {
                    dotest(tests_copy.shift());
                    window.scrollTo(0,document.body.scrollHeight);
                    setTimeout(dotests, 0);
                }
            }

            dotests();

        };
    })();

    // Comment this out if you don't want to run the tests.
    run_tests();

})();


