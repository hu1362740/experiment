$(function() {
    let base = {
        common: {},
        init: function() {
            $(".dialog-header .dialog-header-icon").on('click', function() {
                $(".dialog-wrapper").fadeOut();
                $(".dialog").animate({ height: 'hide' });
            });
            $(".row-illustrate").on('click', function() {
                let height = $(".dialog").height();
                $(".dialog-wrapper").fadeIn();
                $(".dialog").animate({ height: 'show' });
            });
            $(".plus").on('click', function() {
            	let number = parseInt($(".dialog-firut-amount .number").val());
            	number = number +1;
            	$(".dialog-firut-amount .number").val(number);
            });
            $(".minus").on('click', function() {
            	let number = parseInt($(".dialog-firut-amount .number").val());
            	if(number<=0){
            		return;
            	}
            	number = number -1;
            	$(".dialog-firut-amount .number").val(number);
            });
            $(".dialog-firut-button button").on('click', function() {
            	$(this).addClass("active").siblings().removeClass("active");
            })
        }
    };
    base.init();
})