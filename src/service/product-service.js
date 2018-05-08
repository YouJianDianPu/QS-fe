/*
* @Author: Rosen
* @Date:   2017-05-27 18:26:52
* @Last Modified by:   YouJDP
* @Last Modified time: 2018-03-20 22:04:33
*/

'use strict';

var _qs = require('util/qs.js');

var _product = {
    // 获取商品列表
    getProductList : function(listParam, resolve, reject){
        _qs.request({
            url     : _qs.getServerUrl('http://localhost:8080/product/list.do'),
            data    : listParam,
            success : resolve,
            error   : reject
        });
    },
    // 获取商品详细信息
    getProductDetail : function(productId, resolve, reject){
        _qs.request({
            url     : _qs.getServerUrl('http://localhost:8080/product/detail.do'),
            data    : {
                productId : productId
            },
            success : resolve,
            error   : reject
        });
    }
}
module.exports = _product;