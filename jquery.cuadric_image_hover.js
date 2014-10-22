/*
 * jQuery Cuadric Image Hover v1.0
 * http://www.cuadric.com
 *
 * Copyright 2014, Gonzalo Sanchez
 * Free to use under the GPL license.
 * http://www.gnu.org/licenses/gpl.html
 *
 */

(function($){
	$.fn.cuadric_image_hover = function(options) {

	var defaults = {
		duration: 200,
		bgcolor: 'rgba(256,256,256,.7)',
		alpha_filter: 'alpha(opacity=70)',
		alpha_new_filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=70)',
		rgba_filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr=#B2FFFFFF, endColorstr=#B2FFFFFF)'
	};

	var options = $.extend(defaults, options);

    return this.each(function() {

    	$(this).css('position', 'relative');

    	var image = $(this).find('img');

    	if ( ! image.parent().hasClass('img_container') ) {
    		image.wrap('<div class="img_container"></div>')
    	}

    	var img_container = image.parent();

    	img_container.prepend('<div class="hover_element"></div>');

    	var hover_element = img_container.find('.hover_element');

    	hover_element
    		.css('height', '100%')
    		.css('width', '100%')
    		.css('position', 'absolute')
    		.css('left', '0')
    		.css('top', '0')
    		.css('opacity', '0')
    		.css('background-color', options.bgcolor);


		var oldIE;
		if ($('html').is('.ie6, .ie7, .ie8')) {
			oldIE = true;
			hover_element
    			.css('background-image', 'none');
		}

		$(this).hover(
				function () { // mouseenter
					if(!oldIE) {
						hover_element
							.stop()
							.addClass('hover')
							.animate({opacity: 1}, options.duration);
					} else {
							hover_element
							.stop()
							.animate({opacity: .7}, options.duration);
					}
				},
				function () { // mouseleave
					hover_element
						.stop()
						.removeClass('hover')
						.animate({opacity: 0}, options.duration);
				}
		);

    });
 };
})(jQuery);
