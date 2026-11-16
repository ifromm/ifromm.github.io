/*
 * Light/dark theme handling.
 *
 * Load this synchronously in <head> (right after ingo.css) so the theme is set
 * before the first paint. On load the page follows the system preference
 * (prefers-color-scheme). The toggle button (.theme-toggle, in banner.html)
 * overrides it; that choice is kept in sessionStorage so it survives
 * navigating between pages, but a new visit follows the system again.
 */
(function () {
	var KEY = 'theme-override';
	var root = document.documentElement;
	var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

	function getOverride() {
		try {
			return sessionStorage.getItem(KEY);
		} catch (e) {
			return null;
		}
	}

	function setOverride(theme) {
		try {
			sessionStorage.setItem(KEY, theme);
		} catch (e) {
			/* storage unavailable: toggle still works for this page */
		}
	}

	function systemTheme() {
		return mq && mq.matches ? 'dark' : 'light';
	}

	function apply(theme) {
		root.setAttribute('data-theme', theme);
	}

	apply(getOverride() || systemTheme());

	// Follow live system changes unless the visitor has picked a theme.
	if (mq) {
		var onSystemChange = function () {
			if (!getOverride()) {
				apply(systemTheme());
			}
		};
		if (mq.addEventListener) {
			mq.addEventListener('change', onSystemChange);
		} else if (mq.addListener) {
			mq.addListener(onSystemChange);
		}
	}

	// Delegated, because the banner (with the button) is injected via fetch().
	document.addEventListener('click', function (event) {
		var button = event.target.closest && event.target.closest('.theme-toggle');
		if (!button) {
			return;
		}
		var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
		setOverride(next);
		apply(next);
	});
})();
