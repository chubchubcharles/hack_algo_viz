function bubbleSort()
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                //highlight both rectangle "i", "i+1"
                var rectangles = svgContainer.selectAll("rect").attr("stroke", "red");
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
                //show swapped motion between "i" and "i+1"
            }
        }
    } while (swapped);
}
 
bubbleSort(a);
console.log(a);