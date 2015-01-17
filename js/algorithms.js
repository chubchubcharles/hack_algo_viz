function bubbleSort()
{
    var swapped;
    var rects = d3.selectAll("rect");
//    do{
      for (var i=0; i < rects[0].length; i++) {
//            rectangles.transition().style("fill", "red");
//            rectangles.attr("width", function(d) { return d});
//            console.log("i = " + i + " d = " + d);
        var x_pos_1 = d3.select(rects[0][i]).attr("x");
        var x_pos_2 = d3.select(rects[0][i+1]).attr("x");
            if (array[i] > array[i+1]) {
                //highlight both rectangle "i", "i+1"
                d3.select(rects[0][i]).transition().attr("x", x_pos_2).duration(1000).delay(i*1000);
                d3.select(rects[0][i+1]).transition().attr("x", x_pos_1).duration(1000).delay(i*1000);   
//                var temp = array[i];
//                array[i] = array[i+1];
//                array[i+1] = temp;
//                swapped = true;
                //show swapped motion between "i" and "i+1"
//                rectangles.transition().style("fill", "blue");
            }
        }
//    }while (swapped);
    
//    for (var i = 0 ; i < rects[0].length ; i++){
//        var x_pos_1 = d3.select(rects[0][i]).attr("x");
//        var x_pos_2 = d3.select(rects[0][i+1]).attr("x");
//        if (rects[0][i].__data__ > rects[0][i+1].__data__){
//          d3.select(rects[0][i]).transition().attr("x", x_pos_2).duration(1000).delay(i*1000);
//          d3.select(rects[0][i+1]).transition().attr("x", x_pos_1).duration(1000).delay(i*1000);   
//        }
//      d3.select(rects[0][i]).transition().style("fill", "red").duration(1000).delay(.5*i*1000);  
//    } 
//     d3.select("rect", function(d,i) { return i;}).transition().style("fill", "red").duration(1000).delay(3);
         
//    d3.selectAll("rect").select(i).transition().style("fill", "red").duration(1000).delay(3);
//    var swapped;
//    do {
//        swapped = false;
//        for (var i=0; i < array.length-1; i++) {
////            rectangles.transition().style("fill", "red");
////            rectangles.attr("width", function(d) { return d});
////            console.log("i = " + i + " d = " + d);
//            if (array[i] > array[i+1]) {
//                //highlight both rectangle "i", "i+1"
//                var temp = array[i];
//                array[i] = array[i+1];
//                array[i+1] = temp;
//                swapped = true;
//                //show swapped motion between "i" and "i+1"
////                rectangles.transition().style("fill", "blue");
//            }
//        }
//    } while (swapped);
}
 
//bubbleSort(array);
//console.log(array);