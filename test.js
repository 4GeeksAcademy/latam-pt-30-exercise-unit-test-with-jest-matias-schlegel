const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', function() {
    let total = sum(14, 9)
    expect(total).toBe(23)
}); 


test("One euro should be 1.07 dollars", function() {
const dollars = fromEuroToDollar(3.5);
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test('converts 10 dollars to yen', function() {
    let amountInYen = fromDollarToYen(10);
    expect(fromDollarToYen(10)).toBe(1462.6168224299065);
});

test('converts 500 yen to pound', function() {
    let amountInPound = fromYenToPound(500);
    expect(fromYenToPound(500)).toBe(2.7795527156549524); 
});