/*
* @Author: YouJDP
* @Date:   2018-02-26 23:26:22
* @Last Modified by:   YouJDP
* @Last Modified time: 2018-03-25 15:50:10
*/

'use strict';

require('./index.css');
require('page/common/nav-simple/index.js');
var _qs = require('util/qs.js');

$(function(){
	var type        = _qs.getUrlParam('type') || 'default',
        $element    = $('.' + type + '-success');
    if(type === 'payment'){
        var orderNumber  = _qs.getUrlParam('orderNumber'),
            $orderNumber = $element.find('.order-number');
        $orderNumber.attr('href', $orderNumber.attr('href') + orderNumber);
    }
    // 显示对应的提示元素
    $element.show();
})
