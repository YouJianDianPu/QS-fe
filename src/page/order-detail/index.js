/*
* @Author: Rosen
* @Date:   2017-06-09 17:05:08
* @Last Modified by:   YouJDP
* @Last Modified time: 2018-03-26 01:05:31
*/

'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide         = require('page/common/nav-side/index.js');
var _qs             = require('util/qs.js');
var _order          = require('service/order-service.js');
var templateIndex   = require('./index.string');

// page 逻辑部分
var page = {
    data: {
        orderNumber : _qs.getUrlParam('orderNumber')
    },
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad : function(){
        // 初始化左侧菜单
        navSide.init({
            name: 'order-list'
        });
        // 加载detail数据
        this.loadDetail();
    },
    bindEvent : function(){
        var _this = this;
        $(document).on('click', '.order-cancel', function(){
            if(window.confirm('确实要取消该订单？')){
                _order.cancelOrder(_this.data.orderNumber, function(res){
                    _qs.successTips('该订单取消成功');
                    _this.loadDetail();
                }, function(errMsg){
                    _qs.errorTips(errMsg);
                });
            }
        });
    },
    // 加载订单列表
    loadDetail: function(){
        var _this = this,
            orderDetailHtml = '',
            $content        = $('.content');
        $content.html('<div class="loading"></div>');
        console.log(_this.data);
        _order.getOrderDetail(_this.data.orderNumber, function(res){
            _this.dataFilter(res);
            // 渲染html
            orderDetailHtml = _qs.renderHtml(templateIndex, res);
            $content.html(orderDetailHtml);
            _this.listenOrderStatus();
        }, function(errMsg){
            $content.html('<p class="err-tip">' + errMsg + '</p>');
        });
    },
    // 数据的适配
    dataFilter : function(data){
        data.takefood       = data.status == 40;
        data.needPay        = data.status == 10;
        data.isCancelable   = data.status == 10;
    },
    // 监听订单状态
    listenOrderStatus : function(){
        var _this = this;
        this.paymentTimer = window.setInterval(function(){
            _order.canTake(_this.data.orderNumber, function(res){
                if(res == true){
                    window.location.href 
                        = './result.html?type=takefood&orderNumber=' + _this.data.orderNumber;
                }
            });
        }, 5e3);
    }
};
$(function(){
    page.init();
});