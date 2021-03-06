( function( $ ) {

	$( window ).load( function() {

		function searchAddClass() {
			$( this ).closest( '.search-form' ).addClass( 'hover' );
		}
		function searchRemoveClass() {
			$( this ).closest( '.search-form' ).removeClass( 'hover' );
		}
		var searchSubmit = $( '.search-submit' );
		searchSubmit.hover( searchAddClass, searchRemoveClass );
		searchSubmit.focusin( searchAddClass );
		searchSubmit.focusout( searchRemoveClass );

	} );

} )( jQuery );

( function() {

	var container, button, form, siteHeaderInner, siteNavigation, div;

	container = document.getElementById( 'search-header' );
	if ( ! container ) {
		return;
	}

	button = container.getElementsByTagName( 'button' )[0];
	if ( 'undefined' === typeof button ) {
		return;
	}

	form = container.getElementsByTagName( 'form' )[0];
	if ( 'undefined' === typeof form ) {
		button.style.display = 'none';
		return;
	}
	form.setAttribute( 'aria-expanded', 'false' );

	button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'toggled' ) ) {
			document.body.className = document.body.className.replace( ' search-toggled', '' );
			container.className = container.className.replace( ' toggled', '' );
			button.setAttribute( 'aria-expanded', 'false' );
			form.setAttribute( 'aria-expanded', 'false' );
		} else {
			document.body.className += ' search-toggled';
			container.className += ' toggled';
			button.setAttribute( 'aria-expanded', 'true' );
			form.setAttribute( 'aria-expanded', 'true' );
		}
	};

} )();
