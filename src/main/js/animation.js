$(document).ready(function () {
	$.each($(".hex-group .hex").sort(function () {
		return Math.random() * 10 > 5 ? 1 : -1;
	}), function (index, element) {
		var opacity = parseInt($(element).css('opacity'));
		setTimeout(function () {
			var tid = setInterval(function () {
				opacity += 0.02;
				$(element).css('opacity', opacity);
				if (opacity > 1) clearInterval(tid);
			}, 50);
		}, index * 1000);

	});

	$('header a, section#index a, section#index2 a.button').click(function () {
		console.log("test");
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 500);
		return false;
	});
});