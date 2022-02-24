/*
  Administro los breakpoints desde js porque no me dejaron usar Bootstrap.
  Breakpoints está licenciado MIT 3.0 - detecta los puntos de quiebre para hacer el contenido responsive
  Browser también está licenciado MIT 3.0 - detecta el navegador para usar los parámetros adecuados, hoy en día podría hacerse de otra manera.
  dropotron también licencia MIT 3.0 - Determina comportamiento desplegable
  Jquery licencia MIT 3.0 - Usaré una versión vieja para soportar el dropotron.
  Util es un script que viene de HTML5Up - útil para administrar el jquery que inserto.
  Main - es este archivo.

  Estos archivos también los uso en SASS - así genero css según navegador

*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ '481px',   '736px'  ],
			mobilep:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			offsetY: -15,
			hoverDelay: 0,
			alignment: 'center'
		});

	// Nav.

		// Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"> Menú </a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);