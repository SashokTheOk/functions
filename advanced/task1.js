function handleNum (number, odd, even) {
    if (number % 2 === 0) {
        even(number);
    } else {
        odd(number);
    }
}
function even (number) {
    console.log(`${number} is even`);
}   
function odd (number) {
    console.log(`${number} is odd`);
}
handleNum(20, odd, even);