$(function() {
    let base = {
        common: {},
        init: function() {
            this.initEvent();
        },
        initEvent: function() {
            $(document).on("click", ".person-wallet-recharge ul li", function() {
                $(this).addClass("active").siblings().removeClass("active");
                $(this).children(".sel").show().parent().siblings().children(".sel").hide();
                // $(".person-wallet-recharge ul li div.sel:eq(" + index + ")").show().siblings().hide();
            });
            $(document).on("click", ".person-wallet-button button", function() {
                //信息框
                layer.open({
                    style:'text-align:left',
                    content: '<div class="layer-content"><div class="layer-text">游戏ID：</div><div class="layer-input"><input type="text" value placeholder="请输入游戏ID"/></div></div>',
                    btn: '确定'
                });
            });
        }
    };
    base.init();
})