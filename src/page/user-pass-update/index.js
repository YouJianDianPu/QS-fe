/*
* @Author: Rosen
* @Date:   2017-05-24 11:03:57
* @Last Modified by:   YouJDP
* @Last Modified time: 2018-02-28 22:58:16
*/

'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide         = require('page/common/nav-side/index.js');
var _qs             = require('util/qs.js');
var _user           = require('service/user-service.js');

// page 逻辑部分
var page = {
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad : function(){
        // 初始化左侧菜单
        navSide.init({
            name: 'user-pass-update'
        });
    },
    bindEvent : function(){
        var _this = this;
        // 点击提交按钮后的动作
        $(document).on('click', '.btn-submit', function(){
            var userInfo = {
                password        : $.trim($('#password').val()),
                passwordNew     : $.trim($('#password-new').val()),
                passwordConfirm : $.trim($('#password-confirm').val())
            },
            validataResult = _this.validataForm(userInfo);
            if(validataResult.status){
                // 更改用户密码
                _user.updatePassword({
                    passwordOld : userInfo.password,
                    passwordNew : userInfo.passwordNew
                }, function(res, msg){
                    _qs.successTips(msg);
                }, function(errMsg){
                    _qs.errorTips(errMsg);
                });
            }
            else{
                _qs.errorTips(validataResult.msg);
            }
        });
    },
    // 验证字段信息
    validataForm : function(formData){
        var result = {
            status  : false,
            msg     : ''
        };
        // 验证原密码是否为空
        if(!_qs.validata(formData.password, 'require')){
            result.msg = '原密码不能为空';
            return result;
        }
        // 验证新密码长度
        if(!formData.passwordNew || formData.passwordNew.length < 6){
            result.msg = '密码长度不得少于6位';
            return result;
        }
        // 验证两次输入的密码是否一致
        if(formData.passwordNew !== formData.passwordConfirm){
            result.msg = '两次输入的密码不一致';
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