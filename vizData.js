var dataVariables = ["pieData", "scatterData", "lineData", "tableData"];

var pieData = {
	"headers": [
		{
			"type": null, 
			"title": "Task"
		},
		{
			"type": null, 
			"title": "Hours per Day"
		}
	],
	
	"values": [
		{
			"title": "Work", 
			"data":[
				11
			]
		},
		{
			"title": "Eat", 
			"data":[
				2
			]
		},
		{
			"title": "Commute", 
			"data":[
				2
			]
		},
		{
			"title": "Watch TV", 
			"data":[
				2
			]
		},
		{
			"title": "Sleep", 
			"data":[
				7
			]
		}
	]
};


var scatterData = {
	"headers": [
		{
			"type": null, 
			"title": "Age"
		},
		{
			"type": null, 
			"title": "Weight"
		}
	],
	
	"values": [
		{
			"title": null, 
			"data":[
				8, 12
			]
		},
		{
			"title": null, 
			"data":[
				4, 5.5
			]
		},
		{
			"title": null, 
			"data":[
				11, 14
			]
		},
		{
			"title": null, 
			"data":[
				4, 5
			]
		},
		{
			"title": null, 
			"data":[
				3, 3.5
			]
		},
		{
			"title": null, 
			"data":[
				6.5, 7
			]
		}
	]
};

var lineData = {
	"headers": [
		{
			"type": null, 
			"title": "Year"
		},
		{
			"type": null, 
			"title": "Sales"
		},
		{
			"type": null, 
			"title": "Expenses"
		}
	],
	
	"values": [
		{
			"title": null, 
			"data":[
				'2004', 1000, 400
			]
		},
		{
			"title": null, 
			"data":[
				'2005', 1170, 460
			]
		},
		{
			"title": null, 
			"data":[
				'2006', 660, 1120
			]
		},
		{
			"title": null, 
			"data":[
				'2007', 1030, 540
			]
		}
	]
};


var tableData = {
	"headers": [
		{
			"type": "string", 
			"title": "Name"
		},
		{
			"type": "number", 
			"title": "Salary"
		},
		{
			"type": "boolean",
			"title": "Full Time Employee"
		}
	],
	
	"values": [
		{
			"title": null, 
			"data":[
				"Mike", { v: 10000, f: "$10,000" }, true 
			]
		},
		{
			"title": null, 
			"data":[
				"Jim",   { v:8000,   f: "$8,000" },  false
			]
		},
		{
			"title": null, 
			"data":[
				"Alice", { v: 12500, f: "$12,500" }, true
			]
		},
		{
			"title": null, 
			"data":[
				"Bob",   { v: 7000,  f: "$7,000"},  true
			]
		}
	]
};