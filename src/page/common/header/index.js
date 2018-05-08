/*
* @Author: YouJDP
* @Date:   2018-02-26 15:03:42
* @Last Modified by:   YouJDP
* @Last Modified time: 2018-02-26 15:40:50
*/

'use strict';

require('./index.css');
var _qs = require('util/qs.js');

//通用头部
var header = {
	init: function(){
		this.bindEvent();
	},
	onload: function(){
		var keyword = _qs.getUrlParam('keyword');
		//回填输入框
		if(keyword){
			$('#search-input').val(keyword);
		}
	},
	bindEvent: function(){
		var _this = this;
		//点击提交
		$('#search-btn').click(function(){
			_this.searchSubmit();
		})
	},
	searchSubmit: function(){
		var keyword = $.trim($('#search-input').val());
		if(keyword){
			window.location.href = './list.html?keyword=' + keyword;
		}
		else{
			_qs.goHome();
		}
	}
};

header.init();