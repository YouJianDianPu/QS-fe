/*
* @Author: Rosen
* @Date:   2017-06-10 20:28:03
* @Last Modified by:   YouJDP
* @Last Modified time: 2018-03-20 22:04:27
*/

'use strict';
var _qs = require('util/qs.js');

var _payment = {
    // 获取支付信息
    getPaymentInfo : function(orderNumber, resolve, reject){
        _qs.request({
            url     : _qs.getServerUrl('http://localhost:8080/order/pay.do'),
            data    : {
                orderNo : orderNumber
            },
            success : resolve,
            error   : reject
        });
    },
    // 获取订单状态
    getPaymentStatus : function(orderNumber, resolve, reject){
        _qs.request({
            url     : _qs.getServerUrl('http://localhost:8080/order/query_order_pay_status.do'),
            data    : {
                orderNo : orderNumber
            },
            success : resolve,
            error   : reject
        });
    }
}
module.exports = _payment;