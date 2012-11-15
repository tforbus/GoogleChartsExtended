// *****************************************************************************
// Prerequisites:
// 	- jQuery
//	- Google Chart API
//
// Last Modified:
//	- Nov. 14, 2012
// *****************************************************************************

$.VizFactory = (function(data, vizType, eId) {
	var viz;
	switch(vizType) {
		case "PieChart":
			viz = $.PieChart(data, vizType, eId);
			break;
		
		case "ScatterChart":
			viz = $.ScatterChart(data, vizType, eId);
			break;
			
		case "Table":
			viz = $.Table(data);
			break;
	}
	
	viz.type = vizType;
	viz.init();
	
	return viz;
});


// *****************************************************************************
// Pie chart
// *****************************************************************************

$.PieChart = (function(data, type, eId) {
	var chart = {
		data: data,
		dataTable: null,
		type: type,
		googleData: null,
		googleChart: null,
		options: {}
	};
	
	var originalData = data;
	
	// Public methods ----------------------------------------------------------
	
	chart.init = function() {
		var h = makeHeaders(chart.data);
		var d = makeData(chart.data);
		chart.dataTable = makeDataTable(h, d);
		
		googleSetup();
	};
	
	// Recalculates information
	chart.repaint = function(data) {
		var h = makeHeaders(data);
		var d = makeData(data);
		chart.dataTable = makeDataTable(h, d);
		chart.data = data;
		
		googleSetup();
	};
	
	
	// Private methods ---------------------------------------------------------
	
	var googleSetup = function() {
		chart.googleData = google.visualization.arrayToDataTable(chart.dataTable);
		chart.googleChart = new google.visualization.PieChart(document.getElementById(eId));
	};
	
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

$.ScatterChart = (function(data, type, eId) {
	var chart = {
		data: data,
		dataTable: null,
		type: type,
		googleData: null,
		googleChart: null,
		options: {}
	};
	
	var originalData = data;
	
	// Public methods ----------------------------------------------------------
	
	chart.init = function() {
		var h = makeHeaders(chart.data);
		var d = makeData(chart.data);
		chart.dataTable = makeDataTable(h, d);
		
		googleSetup();
	};
	
	// Recalculates information
	chart.repaint = function(data) {
		var h = makeHeaders(data);
		var d = makeData(data);
		chart.dataTable = makeDataTable(h, d);
		chart.data = data;
		
		googleSetup();
	};
	
	
	// Private methods ---------------------------------------------------------
	
	var googleSetup = function() {
		chart.googleData = google.visualization.arrayToDataTable(chart.dataTable);
		chart.googleChart = new google.visualization.ScatterChart(document.getElementById(eId));
	};
	
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


// *****************************************************************************
// Table
// *****************************************************************************

$.Table = (function(data, type) {
	var chart = {
		data: data,
		type: type,
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