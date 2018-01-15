$(function () {
	$(".dialog-header .dialog-header-icon").on('click', function () {
		$(".dialog-wrapper").fadeOut();
		$(".dialog").animate({height:'hide'});
	});
	$(".row-illustrate").on('click', function () {
		let height = $(".dialog").height();
		$(".dialog-wrapper").fadeIn();
		$(".dialog").animate({height:'show'});
		// $(".dialog").show();
	});
})