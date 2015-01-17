// We use DOM manipulation to generate our charts. HTML/CSS is just skeleton
//var bodySelection = d3.select("body");
// It's very common to chain attributes together.
// Each svg container can have multiple shapes inside
//var svgSelection = bodySelection.append("svg").attr("width", 250).attr("height", 250);
//var square = svgSelection1.attr("height", 250).append("rect").attr("x", 0).attr("y", 0).attr("height", 250).attr("width",250).style("fill", "rgb(220,255,255)");
//var circle = svgSelection1.append("circle").attr("cx", 0).attr("cy", 0).attr("r", 250).style("fill", "rgb(150,150,255)");
//
//var svgSelection2 = bodySelection.append("svg").attr("width", 250).attr("height", 250);
//var square = svgSelection2.append("rect").attr("x", 0).attr("y", 0).attr("height", 250).attr("width",250).style("fill", "rgb(220,255,255)");
//var circle = svgSelection2.append("circle").attr("cx", 250).attr("cy", 0).attr("r", 250).style("fill", "rgb(150,150,255)");
//
//var svgSelection3 = bodySelection.append("svg").attr("width", 250).attr("height", 250);
//var square = svgSelection3.append("rect").attr("x", 0).attr("y", 0).attr("height", 250).attr("width",250).style("fill", "rgb(220,255,255)");
//var circle = svgSelection3.append("circle").attr("cx", 0).attr("cy", 0).attr("r", 250).style("fill", "rgb(150,150,255)");
//
//var svgSelection4 = bodySelection.append("svg").attr("width", 250).attr("height", 250);
//var square = svgSelection4.append("rect").attr("x", 0).attr("y", 0).attr("height", 250).attr("width",250).style("fill", "rgb(220,255,255)");
//var circle = svgSelection4.append("circle").attr("cx", 250).attr("cy", 0).attr("r", 250).style("fill", "rgb(150,150,255)");
//
//var svgSelection5 = bodySelection.append("svg").attr("width", 250).attr("height", 250);
//var square = svgSelection5.append("rect").attr("x", 0).attr("y", 0).attr("height", 250).attr("width",250).style("fill", "rgb(220,255,255)");
//var circle = svgSelection5.append("circle").attr("cx", 0).attr("cy", 0).attr("r", 250).style("fill", "rgb(150,150,255)");

// d3.js join elements (read online) will allow us to set DOM elements and then use function calls to display it
//var theData = [1,2,3];
//var p = d3.select("body").selectAll("p").data(theData).enter().append("p").text(function (d) { return d;}) ;
// d3.js gives us "i" and "this" variable. "i" is the index of the DOM element. we can use the index for alternate formatting.
//var p = d3.select("body").selectAll("p").data(theData).enter().append("p").text(function (d,i) { return "i = " + i + " d = " + d;}) ;

// BASIC
//var bodySelection = d3.select("body");
//var svgSelection = bodySelection.append("svg").attr("width", 50).attr("height", 50);
//var circleSelection = svgSelection.append("circle").attr("cx",25).attr("cy",25).attr("r",25).style("fill","purple");

// CREATING ATTR CIRCLES
// creates three new circles under svg tags
//var circleRadii = [40,20,10];
//var svgContainer = d3.select("body").append("svg").attr("width", 200).attr("height", 200);
//var circles = svgContainer.selectAll("circle").data(circleRadii).enter().append("circle");
//// assigning attributes based on DOM element data property
//var circleAttributes = circles.attr("cx",50).attr("cy",50).attr("r", function (d) {return d;}).style("fill", function (d) { var returnColor; if (d === 40) { returnColor = "green";} else if (d === 20) {returnColor = "purple";} else if (d === 10) { returnColor = "red";} return returnColor;});

//var spaceCircles = [30, 70, 110];
//var svgContainer = d3.select("body").append("svg").attr("width",200).attr("height",200);
//var circles = svgContainer.selectAll("circle").data(spaceCircles).enter().append("circle");
//// uses d = data = 30 to initiailize cx and cy variables and color attributes
//var circleAttributes = circles.attr("cx", function (d) { return d; }).attr("cy", function (d) { return d; }).attr("r", 20).style("fill", function (d) { var returnColor; if (d === 30) { returnColor = "green";} else if (d === 70) {returnColor = "purple";} else if (d === 110) { returnColor = "red";} return returnColor;});

// USING DATA TYPES: JSON
//var jsonRectangles = [
//    { "x_axis": 10, "y_axis": 70, "height": 20, "width":20, "color" : "green" },
//    { "x_axis": 40, "y_axis": 70, "height": 20, "width":20, "color" : "purple" },
//    { "x_axis": 70, "y_axis": 70, "height": 20, "width":20, "color" : "red" }];
//
//var max_x = 0, max_y = 0;
//for (var i = 0; i < jsonRectangles.length; i++){
//    var temp_x, temp_y;
//    var temp_x = jsonRectangles[i].x_axis + jsonRectangles[i].width;
//    var temp_y = jsonRectangles[i].y_axis + jsonRectangles[i].height;
//    if (temp_x >= max_x) {
//        max_x = temp_x;
//    }
//    if (temp_y >= max_y) {
//        max_y = temp_y;
//    }
//}

var array = [34, 20, 30, 74, 20, 98, 19, 76, 9];

var svgContainer = d3.select("body").append("svg").attr("width", 400).attr("height", 100);
var rectangles = svgContainer.selectAll("rect").data(array).enter().append("rect");
var rectangleAttributes = rectangles.attr("x", function (d,i) { return i*45; }).attr("y", function (d){return 100-d}).attr("height", function(d) { return d;}).attr("width", function(d) { return 40;}).style("fill", "green");

//function moveRight(){
//    var text = svgContainer.selectAll("text").data(jsonRectangles).enter().append("text");
//    var textLabels = text.attr("x", function(d){return d.x_axis;}).attr("y", function(d) { return d.y_axis;}).text(function(d){return "( " + d.x_axis + ", " + d.y_axis + " )"; }).attr("font-family", "sans-serif").attr("font-size", "20px").attr("fill","red");
//    var rectangleAttributes = rectangles.attr("x", function (d) { return d.x_axis+20; }).attr("y", function (d){return d.y_axis}).attr("height", function(d) { return d.height;}).attr("width", function(d) { return d.width;}).style("fill", function (d) { return d.color;});
//};




