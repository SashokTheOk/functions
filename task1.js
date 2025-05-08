function area (length, width) {
    return length * width;
} 
console.log(area(5, 10)); // 50

let area2 = function (length, width) {
    return length * width;
}
console.log(area2(3, 8)); // 50

let area3 = (length, width) => length * width;
console.log(area3(7, 4)); // 24