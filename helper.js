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

function swap(eleArr, i, j) {
    // console.log("main swap")

    var tmpEle = eleArr[i];
    eleArr[i] = eleArr[j];
    eleArr[j] = tmpEle;

    var tmpX = eleArr[i].getAttribute('x');
    eleArr[i].setAttribute('x', eleArr[j].getAttribute('x'));
    eleArr[j].setAttribute('x', tmpX);
}

function swap_num(arr, i, j){
    var tmpData = arr[i];
    arr[i] = arr[j];
    arr[j] = tmpData;
}