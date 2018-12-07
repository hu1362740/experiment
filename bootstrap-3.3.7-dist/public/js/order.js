$(function() {
    let base = {
        common: {
            NOTIFLAG: true
        },
        init: function() {
            this.initEvent();
        },
        //初始化事件
        initEvent: function() {
            $(".row-custom .nav").on('click', function() {
                var index = $(this).index();
                $(this).addClass("active").siblings().removeClass("active");
                $(".main .nav-container:eq(" + index + ")").show().siblings().hide();
            })
            //点击短信通知
            $(".notification-containter").on('click', function() {
                if (base.common.NOTIFLAG == true) {
                    $(".notification-circle").animate({ right: '37px' }, "fast");
                    $(this).css({ background: '#999' });
                    base.common.NOTIFLAG = false;
                } else {
                    $(".notification-circle").animate({ right: '3px' }, "fast");
                    $(this).css({ background: '#45db5e' });
                    base.common.NOTIFLAG = true;
                }
            })
            var textbox = document.getElementById('takeDate')
            textbox.onfocus = function(event) {
                this.type = 'date';
                this.focus();
            }
        }
    };
    base.init();
})