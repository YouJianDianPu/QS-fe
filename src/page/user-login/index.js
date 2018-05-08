/*
* @Author: Rosen
* @Date:   2017-05-08 22:26:19
* @Last Modified by:   YouJDP
* @Last Modified time: 2018-03-22 12:33:40
*/

'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _user   = require('service/user-service.js');
var _qs     = require('util/qs.js');

// 表单里的错误提示
var formError = {
    show : function(errMsg){
        $('.error-item').show().find('.err-msg').text(errMsg);
    },
    hide : function(){
        $('.error-item').hide().find('.err-msg').text('');
    }
};

// page 逻辑部分
var page = {
    init: function(){
        this.bindEvent();
    },
    bindEvent : function(){
        var _this = this;
        // 登录按钮的点击
        $('#submit').click(function(){
            _this.submit();
        });
    },
    // 提交表单
    // 提交表单
    submit : function(){
        var formData = {
                username : $.trim($('#username').val()),
                password : $.trim($('#password').val())
            },
            // 表单验证结果
            validataResult = this.formValidata(formData);
        // 验证成功
        if(validataResult.status){
            _user.login(formData, function(res){
                window.location.href = _qs.getUrlParam('redirect') || './index.html';
            }, function(errMsg){
                formError.show(errMsg);
            });
        }
        // 验证失败
        else{
            // 错误提示
            formError.show(validataResult.msg);
        }

    },
    // 表单字段的验证
    formValidata : function(formData){
        var result = {
            status  : false,
            msg     : ''
        };
        if(!_qs.validata(formData.username, 'require')){
            result.msg = '用户名不能为空';
            return result;
        }
        if(!_qs.validata(formData.password, 'require')){
            result.msg = '密码不能为空';
            return result;
        }
        // 通过验证，返回正确提示
        result.status   = true;
        result.msg      = '验证通过';
        return result;
    }
};
$(function(){
    page.init();
});