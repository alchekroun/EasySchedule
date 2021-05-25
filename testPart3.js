let state = {space: S};

let count = 0;
//display.show('<h1>' + state.more + '</h1>');

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