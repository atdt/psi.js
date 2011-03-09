test_string = [
    'aslkjalksdjlaksjdlakjsdlakjsdlkj',
    '102831029381092830918230981028309128039801',
    '1293',
    '12',
    '123987123987172738928888888888888883747774747474744444444444444444444444444444444444444481283812831823718237812378t',
    '123987123987172738928888888888888883747774747474744444444444444444444444444444444444444481283812831823718237812378' ];

var i;
var x;
var start = new Date().getTime();

for (i = 0; i < 500000; ++i) {
    for (x = 0; x < test_string[x].length; x++) {
        test_string[x].isdigit();
    }
}

var end = new Date().getTime();
var time = end - start;

console.log('Execution time: ' + time);


var start = new Date().getTime();

for (i = 0; i < 500000; ++i) {
    for (x = 0; x < test_string[x].length; x++) {
        test_string[x].isdigit2();
    }
}

var end = new Date().getTime();
var time2 = end - start;

console.log('Execution time: ' + time2);


