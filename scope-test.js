var a = 1, b = 2, c = 3;
console.log("above a: "+a+", b: "+b+", c: "+c);

(function firstFunction(){
        var b = 5, c = 6;
        console.log("first above a: "+a+", b: "+b+", c: "+c);

    (function secondFunction(){
            var b = 8;
            console.log("second a: "+a+", b: "+b+", c: "+c);

        (function thirdFunction(){
                var a = 7, c = 9;
                console.log("third a: "+a+", b: "+b+", c: "+c);

            (function fourthFunction(){
                    var a = 1, c = 8;
                    console.log("fourth a: "+a+", b: "+b+", c: "+c);
            })();
        })();
    })();

    console.log("first below a: "+a+", b: "+b+", c: "+c);
})();

console.log("below a: "+a+", b: "+b+", c: "+c);