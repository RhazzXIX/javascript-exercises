const fibonacci = function(num) {
    let fibo = 0,
        first = 0;
        second = 1;
        if(num < 0) {
            return 'OOPS'
        } else { 
            let i = 1
            do {fibo = first + second;
                first = second;
                second = fibo;
                i++;
            } while (i < num);
            // for(i = 1; i < num; i++) {
            //     fibo = first + second;
            //     first = second;
            //     second = fibo;
            // };
        };

    return fibo;
};

// Do not edit below this line
module.exports = fibonacci;
