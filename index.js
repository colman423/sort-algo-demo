var length = 400;
var data = generateArray(1, length);
var eleArr = [];
// var svg;

$('#refresh').click(function() {
    remove(path);
    append(data);
})

$('#shuffle').click(function() {
    shuffle(data)
    remove(path);
    append(data);
})

$('#bubble').click(function() {
    $('#refresh').trigger('click');
    var d = data.slice(0);
    bubble(d);
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
