function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
function generateArray(low, high) {
    var arr = [],
    c = high - low + 1;
    while ( c-- ) {
        arr[c] = high--;
    }
    return arr;
}

function swap(arr, i ,j) {
    var num1 = arr[i];
    var num2 = arr[j];
    arr[i] = num2;
    arr[j] = num1;
    
    var bar1 = d3.select("rect#d" + num1);
    var x1 = bar1.attr("x");
    var bar2 = d3.select("rect#d" + num2);
    var x2 = bar2.attr("x");
    bar1.attr("x", x2);
    bar2.attr("x", x1);
}
