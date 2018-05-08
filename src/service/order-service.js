/*
* @Author: Rosen
* @Date:   2017-06-06 09:25:41
* @Last Modified by:   YouJDP
* @Last Modified time: 2018-03-26 00:59:02
*/

'use strict';
var _qs = require('util/qs.js');

var _order = {
    // 获取商品列表
    getProductList : function(resolve, reject){
        _qs.request({
            url     : _qs.getServerUrl('http://localhost:8080/order/get_order_cart_product.do'),
            success : resolve,
            error   : reject
        });
    },
    // 提交订单
    createOrder : function(orderInfo, resolve, reject){
        _qs.request({
            url     : _qs.getServerUrl('http://localhost:8080/order/create.do'),
            data    : orderInfo,
            success : resolve,
            error   : reject
        });
    },
    // 获取订单列表
    getOrderList : function(listParam, resolve, reject){
        _qs.request({
            url     : _qs.getServerUrl('http://localhost:8080/order/list.do'),
            data    : listParam,
            success : resolve,
            error   : reject
        });
    },
    // 获取订单详情
    getOrderDetail : function(orderNumber, resolve, reject){
        _qs.request({
            url     : _qs.getServerUrl('http://localhost:8080/order/detail.do'),
            data    : {
                orderNo : orderNumber
            },
            success : resolve,
            error   : reject
        });
    },
    // 取消订单
    cancelOrder : function(orderNumber, resolve, reject){
        _qs.request({
            url     : _qs.getServerUrl('http://localhost:8080/order/cancel.do'),
            data    : {
                orderNo : orderNumber
            },
            success : resolve,
            error   : reject
        });
    },
    //取餐
    canTake: function(orderNumber, resolve, reject){
        _qs.request({
            url     : _qs.getServerUrl('http://localhost:8080/order/canTake.do'),
            data    : {
                orderNo : orderNumber
            },
            success : resolve,
            error   : reject
        });
    }
}
module.exports = _order;