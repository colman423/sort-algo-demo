var margin = {top: 40, right: 20, bottom: 30, left: 40},
width = 960 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom;

var x = d3.scaleLinear()
.range([0, width]);
var y = d3.scaleLinear()
.range([height, 0]);

var xAxis = d3.axisBottom(x);
var yAxis = d3.axisLeft(y)

var svg = d3.select("#chart").append("svg")
.attr("width", 1050)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

function initChart() {
    x.domain([0, length]);
    y.domain([0, length]);
    svg.append("g")
    //   .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);
    svg.append("g")
    //   .attr("class", "y axis")
    .call(yAxis) 
}

function append(data) {
    //append new point
    path = svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d, i) { return x(i); })
    // .attr("id", function(d, i) { return "d"+d; })
    .attr("width", width/length)
    .attr("y", function(d, i) { return y(d); })
    .attr("height", function(d) { return height - y(d); })

    eleArr = path._groups[0];
    
    return path;
}

function remove(path) {
    //remove old point
    path.remove();
}


