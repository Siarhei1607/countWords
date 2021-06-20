const { countWords } = require('../countWords/countWords');

test('number 1', function() {
    let input = "aaa bb bb rrrrr aaa r t";
    expect(countWords(input, 1)).toStrictEqual([ [ 'aaa', 2 ] ] );
});

test('number 2', function() {
    let input = "aaa bb bb rrrrr aaa r t";
    expect(countWords(input, 2)).toStrictEqual([ [ 'aaa', 2 ], [ 'bb', 2 ] ] );
});

test('number 3', function() {
    let input = "aaa bb bb rrrrr aaa r t";
    expect(countWords(input, 3)).toStrictEqual([ [ 'aaa', 2 ], [ 'bb', 2 ], [ 'rrrrr', 1 ] ] );
});