try {
    FD.space;
} catch (e) {
    alert("fd.js module needs to be loaded before fd-tests.js");
}

let S = new FD.space();

function show_result(result, start) {
    if (result.status === 'solved' || (!result.space.failed && result.space.brancher.queue.length === 0)) {
        var end = Date.now();
        var S = result.best || result.space;
        display.show('<p><tt>' + '['+(end-start)+' ms] ' + ' ' + result.status + ': ' + JSON.stringify(S.solution()) + '</tt></p>');
        return 1;
    } else {
        return 0;
    }
}
var start = Date.now();

S.decl('a', [[1,2]]);
S.decl('b', [[1,2]]);
S.num('c', 4);
S.eq('a', 'b');
S.plus('a', 'b', 'c');

let state = {space: S};

let count = 0;
display.show('<h1>' + state.more + '</h1>');

do {
    state = FD.search.depth_first(state);
    count += show_result(state, start);
} while(state.more);

if (count === 0) {
    display.show('<p><tt>No solution</tt></p>');
}

display.show('<p>succ = ' + S.succeeded_children + ', fail = ' + S.failed_children + ', stab = ' + S.stable_children + ', <b>total</b> = ' +
    (S.succeeded_children + S.failed_children + S.stable_children) + '</p>');
display.show('<hr/>');
//display.show('<p>'+ state.is_solved(S) + ' | ' + state.status + ': ' + JSON.stringify(S.solution()) + '</p>');


