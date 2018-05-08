/*
* @Author: YouJDP
* @Date:   2018-02-25 11:15:32
* @Last Modified by:   YouJDP
* @Last Modified time: 2018-03-28 14:42:06
*/

'use strict';

require('./index.css');
var _qs = require('util/qs.js');
var _user = require('service/user-service.js');
var _cart = require('service/cart-service.js');

var nav = {
	init: function(){
		this.bindEvent();
		this.loadUserInfo();
		this.loadCartCount();
		return this;
	},
	bindEvent: function(){
		//登陆点击
		$('.js-login').click(function(){
			_qs.doLogin();
		});
		//注册点击
		$('.js-register').click(function(){
			window.location.href = './user-register.html';
		});
		//退出点击
		$('.js-logout').click(function(){
			_user.logout(function(res){
				window.location.reload();
			}, function(errMsg){
				_qs.errorTips(errMsg);
			});
		});
	},
	//加载用户信息
	loadUserInfo: function(){
		_user.checkLogin(function(res){
			$('.user.not-login').hide().siblings('.user.login').show().find('.username').text(res.username);
		}, function(errMsg){

		});
	},
	//加载购物车信息
	loadCartCount: function(){
		_cart.getCartCount(function(res){
			$('.nav .cart-count').text(res || 0);
		}, function(errMsg){
			$('.nav .cart-count').text(0);
		});
	}
};

module.exports = nav.init();