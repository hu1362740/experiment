$(function() {
    var base = {
        common: {},
        //初始化
        init: function() {
            // $(".tab ul li").click(function() {
            $(document).on('click', '.tab ul li', function() {
                var index = $(this).index();
                var number = (index) * 50 + "%";
                $(this).addClass("active").siblings().removeClass("active");
                $(".tab-table>div:eq(" + index + ")").addClass("active").siblings().removeClass("active");
                $(".blue_block").animate({ left: number });
            });
            //财务tab切换查询
            $(document).on('click', '.finance-tab ul li', function() {
                var index = $(this).index();
                var number = (index) * 33.3 + "%";
                $(this).addClass("active").siblings().removeClass("active");
                $(".tab-table>div:eq(" + index + ")").addClass("active").siblings().removeClass("active");
                $(".finance_block").animate({ left: number });
                $(".tab-table>div:eq(" + index + ")").find(".child-tab ul li:eq(0)").trigger('click');
            });
            //代理商查询切换
            // $(".agent .child-tab ul li").click(function() {
            $(document).on('click', '.agent .child-tab ul li', function() {
                var index = $(this).index();
                var number = (index) * 25 + "%";
                $(this).addClass("active").siblings().removeClass("active");
                $(this).parent().parent().parent().find(".child-tab-table>div:eq(" + index + ")").addClass("active").siblings().removeClass("active");
                $(".agent .child_blue_block").animate({ left: number });
            });
            //玩家查询切换
            $(document).on('click', '.player .child-tab ul li', function() {
                // $(".player .child-tab ul li").click(function() {
                var index = $(this).index();
                var number = (index) * 25 + "%";
                $(this).addClass("active").siblings().removeClass("active");
                $(".player .child-tab-table>div:eq(" + index + ")").addClass("active").siblings().removeClass("active");
                $(".player .child_blue_block").animate({ left: number });
            });
            //弹出下拉层
            $(document).on('click', '.toggle-box-title', function() {
                if ($(this).parent().find(".toggle-box-container").is(":hidden")) {
                    $(this).parent().find(".toggle-box-title i.down").hide();
                    $(this).parent().find(".toggle-box-title i.up").show();
                } else {
                    $(this).parent().find(".toggle-box-title i.down").show();
                    $(this).parent().find(".toggle-box-title i.up").hide();
                }
                $(this).parent().find(".toggle-box-container").slideToggle("slow");
            });
            $(".content1 select").click(function() {

            });
            //代理商周图
            $('#agent-week-chart').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: null
                },
                subtitle: {
                    useHTML: true,
                    text: '本周共开设代理总数：<span style="color:red">66</span>个'
                },
                legend: {
                    enabled: false
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: [
                        '周日',
                        '周一',
                        '周二',
                        '周三',
                        '周四',
                        '周五',
                        '周六'
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: ''
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        borderWidth: 0
                    }
                },
                series: [{
                    data: [23, 21, 22, 17, 18, 25, 31]
                }]
            });
            //代理商月图
            $('#agent-month-chart').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: null
                },
                subtitle: {
                    useHTML: true,
                    text: '本月共开设代理总数：<span style="color:red">66</span>个'
                },
                legend: {
                    enabled: false
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: [
                        '周日',
                        '周一',
                        '周二',
                        '周三',
                        '周四',
                        '周五',
                        '周六'
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: ''
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        borderWidth: 0
                    }
                },
                series: [{
                    data: [5, 8, 3, 2, 5, 5, 7]
                }]
            });
            //代理商历史图
            $('#agent-year-chart').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: null
                },
                subtitle: {
                    useHTML: true,
                    text: '本周共开设代理总数：<span style="color:red">66</span>个'
                },
                legend: {
                    enabled: false
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: [
                        '周日',
                        '周一',
                        '周二',
                        '周三',
                        '周四',
                        '周五',
                        '周六'
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: ''
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        borderWidth: 0
                    }
                },
                series: [{
                    data: [23, 21, 22, 17, 18, 25, 31]
                }]
            });
            //玩家周图
            $('#player-week-chart').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: null
                },
                subtitle: {
                    useHTML: true,
                    text: '本周共开设代理总数：<span style="color:red">66</span>个'
                },
                legend: {
                    enabled: false
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: [
                        '周日',
                        '周一',
                        '周二',
                        '周三',
                        '周四',
                        '周五',
                        '周六'
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: ''
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        borderWidth: 0
                    }
                },
                series: [{
                    data: [23, 21, 22, 17, 18, 25, 31]
                }]
            });
            //玩家月图
            $('#player-month-chart').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: null
                },
                subtitle: {
                    useHTML: true,
                    text: '本月共开设代理总数：<span style="color:red">66</span>个'
                },
                legend: {
                    enabled: false
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: [
                        '周日',
                        '周一',
                        '周二',
                        '周三',
                        '周四',
                        '周五',
                        '周六'
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: ''
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        borderWidth: 0
                    }
                },
                series: [{
                    data: [5, 8, 3, 2, 5, 5, 7]
                }]
            });
            //玩家历史图
            $('#player-year-chart').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: null
                },
                subtitle: {
                    useHTML: true,
                    text: '本周共开设代理总数：<span style="color:red">66</span>个'
                },
                legend: {
                    enabled: false
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: [
                        '周日',
                        '周一',
                        '周二',
                        '周三',
                        '周四',
                        '周五',
                        '周六'
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: ''
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        borderWidth: 0
                    }
                },
                series: [{
                    data: [23, 21, 22, 17, 18, 25, 31]
                }]
            });

            //充值页面代理商周图
            $('#charge-agent-week').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: null
                },
                subtitle: {
                    useHTML: true,
                    text: '本周共开设代理总数：<span style="color:red">61</span>个'
                },
                legend: {
                    enabled: true
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: [
                        '周日',
                        '周一',
                        '周二',
                        '周三',
                        '周四',
                        '周五',
                        '周六'
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: ''
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        borderWidth: 0
                    }
                },
                series: [{

                    name: '数量',
                    data: [23, 21, 22, 17, 18, 25, 31]
                }, {
                    color: 'red',
                    name: '金额',
                    data: [20, 16, 22, 17, 18, 23, 31]
                }]
            });
            //代理商月图
            $('#charge-agent-month').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: null
                },
                subtitle: {
                    useHTML: true,
                    text: '本周共开设代理总数：<span style="color:red">61</span>个'
                },
                legend: {
                    enabled: true
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: [
                        '周日',
                        '周一',
                        '周二',
                        '周三',
                        '周四',
                        '周五',
                        '周六'
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: ''
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        borderWidth: 0
                    }
                },
                series: [{

                    name: '数量',
                    data: [23, 21, 22, 17, 18, 25, 31]
                }, {
                    color: 'red',
                    name: '金额',
                    data: [20, 16, 22, 17, 18, 23, 31]
                }]
            });
            //代理商历史图
            $('#charge-agent-history').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: null
                },
                subtitle: {
                    useHTML: true,
                    text: '本周共开设代理总数：<span style="color:red">61</span>个'
                },
                legend: {
                    enabled: true
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: [
                        '周日',
                        '周一',
                        '周二',
                        '周三',
                        '周四',
                        '周五',
                        '周六'
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: ''
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        borderWidth: 0
                    }
                },
                series: [{

                    name: '数量',
                    data: [23, 21, 22, 17, 18, 25, 31]
                }, {
                    color: 'red',
                    name: '金额',
                    data: [20, 16, 22, 17, 18, 23, 31]
                }]
            });
            //玩家周图
            $('#player-week-chart').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: null
                },
                subtitle: {
                    useHTML: true,
                    text: '本周共开设代理总数：<span style="color:red">61</span>个'
                },
                legend: {
                    enabled: true
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: [
                        '周日',
                        '周一',
                        '周二',
                        '周三',
                        '周四',
                        '周五',
                        '周六'
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: ''
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        borderWidth: 0
                    }
                },
                series: [{

                    name: '数量',
                    data: [23, 21, 22, 17, 18, 25, 31]
                }, {
                    color: 'red',
                    name: '金额',
                    data: [20, 16, 22, 17, 18, 23, 31]
                }]
            });
            //玩家月图
            $('#player-month-chart').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: null
                },
                subtitle: {
                    useHTML: true,
                    text: '本周共开设代理总数：<span style="color:red">61</span>个'
                },
                legend: {
                    enabled: true
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: [
                        '周日',
                        '周一',
                        '周二',
                        '周三',
                        '周四',
                        '周五',
                        '周六'
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: ''
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        borderWidth: 0
                    }
                },
                series: [{

                    name: '数量',
                    data: [23, 21, 22, 17, 18, 25, 31]
                }, {
                    color: 'red',
                    name: '金额',
                    data: [20, 16, 22, 17, 18, 23, 31]
                }]
            });
            //玩家历史图
            $('#player-year-chart').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: null
                },
                subtitle: {
                    useHTML: true,
                    text: '本周共开设代理总数：<span style="color:red">61</span>个'
                },
                legend: {
                    enabled: true
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: [
                        '周日',
                        '周一',
                        '周二',
                        '周三',
                        '周四',
                        '周五',
                        '周六'
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: ''
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        borderWidth: 0
                    }
                },
                series: [{

                    name: '数量',
                    data: [23, 21, 22, 17, 18, 25, 31]
                }, {
                    color: 'red',
                    name: '金额',
                    data: [20, 16, 22, 17, 18, 23, 31]
                }]
            });
            $(".foot>div").click(function() {
                $(this).addClass("active").siblings().removeClass("active");
            });
        }
    };
    var finance={
        common:{},
        //初始化
        init:function(){
            this.getChart();
        },
        getChart:function(){
            //财务图表
            for(var i=1;i<10;i++){
                $('#finance-chart'+i).highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: null
                },
                subtitle: {
                    useHTML: true,
                    text: '本周共开设代理总数：<span style="color:red">61</span>个'
                },
                legend: {
                    enabled: true
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: [
                        '周日',
                        '周一',
                        '周二',
                        '周三',
                        '周四',
                        '周五',
                        '周六'
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: ''
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        borderWidth: 0
                    }
                },
                series: [{

                    name: '数量',
                    data: [23, 21, 22, 17, 18, 25, 31]
                }, {
                    color: 'red',
                    name: '金额',
                    data: [20, 16, 22, 17, 18, 23, 31]
                }]
            });
            }
        }
    };
    var operate={
        common:{

        },
        //初始化
        init:function(){
            this.initEvent();
        },
        //初始化事件
        initEvent:function(){
            var self = this;
             $(document).on('click', '#query1', function() {
                for(var i=1;i<5;i++){
                    self.getChart(i);
                }
            });
             $(document).on('click', '#query2', function() {
                    self.getChart(5);
            });
             $(document).on('click', '#query3', function() {
                    for(var i=6;i<9;i++){
                    self.getChart(i);
                }
            });
             $(document).on('click', '#query4', function() {
                    for(var i=9;i<12;i++){
                    self.getChart(i);
                }
            });
        },
        //获取图表
        getChart:function(i){
            $('#operate-chart'+i).highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: null
                },
                subtitle: {
                    useHTML: true,
                    text: '实时在线人数：<span style="color:red">66</span>人'
                },
                legend: {
                    enabled: false
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: [
                        '0', 
                        '1', 
                        '2', 
                        '3', 
                        '4', 
                        '5', 
                        '6',
                        '7',
                        '8',
                        '9',
                        '10',
                        '11',
                        '12',
                        '13',
                        '14',
                        '15',
                        '16',
                        '17',
                        '18',
                        '19',
                        '20'
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: ''
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        borderWidth: 0
                    }
                },
                series: [{
                    data: [11,10,21,13,10,10,15,16,10,22,32,10,15,10,17,10,18,10,19,10,22]
                }]
            });
        }
    };
    base.init();
    finance.init();
    operate.init();
})