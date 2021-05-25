try {
    FD.space;
} catch (e) {
    alert("fd.js module needs to be loaded before fd-tests.js");
}

let S = new FD.space();

var display = {};

display.show = ((document && document.write)
    ? (function () { return document.write.apply(document, arguments);  })
    : (function () { return console.log.apply(console, arguments); }));
this.display = display;


function show_result(result, start) {
    if (result.status === 'solved' || (!result.space.failed && result.space.brancher.queue.length === 0)) {
        var end = Date.now();
        var S = result.best || result.space;
        display.show('<p>' + '['+(end-start)+' ms] ' + ' '  + result.status + ': ' + JSON.stringify(S.solution()) + '</p>');
        return 1;
    } else {
        return 0;
    }
}
var start = Date.now();




