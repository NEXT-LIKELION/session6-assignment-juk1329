const numbers = [3, 7, 2, 9, 12, 6, 15, 8, 4];

const Even = numbers.filter(function (num) {
    return num % 2 === 0;
});

const Squared = Even.map(function (num) {
    return num * num;
});

const Sum = Squared.reduce(function (sum, current) {
    return sum + current;
}, 0);

console.log(Even);
console.log(Squared);
console.log(Sum);
