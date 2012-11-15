// *****************************************************************************
// Prerequisites:
// 	- jQuery
//	- Google Chart API
//
// Last Modified:
//	- Nov. 14, 2012
// *****************************************************************************

$.VizFactory = (function(data, vizType) {
	var viz;
	
	switch(vizType) {
		case "PieChart":
			viz = $.PieChart(data);
			break;
		
		case "ScatterChart":
			viz = $.ScatterChart(data);
			break;
	}
	
	viz.init();
	
	return viz;
});


// *****************************************************************************
// Pie chart
// *****************************************************************************

$.PieChart = (function(data) {
	var chart = {
		data: data,
		dataTable: null,
		options: {}
	};
	
	var originalData = data;
	
	// Public methods ----------------------------------------------------------
	
	chart.init = function() {
		var h = makeHeaders(chart.data);
		var d = makeData(chart.data);
		chart.dataTable = makeDataTable(h, d);
	};
	
	// Recalculates information
	chart.repaint = function(data) {
		var h = makeHeaders(data);
		var d = makeData(data);
		chart.dataTable = makeDataTable(h, d);
		chart.data = data;
	};
	
	
	// Private methods ---------------------------------------------------------
	
	// Create the headers of the pie chart
	var makeHeaders = function(data) {
		var headers = new Array();
		$.each(data.headers, function(index, value) {
			headers.push(value.title);
		});
		
		return headers;
	};
	
	// Data and slices
	var makeData = function(data) {
		var datas = new Array();
		$.each(data.values, function(index, value) {
			var temp = new Array();
			temp.push(value.title);
			temp.push(value.data[0]);
			
			datas.push(temp);
		});
		
		return datas;
	};
	
	var makeDataTable = function(headers, datas) {
		var table = new Array();
		table.push(headers);
		table = table.concat(datas);
		
		return table;
	};
	
	return chart;
});


// *****************************************************************************
// Scatter Chart
// *****************************************************************************

$.ScatterChart = (function(data) {
	var chart = {
		data: data,
		dataTable: null,
		options: {}
	};
	
	var originalData = data;
	
	// Public methods ----------------------------------------------------------
	
	chart.init = function() {
		var h = makeHeaders(chart.data);
		var d = makeData(chart.data);
		chart.dataTable = makeDataTable(h, d);
	};
	
	// Recalculates information
	chart.repaint = function(data) {
		var h = makeHeaders(data);
		var d = makeData(data);
		chart.dataTable = makeDataTable(h, d);
		chart.data = data;
	};
	
	
	// Private methods ---------------------------------------------------------
	
	// Create the headers of the pie chart
	var makeHeaders = function(data) {
		var headers = new Array();
		$.each(data.headers, function(index, value) {
			headers.push(value.title);
		});
		
		return headers;
	};
	
	// Data and slices
	var makeData = function(data) {
		var datas = new Array();
		$.each(data.values, function(index, value) {
			var temp = new Array();
			temp.push(value.data[0]);
			temp.push(value.data[1]);
			
			datas.push(temp);
		});
		
		return datas;
	};
	
	var makeDataTable = function(headers, datas) {
		var table = new Array();
		table.push(headers);
		table = table.concat(datas);
		
		return table;
	};
	
	return chart;
});