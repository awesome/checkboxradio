/*
 * checkbox plugin
 *
 * Copyright (c) 2013 Filament Group, Inc.
 * Licensed under MIT
 */

(function( CheckboxRadio, $, w ) {

	var pluginName = "checkbox",
		initSelector = "input[type=checkbox], input[type=radio]";

	$.fn[ pluginName ] = function(){
		return this.each(function(idx, element){
			var cbr = new CheckboxRadio( element );

			// Append check icons to `.label-text` elements
			if ( !cbr.isRadio ) {
				cbr.applyCheckIcons();
			}

			cbr.$element.bind( "change init", function(){
				cbr.toggleCheck();
			});

			cbr.parent.bind( "click", function(){
				cbr.change();
			});

			// radio button picker - only the checked option is shown; when clicked, it displays the rest of the list
			if( cbr.hasPicker && cbr.hasPicker() ){
				cbr.initPicker();
			}

			// set default state
			cbr.$element.trigger( "init" );
		});
	};

	// auto-init on enhance (which is called on domready)
	$( document ).bind( "enhance", function( e ){
		$( initSelector, e.target )[ pluginName ]();
	});

}( CheckboxRadio, jQuery, this ));


