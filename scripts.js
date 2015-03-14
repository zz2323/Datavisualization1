//credit Google
var myVaxisStyle = {
	fontName : 'Arial',
	fontSize : 18,
	color : '#B22222', // The color of the text.
	opacity : 0.8 // The transparency of the text.
};

var myHaxisStyle = {
	
	fontName : 'Arial',
	fontSize : 20,
	color : '#B22222', // The color of the text.
	opacity : 0.8 // The transparency of the text.
};

var titleTextStyle = {
	fontName : 'Arial',
	fontSize : 24,
	color : 'black', // The color of the text.
	opacity : 0.8,// The transparency of the text.
	bold: 'true'
};



// Set chart options
var options = {
	'title' : 'How Popular are these Series Search',
	'width' : 800,
	'height' : 600,
	'hAxis' : {
		'title' : 'Popularity',
		minValue : 0
	}, //end of hAxis object
	'vAxis' : {
		'title' : 'Series'
	},//end of vAxis object
	'legend': { position: "top" }, 
};
//end of option


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
	//changed the name tag to follow the D.R.Y principl
	
	
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
	
	//create the data table

	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Name');
	//add the hAxis
	data.addColumn('number', 'Popularity');
	//add the vAxis
	data.addRows(myPopularSeries);
	
	//reformating our data
		var formatter = new google.visualization.DateFormat({formatType: 'short'});
		
		
		//reformat our data
		formatter.format(data, 0);
		var myGrid = {'color': 'ff0000'}
		var hAxisLabelFormat = 'MM d, y';
		
options.vAxis.format = hAxisLabelFormat;
options.hAxis.textStyle = myHaxisStyle;
options.vAxis.textStyle = myVaxisStyle;
options.titleTextStyle = titleTextStyle;
	

	/*
	 * changed scatter chart into a bar chart
	 */

	var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
	chart.draw(data, options);
}