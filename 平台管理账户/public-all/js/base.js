$(function() {
    let base = {
        common: {},
        init: function() {
            $(".tab ul li").click(function() {
                let index = $(this).index();
                let number = (index) * 50 + "%";
                $(this).addClass("active").siblings().removeClass("active");
                $(".tab-table>div:eq(" + index + ")").addClass("active").siblings().removeClass("active");
                $(".blue_block").animate({ left: number });
            });
            //代理商查询切换
            $(".agent .child-tab ul li").click(function() {
                let index = $(this).index();
                let number = (index) * 25 + "%";
                $(this).addClass("active").siblings().removeClass("active");
                $(".agent .child-tab-table>div:eq(" + index + ")").addClass("active").siblings().removeClass("active");
                $(".agent .child_blue_block").animate({ left: number });
            });
            //玩家查询切换
            $(".player .child-tab ul li").click(function() {
                let index = $(this).index();
                let number = (index) * 25 + "%";
                $(this).addClass("active").siblings().removeClass("active");
                $(".player .child-tab-table>div:eq(" + index + ")").addClass("active").siblings().removeClass("active");
                $(".player .child_blue_block").animate({ left: number });
            });
            $(".content1 select").click(function(){

            });
            //代理商周图
            $('#agent-week-chart').highcharts({
                chart: {
                    type: 'column'
                },
                title:{
                    text:null
                },
                subtitle: {
                    useHTML: true,
                    text: '本周共开设代理总数：<span style="color:red">66</span>个'
                },
                legend:{
                    enabled:false
                },
                credits:{
                    enabled:false
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
                title:{
                    text:null
                },
                subtitle: {
                    useHTML: true,
                    text: '本月共开设代理总数：<span style="color:red">66</span>个'
                },
                legend:{
                    enabled:false
                },
                credits:{
                    enabled:false
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
                title:{
                    text:null
                },
                subtitle: {
                    useHTML: true,
                    text: '本周共开设代理总数：<span style="color:red">66</span>个'
                },
                legend:{
                    enabled:false
                },
                credits:{
                    enabled:false
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
                title:{
                    text:null
                },
                subtitle: {
                    useHTML: true,
                    text: '本周共开设代理总数：<span style="color:red">66</span>个'
                },
                legend:{
                    enabled:false
                },
                credits:{
                    enabled:false
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
                title:{
                    text:null
                },
                subtitle: {
                    useHTML: true,
                    text: '本月共开设代理总数：<span style="color:red">66</span>个'
                },
                legend:{
                    enabled:false
                },
                credits:{
                    enabled:false
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
                title:{
                    text:null
                },
                subtitle: {
                    useHTML: true,
                    text: '本周共开设代理总数：<span style="color:red">66</span>个'
                },
                legend:{
                    enabled:false
                },
                credits:{
                    enabled:false
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
    base.init();
})