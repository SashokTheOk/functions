function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Cannot divide by zero");
    } else if (isNaN(denominator) || isNaN(numerator)) {
        throw new Error("Cannot divide by NaN");
    } else {
        return (numerator/denominator);
    }
}

try {
    console.log(divide(10, 2)); // 5
}
catch (error) {
    console.error(error.message);
} finally {
    console.log("Execution completed");
};

try {
    console.log(divide("string", 6)); // Error: Cannot divide by zero
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Execution completed");
}
try {
    console.log(divide(55, 0));
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Execution completed");
}