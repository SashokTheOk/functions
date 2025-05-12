function backCounting(num) {
    console.log(num);
    if (num > 0) {
        backCounting(num - 1);
    }
}
backCounting(5);