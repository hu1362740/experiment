$(function() {
    let base = {
        common: {},
        init: function() {
            $(".tab ul li").click(function(){
                let index = $(this).index();
                let number = (index)*25+"%";
                $(this).addClass("active").siblings().removeClass("active");
                $(".tab-table>div:eq("+index+")").addClass("active").siblings().removeClass("active");;
                $(".blue_block").animate({left:number})
           });
            //弹出下拉层
            $(".password-box-title").click(function(){
                if($(".password-box-container").is(":hidden")){
                    $(".password-box-title i.down").hide();
                    $(".password-box-title i.up").show();
                }else{
                    $(".password-box-title i.down").show();
                    $(".password-box-title i.up").hide();
                }
                $(".password-box-container").slideToggle("slow");
            });
            $(".vip-box-title").click(function(){
                if($(".vip-box-container").is(":hidden")){
                    $(".vip-box-title i.down").hide();
                    $(".vip-box-title i.up").show();
                }else{
                    $(".vip-box-title i.down").show();
                    $(".vip-box-title i.up").hide();
                }
                $(".vip-box-container").slideToggle("slow");
            });
            $(".foot>div").click(function(){
                $(this).addClass("active").siblings().removeClass("active");
                });
        }
    };
    base.init();
})