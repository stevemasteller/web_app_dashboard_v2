"use strict";

$(function(){
	var $filterSelect = $('#filter-select');
	var $filterDesktopApp = $('#filter-desktop-app');
	var $container = $('#searchable-container');
	var $search = $('#search');
	
	/****************************************
	* MixItUp for job Widgets
	****************************************/
	$container.mixItUp({
		load: {
			filter: '.about'
		}
	});
	
	$filterSelect.on('change', function() {
		$container.mixItUp('filter', this.value);
	});
	
	$filterDesktopApp.on('change', function() {
		$container.mixItUp('filter', this.value);
	});
	
	$search.on('keyup change', function() {
		var val = $(this).val();
		var state = $container.mixItUp('getState');
		var $filtered = state.$targets.filter(function(index, element) {
				return $(this).text().toString().indexOf( val.trim() ) >= 0;
			});
			
		$container.mixItUp('filter', $filtered);
	});
	
	/****************************************
	* Nested Selector
	****************************************/
	// observe selected
	$filterSelect.on('change', function() {
		
		// reference the selected option
		var selected_option = $(this).val();
		
		// replace search with new menu
		if (selected_option == '.desk') {
			$search.hide();
			$filterDesktopApp.show();
		} else {
			$filterDesktopApp.hide();
			$search.show();
		}
	});
});
	
