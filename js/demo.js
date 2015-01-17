var avgs=d3.nest()
	.key(function(d) {return d.continent;})
	.sortkey(d3.ascending)
	.rollup(function(d) {return {
			GERD:d3.mean(function(g) {return +g.GERD;}),
			growth:d3.mean(d,function(g) { return +g.growth})
	}})
	.entries(csv);