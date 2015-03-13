
jQuery(function ($) {
	var $splash = $('#splash'),
		$main = $('#main'),
		$window = $(window),
		splashWaitDuration = 1000,
		animateDuration = 3000,
		sessionStorage = window.sessionStorage || {},
		splashShowFlagKey = "sdot-splash-animated";

	function initialize() {
		// ロゴを表示
		$splash.fadeIn(animateDuration).promise()

		// 1秒待つ
		.then(function() {

			// セッションストレージにsplash表示済みフラグを設定
			sessionStorage[splashShowFlagKey] = "1";

			return $.Deferred(function(deferred) {
				setTimeout(function() {
					deferred.resolve();
				}, splashWaitDuration);
			})
		})

		// ロゴを非表示
		.then(function() {
			return $splash.fadeOut(animateDuration);
		})

		// コンテンツを表示
		.then(function() {
			return $main.fadeIn(animateDuration);
		})
	}

	if (sessionStorage[splashShowFlagKey]) {
		$main.show();
	} else {
		initialize();
	}
});
