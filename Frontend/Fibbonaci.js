var fibonacci = function (n) {
    if (n === 1) {
        return [0, 1];
    }
    else {
        var sum = fibonacci(n - 1);
        sum.push(sum[sum.length - 1] + sum[sum.length - 2]);
        return sum;
    }
};

/*For first 15 terms*/
console.log(fibonacci(15));