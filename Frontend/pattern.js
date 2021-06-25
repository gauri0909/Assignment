function pyramidStarPattern(n) {
    /*Printing full Pyramid*/
    for (var i = 0; i < n; i++) {
        var string = '';
        for (var j = 1; j < n - i; j++) {
            string = string + ' ';
        }
        for (var k = 1; k <= (2 * i + 1); k++) {
            string = string + '*';
        }
        console.log(string);
    }
}

/*printing 10 rows*/
pyramidStarPattern(10);