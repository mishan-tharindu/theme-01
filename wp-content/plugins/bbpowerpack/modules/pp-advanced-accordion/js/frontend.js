(function($) {

	PPAccordion = function( settings )
	{
		this.id 		= settings.id;
		this.settings 	= settings;
		this.nodeClass  = '.fl-node-' + settings.id;
		this.accordion	= $( this.nodeClass ).find( '.pp-accordion' ).first();
		this.clicked 	= false;
		this.nestedToggle = false;
		this._init();
	};

	PPAccordion.prototype = {

		settings	: {},
		nodeClass   : '',
		clicked		: false,

		_init: function()
		{
			if ( this.accordion.hasClass( '.pp-accordion-initialized' ) ) {
				return;
			}

			var button = this.accordion.find( '> .pp-accordion-item > .pp-accordion-button' );

			//button.css('height', button.outerHeight() + 'px');
			button.off('click').on('click', $.proxy( this._buttonClick, this ) );
			button.on('mouseup', $.proxy( this._mouseEvent, this ) );

			this._openDefaultItem();

			this._hashChange();

			$(window).on('hashchange', $.proxy( this._hashChange, this ));
			this.accordion.addClass('pp-accordion-initialized');
		},

		_hashChange: function()
		{
			var scrollPos = $(window).scrollTop();
			$(window).on('scroll', function() {
				scrollPos = $(window).scrollTop();
			});
			if( location.hash && $(location.hash).length > 0 ) {
				var self = this;
				var element = $(location.hash + '.pp-accordion-item');
				if ( element && element.length > 0 ) {
					$('html, body').animate({
						scrollTop: element.offset().top - 120
					}, 0, function() {
						location.href = '#';
						// Fix scroll after hash change.
						window.scrollTo(0, scrollPos);
						// Open accordion item.
						if ( ! element.hasClass('pp-accordion-item-active') ) {
							element.find('> .pp-accordion-button').trigger('click');
						}
						// Nested accordion logic.
						var parentModules = element.parents('.fl-module');
						var elementNodeId = element.closest('.fl-module').data('node');
						parentModules.each(function() {
							if ( $(this).data('node') !== elementNodeId ) {
								var parentNodeId = $(this).data('node');
								if ( 'undefined' !== typeof window['pp_accordion_' + parentNodeId] ) {
									var parentItem = $(this).find('.fl-node-' + elementNodeId).parents('.pp-accordion-item');
									if ( ! parentItem.hasClass('pp-accordion-item-active') ) {
										parentItem.find('> .pp-accordion-button').trigger('click');
										self.nestedToggle = true;
										setTimeout(function() {
											window.scrollTo(0, element.offset().top - 120);
										}, 800);
									}
								}
							}
						});
					});
				}
			}
		},

		_mouseEvent: function() {
			this.clicked = true;
		},

		_buttonClick: function( e )
		{
			e.preventDefault();
			e.stopPropagation();

			var button      = $( e.target ).closest('.pp-accordion-button'),
				accordion   = button.closest('.pp-accordion'),
				item	    = button.closest('.pp-accordion-item'),
				allContent  = accordion.find('> .pp-accordion-item > .pp-accordion-content'),
				content     = button.siblings('.pp-accordion-content'),
				self		= this;

			if(accordion.hasClass('pp-accordion-collapse')) {
				accordion.find( '> .pp-accordion-item-active' ).removeClass( 'pp-accordion-item-active' );
				allContent.slideUp('normal');
			}

			if(content.is(':hidden')) {
				item.addClass( 'pp-accordion-item-active' );
				content.slideDown('normal', function() {
					self._slideDownComplete(this);
				});
			}
			else {
				item.removeClass( 'pp-accordion-item-active' );
				content.slideUp('normal', function() {
					self._slideUpComplete(this);
				});
			}
		},

		_slideUpComplete: function(target)
		{
			var content 	= $( target ),
				accordion 	= content.closest( '.pp-accordion' );

			accordion.trigger( 'fl-builder.pp-accordion-toggle-complete' );
		},

		_slideDownComplete: function(target)
		{
			var content 	= $( target ),
				accordion 	= content.closest( '.pp-accordion' ),
				item 		= content.parent(),
				win  		= $( window );

			// Gallery module support.
			FLBuilderLayout.refreshGalleries( content );

			// Content Grid module support.
			if ( 'undefined' !== typeof $.fn.isotope ) {
				var highestBox = 0;
				var contentHeight = 0;

	            content.find('.pp-equal-height .pp-content-post').css('height', '').each(function(){
	                if($(this).height() > highestBox) {
	                	highestBox = $(this).height();
	                	contentHeight = $(this).find('.pp-content-post-data').outerHeight();
	                }
	            });

				content.find('.pp-equal-height .pp-content-post').height(highestBox);
				content.find('.pp-content-post-grid').isotope('layout');
			}

			if ( ! this.nestedToggle ) {
				if ( item.offset().top < win.scrollTop() + 100 ) {
					if ( ! this.clicked || this.settings.scrollAnimation ) {
						$( 'html, body' ).animate({
							scrollTop: item.offset().top - 100
						}, 500, 'swing');
					}
				}
			}

			this.clicked = false;
			this.nestedToggle = false;

			accordion.trigger( 'fl-builder.pp-accordion-toggle-complete' );
			$(document).trigger( 'pp-accordion-toggle-complete', [ accordion ] );
		},

		_openDefaultItem: function()
		{
			if ( this.settings.responsiveCollapse && window.innerWidth <= 768 ) {
				return;
			}

			if(typeof this.settings.defaultItem !== 'undefined') {
				var item = $.isNumeric(this.settings.defaultItem) ? (this.settings.defaultItem - 1) : null;

				if(item !== null) {
					this.clicked = true;
					this.accordion.find( '> .pp-accordion-item > .pp-accordion-button' ).eq(item).trigger('click');
				}
			}
		}
	};

})(jQuery);
