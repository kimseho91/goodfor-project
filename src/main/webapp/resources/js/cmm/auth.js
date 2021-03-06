"use strict";
var auth = auth || {};
auth = (()=>{
	const WHEN_ERR = '호출하는 JS파일을 찾지 못했습니다.'
	let _, js, css, img, auth_vue_js,trading_vue_js,admin_vue_js,notice_vue_js,notice_js,admin_js,trading_js
	let init =()=> {
		_=$.ctx()
		js=$.js()
		css=$.css()
		img=$.img()
		auth_vue_js=js+'/vue/auth_vue.js'
		trading_vue_js=js+'/vue/trading_vue.js'
		admin_vue_js=js+'/vue/admin_vue.js'
		notice_vue_js=js+'/vue/notice_vue.js'
		notice_js=js+'/cmm/notice.js'
		admin_js=js+'/cmm/admin.js'
		trading_js=js+'/cmm/trading.js'
	}	
	let onCreate =()=>{
		init();
		$.when(
			$.getScript(auth_vue_js),
			$.getScript(trading_vue_js),
			$.getScript(admin_vue_js),
			$.getScript(notice_vue_js),
			$.getScript(notice_js),
			$.getScript(admin_js),
			$.getScript(trading_js)
		).done(()=>{
			setContentView()
			$('#btn_main').click(e=>{
				e.preventDefault()
				$('body').empty()
				.html(auth_vue.auth_body({css: $.css(), img: $.img()}))
			})
			$('#btn_trading').click(e=>{
				e.preventDefault()
				$('#body_main').empty()
				.html(trading_vue.trading_mainbody({css: $.css(), img: $.img()}))
				.appendTo('#body_main')
				trading.onCreate()
			})
			$('#btn_notice').click(e=>{
				e.preventDefault()
				$('#body_main').empty()
				.html(notice_vue.notice_body({css: $.css(), img: $.img()}))
				.appendTo('#body_main')
				notice.onCreate()
				
			})
			$('#btn_admin').click(e=>{
				e.preventDefault()
				$('#body_main').empty()
				.html(admin_vue.admin_body({css: $.css(), img: $.img()}))
				.appendTo('#body_main')
				admin.onCreate()
				
			})
		})
	}
		
	let setContentView =()=>{
		$('body').html(auth_vue.auth_body({css: $.css(), img: $.img()}))
	}

	return {onCreate}	
	
})();