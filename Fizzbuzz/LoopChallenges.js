function odds () {
    for (var i=1; i<20; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

odds ();

function sequence () {
    for (var i = 4; i > -4; i = i - 1.5) {
        console.log(i);
    }
}

sequence ();

function sigma () {
    var sum = 0;
    for (var i = 1; i < 101; i++) {
        sum = sum + i;
    }
    console.log(sum);
}

sigma();

function factorial () {
    var product = 1;
    var n = 2;

    while(product < 1e8) {
        product *= n;
        console.log("n " + n + ", prod: " + product);
        n++;
      }      
}

factorial();