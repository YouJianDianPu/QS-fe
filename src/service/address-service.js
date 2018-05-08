/*
* @Author: YouJDP
* @Date:   2017-06-07 10:30:06
* @Last Modified by:   YouJDP
* @Last Modified time: 2018-03-20 22:03:21
*/

'use strict';
var _qs = require('util/qs.js');

var _address = {
    // 获取地址列表
    getAddressList : function(resolve, reject){
        _qs.request({
            url     : _qs.getServerUrl('http://localhost:8080/shipping/list.do'),
            data    : {
                pageSize : 50
            },
            success : resolve,
            error   : reject
        });
    },
    // 新建收件人
    save : function(addressInfo, resolve, reject){
        _qs.request({
            url     : _qs.getServerUrl('http://localhost:8080/shipping/add.do'),
            data    : addressInfo,
            success : resolve,
            error   : reject
        });
    },
    // 更新收件人
    update : function(addressInfo, resolve, reject){
        _qs.request({
            url     : _qs.getServerUrl('http://localhost:8080/shipping/update.do'),
            data    : addressInfo,
            success : resolve,
            error   : reject
        });
    },
    // 删除收件人
    deleteAddress : function(shippingId, resolve, reject){
        _qs.request({
            url     : _qs.getServerUrl('http://localhost:8080/shipping/del.do'),
            data    : {
                shippingId : shippingId
            },
            success : resolve,
            error   : reject
        });
    },
    // 获取单条收件人信息
    getAddress : function(shippingId, resolve, reject){
        _qs.request({
            url     : _qs.getServerUrl('http://localhost:8080/shipping/select.do'),
            data    : {
                shippingId : shippingId
            },
            success : resolve,
            error   : reject
        });
    },
}
module.exports = _address;