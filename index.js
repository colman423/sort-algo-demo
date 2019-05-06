var length = 4000;
var data = generateArray(1, length);
var eleArr = [];

$('#refresh').click(function() {
    remove(path);
    append(data);
});

$('#shuffle').click(function() {
    shuffle(data)
    remove(path);
    append(data);
});

if (window.Worker) {
    // var svg;
    
    $('#bubble').click(function() {
        $('#refresh').trigger('click');
        var d = data.slice(0);
        myWorker.postMessage({
            'algo': "BUBBLE",
            'data': d,
            'dataLength': length
        });
        doSwap();

    })
    $('#heap').click(function() {
        $('#refresh').trigger('click');
        var d = data.slice(0);
        heap(d);
    })
    $('#merge').click(function() {
        $('#refresh').trigger('click');
        var d = data.slice(0);
        mergeSort(d);
    })
    $('#quick').click(function() {
        $('#refresh').trigger('click');
        var d = data.slice(0);
        quickSort(d);
    })
    
    initChart();
    shuffle(data);
    // data = [10, 9, 7, 8, 3, 6, 4, 5, 2, 1];
    var path = append(data);
    
    const myWorker = new Worker("sort.js");
    
    
    myWorker.onmessage = function(e) {
        // console.log("YOY");
        var action = e.data.action;
        if( action=="SWAP" ) {
            swapData.push({
                'i': e.data.i,
                'j': e.data.j
            });
            // swap( eleArr, e.data.i, e.data.j );
        }
        else if( action=="ARR" ) {
            var changeData = e.data.changeData;
            for( var i=0; i<changeData.length; i++ ) {
                if( changeData[i].action=="SWAP" ) swap(eleArr, changeData[i].i, changeData[i].j);
            }
        }
    }

    swapData = [];
    function doSwap() {
        console.log("init doSwap");
        setInterval( function() {
            console.log("doSwap");
            var iAndJ = swapData.shift();
            if( iAndJ ) swap( eleArr, iAndJ.i, iAndJ.j);
        });
    }
} 
else {
    console.log('Your browser doesn\'t support web workers.')
}