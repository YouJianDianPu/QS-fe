/*
* @Author: YouJDP
* @Date:   2018-02-26 22:42:57
* @Last Modified by:   YouJDP
* @Last Modified time: 2018-02-26 23:21:20
*/

'use strict';

require('./index.css');
var _qs = require('util/qs.js');
var templateIndex = require('./index.string');

var navSide = {
	option: {
		name: '',
		navList: [
			{name: 'user-center', desc: '个人中心', href: './user-center.html'},
			{name: 'order-list', desc: '我的订单', href: './order-list.html'},
			{name: 'pass-update', desc: '修改密码', href: './pass-update.html'},
			{name: 'about', desc: '关于', href: './about.html'},
		]
	},
	init: function(option){
		$.extend(this.option, option);
		this.renderNav();
	},
	//渲染菜单
	renderNav: function(){
		//计算active数据
		for(var i = 0, ilength = this.option.navList.length; i < ilength; i++){
			if(this.option.navList[i].name === this.option.name){
				this.option.navList[i].isActive = true;
			}
		};
		//渲染list数据
		var navHtml = _qs.renderHtml(templateIndex, {
			navList: this.option.navList
		});
		//将html放入容器
		$('.nav-side').html(navHtml);
	}
};

module.exports = navSide;