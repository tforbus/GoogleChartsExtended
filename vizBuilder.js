$(function() {
	$(document).tooltip();
	init();
	
	function init() {
		for(var i = 0; i < dataVariables.length; i++) {
			var $opt = $("<option>").text(dataVariables[i]);
			$("select[name=variable]").append($opt);
		}
	}
	
	// Increment the view Ids
	function incrementView() {
		var count = 0;
		return function() { count++; return count; }
	}
	var viewCounter = incrementView();
	
		
	$("#create").click(function() {
		var varName = $("select[name=variable]").find(":selected").text();
		var viewName = $("select[name=type]").find(":selected").val();
		
		newView(varName, viewName);
	});
	
	
	function newView(varName, viewName) {
		var id = "view" + viewCounter();
		var vId = id + "view";
		
		var $view = $("<div class='view' id='" + id + "' />");
		var $vLeft = $("<div class='left' />");
		var $vRight =$("<div class='right' />");
		var $vTitle = $("<div class='header ui-widget-header' />");
		var $googleView = $("<div id='" + vId + "' />");
		
		$vLeft.append($("<span class='ui-icon ui-icon-arrow-4' title='Drag the view around' />"));	
		$vRight.append($("<span class='ui-icon ui-icon-closethick' title='Delete this view' />"));
		
		$vTitle.append($vLeft);
		$vTitle.append($vRight);
		
		$view.append($vTitle);
		$view.append($googleView);
		
		$("#vizArea").append($view);
		drawGoogleView(vId, varName, viewName);
		
		// doin' some jquery awww yeaaa
		$view.draggable({grid:[10,10], containment: "parent"})
				.resizable({
					grid:10, 
					helper: "ui-resizable-helper",
					stop: function(e, ui) {
						drawGoogleView(vId, varName, viewName);
					}
					});
				
		$vLeft.find(".ui-icon-gear").click(function() {
			$view.flip({
				direction: 'tb',
				content: 'what'
			});
		});
		
		$vRight.find(".ui-icon-closethick").click(function() {
			$(this).closest(".view").animate({
				opacity: 0
			}, 500, function() { $(this).closest(".view").remove(); });
		});
	}
	
	
	function drawGoogleView(vId, dataVar, viewVar) {
		console.log("drawing with id " + vId);
		v = $.VizFactory(eval(dataVar), viewVar, vId);
		v.googleChart.draw(v.googleData, null);
	}
});