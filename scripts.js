//credit Google

var myTextStyle = {
      fontName: 'Times-Roman',
      fontSize: 18,
      bold: true,
      italic: true,
      color: '#871b47',     // The color of the text.
      auraColor: '#d799ae', // The color of the text outline.
      opacity: 0.8          // The transparency of the text.
   };




//Load the Google visualization API and the scatter chart package
google.load("visualization", "1", {
	packages : ["corechart"]
});


/*
 * area for my Google Viz Style objects: fonts, color
 * 
 */



google.setOnLoadCallback(drawChart);
function drawChart() {

	var myPopularSeries = [];
	//an empty array to put all the data

	var myObs = AllMyData.tags;
	//changed the name tag to follow the D.R.Y principle

	/*
	 * A for loop to get the name and popularity from AllMyData
	 *
	 */
	for (var i = 0; i < myObs.length; i++) {

		var namesAndPopulartiy = [];
		namesAndPopulartiy.push(myObs[i].name);
		namesAndPopulartiy.push(myObs[i].popularity);
		//the string is already in digit, so I don't need the Number function to convert.
		myPopularSeries.push(namesAndPopulartiy);
	}

	console.log(myPopularSeries);

	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Name');
	//add the hAxis
	data.addColumn('number', 'Popularity');
	//add the vAxis
	data.addRows(myPopularSeries);

	// Set chart options
	var options = {
		
		
	annotations: {
    textStyle: {
      fontName: 'Times-Roman',
      fontSize: 18,
      bold: true,
      italic: true,
      color: '#871b47',     // The color of the text.
      auraColor: '#d799ae', // The color of the text outline.
      opacity: 0.8          // The transparency of the text.
    }
  }
};


		title : 'How Popular are these Series Search',
		hAxis : {
			title : 'Popularity',
			minValue : 0,
			maxValue : 100, //setting the MaxValue to 100
		},
		vAxis : {
			title : 'Series'
		},
		legend : 'top' //putting the legend on top
	};
	/*
	 * changed scatter chart into a bar chart
	 */

	var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
	chart.draw(data, options);
}