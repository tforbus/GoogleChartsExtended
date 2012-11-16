$(function() {
	$(document).tooltip();
	
	// Increment the view Ids
	function incrementView() {
		var count = 0;
		return function() { count++; return count; }
	}
	var viewCounter = incrementView();
	
		
	$("#create").click(function() {
		var varName = $("select[name=variable]").find(":selected").text();
		newView(varName);
	});
	
	function newView(varName) {
		var id = "view" + viewCounter();
		var $view = $("<div class='view' id='" + id + "' />");
		var $vLeft = $("<div class='left' />");
		var $vRight =$("<div class='right' />");
		var $vTitle = $("<div class='header ui-widget-header' />");
		
		$vLeft.append($("<span class='ui-icon ui-icon-arrow-4' title='Drag the view around' />"));	
		$vRight.append($("<span class='ui-icon ui-icon-closethick' title='Delete this view' />"));
		
		$vTitle.append($vLeft);
		$vTitle.append($vRight);
		
		$view.append($vTitle);
		$("#vizArea").append($view);
		
		// doin' some jquery awww yeaaa
		$view.draggable({grid:[10,10], containment: "parent"})
				.resizable({grid:10, helper: "ui-resizable-helper"});
				
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
});